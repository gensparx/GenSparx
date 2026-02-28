import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { GenSparxConfig } from "../config/config.js";
import { telegramPlugin } from "../../extensions/telegram/src/channel.js";
import { setTelegramRuntime } from "../../extensions/telegram/src/runtime.js";
import { whatsappPlugin } from "../../extensions/whatsapp/src/channel.js";
import { setWhatsAppRuntime } from "../../extensions/whatsapp/src/runtime.js";
import * as replyModule from "../auto-reply/reply.js";
import { resolveMainSessionKey } from "../config/sessions.js";
import { setActivePluginRegistry } from "../plugins/runtime.js";
import { createPluginRuntime } from "../plugins/runtime/index.js";
import { createTestRegistry } from "../test-utils/channel-plugins.js";
import { runHeartbeatOnce } from "./heartbeat-runner.js";

// Avoid pulling optional runtime deps during isolated runs.
vi.mock("jiti", () => ({ createJiti: () => () => ({}) }));

installHeartbeatRunnerTestRuntime();

describe("resolveHeartbeatIntervalMs", () => {
  it("respects ackMaxChars for heartbeat acks", async () => {
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-hb-"));
    const storePath = path.join(tmpDir, "sessions.json");
    const replySpy = vi.spyOn(replyModule, "getReplyFromConfig");
    try {
      const cfg: GenSparxConfig = {
        agents: {
          defaults: {
            workspace: tmpDir,
            heartbeat: {
              every: "5m",
              target: "whatsapp",
              ackMaxChars: 0,
            },
          },
        },
      },
      channels: params.channels as never,
      ...(params.messages ? { messages: params.messages as never } : {}),
      session: { store: params.storePath },
    };
  }

  function makeWhatsAppDeps(
    params: {
      sendWhatsApp?: ReturnType<typeof vi.fn>;
      getQueueSize?: () => number;
      nowMs?: () => number;
      webAuthExists?: () => Promise<boolean>;
      hasActiveWebListener?: () => boolean;
    } = {},
  ) {
    return {
      ...(params.sendWhatsApp
        ? { sendWhatsApp: params.sendWhatsApp as unknown as HeartbeatDeps["sendWhatsApp"] }
        : {}),
      getQueueSize: params.getQueueSize ?? (() => 0),
      nowMs: params.nowMs ?? (() => 0),
      webAuthExists: params.webAuthExists ?? (async () => true),
      hasActiveWebListener: params.hasActiveWebListener ?? (() => true),
    } satisfies HeartbeatDeps;
  }

  function makeTelegramDeps(
    params: {
      sendTelegram?: ReturnType<typeof vi.fn>;
      getQueueSize?: () => number;
      nowMs?: () => number;
    } = {},
  ) {
    return {
      ...(params.sendTelegram
        ? { sendTelegram: params.sendTelegram as unknown as HeartbeatDeps["sendTelegram"] }
        : {}),
      getQueueSize: params.getQueueSize ?? (() => 0),
      nowMs: params.nowMs ?? (() => 0),
    } satisfies HeartbeatDeps;
  }

  function createMessageSendSpy(extra: Record<string, unknown> = {}) {
    return vi.fn().mockResolvedValue({
      messageId: "m1",
      toJid: "jid",
      ...extra,
    });
  }

  async function runTelegramHeartbeatWithDefaults(params: {
    tmpDir: string;
    storePath: string;
    replySpy: ReturnType<typeof vi.spyOn>;
    replyText: string;
    messages?: Record<string, unknown>;
    telegramOverrides?: Record<string, unknown>;
  }) {
    const cfg = createHeartbeatConfig({
      tmpDir: params.tmpDir,
      storePath: params.storePath,
      heartbeat: { every: "5m", target: "telegram" },
      channels: {
        telegram: {
          token: "test-token",
          allowFrom: ["*"],
          heartbeat: { showOk: false },
          ...params.telegramOverrides,
        },
      },
      ...(params.messages ? { messages: params.messages } : {}),
    });

    await seedMainSessionStore(params.storePath, cfg, {
      lastChannel: "telegram",
      lastProvider: "telegram",
      lastTo: TELEGRAM_GROUP,
    });

    params.replySpy.mockResolvedValue({ text: params.replyText });
    const sendTelegram = createMessageSendSpy();
    await runHeartbeatOnce({
      cfg,
      deps: makeTelegramDeps({ sendTelegram }),
    });
    return sendTelegram;
  }

  function createWhatsAppHeartbeatConfig(params: {
    tmpDir: string;
    storePath: string;
    heartbeat?: Record<string, unknown>;
    visibility?: Record<string, unknown>;
  }): OpenClawConfig {
    return createHeartbeatConfig({
      tmpDir: params.tmpDir,
      storePath: params.storePath,
      heartbeat: {
        every: "5m",
        target: "whatsapp",
        ...params.heartbeat,
      },
      channels: {
        whatsapp: {
          allowFrom: ["*"],
          ...(params.visibility ? { heartbeat: params.visibility } : {}),
        },
      },
    });
  }

  async function createSeededWhatsAppHeartbeatConfig(params: {
    tmpDir: string;
    storePath: string;
    heartbeat?: Record<string, unknown>;
    visibility?: Record<string, unknown>;
  }): Promise<OpenClawConfig> {
    const cfg = createWhatsAppHeartbeatConfig(params);
    await seedMainSessionStore(params.storePath, cfg, {
      lastChannel: "whatsapp",
      lastProvider: "whatsapp",
      lastTo: WHATSAPP_GROUP,
    });
    return cfg;
  }

  it("respects ackMaxChars for heartbeat acks", async () => {
    await withTempHeartbeatSandbox(async ({ tmpDir, storePath, replySpy }) => {
      const cfg = createWhatsAppHeartbeatConfig({
        tmpDir,
        storePath,
        heartbeat: { ackMaxChars: 0 },
      });

      await seedMainSessionStore(storePath, cfg, {
        lastChannel: "whatsapp",
        lastProvider: "whatsapp",
        lastTo: WHATSAPP_GROUP,
      });

      replySpy.mockResolvedValue({ text: "HEARTBEAT_OK 🦞" });
      const sendWhatsApp = createMessageSendSpy();

      await runHeartbeatOnce({
        cfg,
        deps: makeWhatsAppDeps({ sendWhatsApp }),
      });

      expect(sendWhatsApp).toHaveBeenCalled();
    });
  });

  it("sends HEARTBEAT_OK when visibility.showOk is true", async () => {
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-hb-"));
    const storePath = path.join(tmpDir, "sessions.json");
    const replySpy = vi.spyOn(replyModule, "getReplyFromConfig");
    try {
      const cfg: GenSparxConfig = {
        agents: {
          defaults: {
            workspace: tmpDir,
            heartbeat: {
              every: "5m",
              target: "whatsapp",
            },
          },
        },
        channels: { whatsapp: { allowFrom: ["*"], heartbeat: { showOk: true } } },
        session: { store: storePath },
      };
      const sessionKey = resolveMainSessionKey(cfg);

      await fs.writeFile(
        storePath,
        visibility: { showOk: true },
      });

      await seedMainSessionStore(storePath, cfg, {
        lastChannel: "whatsapp",
        lastProvider: "whatsapp",
        lastTo: WHATSAPP_GROUP,
      });

      replySpy.mockResolvedValue({ text: "HEARTBEAT_OK" });
      const sendWhatsApp = createMessageSendSpy();

      await runHeartbeatOnce({
        cfg,
        deps: makeWhatsAppDeps({ sendWhatsApp }),
      });

      expect(sendWhatsApp).toHaveBeenCalledTimes(1);
      expect(sendWhatsApp).toHaveBeenCalledWith(WHATSAPP_GROUP, "HEARTBEAT_OK", expect.any(Object));
    });
  });

  it.each([
    {
      title: "does not deliver HEARTBEAT_OK to telegram when showOk is false",
      replyText: "HEARTBEAT_OK",
      expectedCalls: 0,
    },
    {
      title: "strips responsePrefix before HEARTBEAT_OK detection and suppresses short ack text",
      replyText: "[openclaw] HEARTBEAT_OK all good",
      messages: { responsePrefix: "[openclaw]" },
      expectedCalls: 0,
    },
    {
      title: "does not strip alphanumeric responsePrefix from larger words",
      replyText: "History check complete",
      messages: { responsePrefix: "Hi" },
      expectedCalls: 1,
      expectedText: "History check complete",
    },
  ])("$title", async ({ replyText, messages, expectedCalls, expectedText }) => {
    await withTempTelegramHeartbeatSandbox(async ({ tmpDir, storePath, replySpy }) => {
      const sendTelegram = await runTelegramHeartbeatWithDefaults({
        tmpDir,
        storePath,
        replySpy,
        replyText,
        messages,
      });

      expect(sendTelegram).toHaveBeenCalledTimes(expectedCalls);
      if (expectedText) {
        expect(sendTelegram).toHaveBeenCalledWith(TELEGRAM_GROUP, expectedText, expect.any(Object));
      }
    });
  });

  it("skips heartbeat LLM calls when visibility disables all output", async () => {
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-hb-"));
    const storePath = path.join(tmpDir, "sessions.json");
    const replySpy = vi.spyOn(replyModule, "getReplyFromConfig");
    try {
      const cfg: GenSparxConfig = {
        agents: {
          defaults: {
            workspace: tmpDir,
            heartbeat: {
              every: "5m",
              target: "whatsapp",
            },
          },
        },
        channels: {
          whatsapp: {
            allowFrom: ["*"],
            heartbeat: { showOk: false, showAlerts: false, useIndicator: false },
          },
        },
        session: { store: storePath },
      };
      const sessionKey = resolveMainSessionKey(cfg);

      await fs.writeFile(
        storePath,
        visibility: { showOk: false, showAlerts: false, useIndicator: false },
      });

      await seedMainSessionStore(storePath, cfg, {
        lastChannel: "whatsapp",
        lastProvider: "whatsapp",
        lastTo: WHATSAPP_GROUP,
      });

      const sendWhatsApp = createMessageSendSpy();

      const result = await runHeartbeatOnce({
        cfg,
        deps: makeWhatsAppDeps({ sendWhatsApp }),
      });

      expect(replySpy).not.toHaveBeenCalled();
      expect(sendWhatsApp).not.toHaveBeenCalled();
      expect(result).toEqual({ status: "skipped", reason: "alerts-disabled" });
    });
  });

  it("skips delivery for markup-wrapped HEARTBEAT_OK", async () => {
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-hb-"));
    const storePath = path.join(tmpDir, "sessions.json");
    const replySpy = vi.spyOn(replyModule, "getReplyFromConfig");
    try {
      const cfg: GenSparxConfig = {
        agents: {
          defaults: {
            workspace: tmpDir,
            heartbeat: {
              every: "5m",
              target: "whatsapp",
            },
          },
        },
        channels: { whatsapp: { allowFrom: ["*"] } },
        session: { store: storePath },
      };
      const sessionKey = resolveMainSessionKey(cfg);

      await fs.writeFile(
        storePath,
      });

      replySpy.mockResolvedValue({ text: "<b>HEARTBEAT_OK</b>" });
      const sendWhatsApp = createMessageSendSpy();

      await runHeartbeatOnce({
        cfg,
        deps: makeWhatsAppDeps({ sendWhatsApp }),
      });

      expect(sendWhatsApp).not.toHaveBeenCalled();
    });
  });

  it("does not regress updatedAt when restoring heartbeat sessions", async () => {
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-hb-"));
    const storePath = path.join(tmpDir, "sessions.json");
    const replySpy = vi.spyOn(replyModule, "getReplyFromConfig");
    try {
      const originalUpdatedAt = 1000;
      const bumpedUpdatedAt = 2000;
      const cfg: GenSparxConfig = {
        agents: {
          defaults: {
            workspace: tmpDir,
            heartbeat: {
              every: "5m",
              target: "whatsapp",
            },
          },
        },
        channels: { whatsapp: { allowFrom: ["*"] } },
        session: { store: storePath },
      };
      const sessionKey = resolveMainSessionKey(cfg);

      await fs.writeFile(
        storePath,
      });

      const sessionKey = await seedMainSessionStore(storePath, cfg, {
        updatedAt: originalUpdatedAt,
        lastChannel: "whatsapp",
        lastProvider: "whatsapp",
        lastTo: WHATSAPP_GROUP,
      });

      replySpy.mockImplementationOnce(async () => {
        const raw = await fs.readFile(storePath, "utf-8");
        const parsed = JSON.parse(raw) as Record<string, { updatedAt?: number } | undefined>;
        if (parsed[sessionKey]) {
          parsed[sessionKey] = {
            ...parsed[sessionKey],
            updatedAt: bumpedUpdatedAt,
          };
        }
        await fs.writeFile(storePath, JSON.stringify(parsed, null, 2));
        return { text: "" };
      });

      await runHeartbeatOnce({
        cfg,
        deps: makeWhatsAppDeps(),
      });

      const finalStore = JSON.parse(await fs.readFile(storePath, "utf-8")) as Record<
        string,
        { updatedAt?: number } | undefined
      >;
      expect(finalStore[sessionKey]?.updatedAt).toBe(bumpedUpdatedAt);
    });
  });

  it("skips WhatsApp delivery when not linked or running", async () => {
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-hb-"));
    const storePath = path.join(tmpDir, "sessions.json");
    const replySpy = vi.spyOn(replyModule, "getReplyFromConfig");
    try {
      const cfg: GenSparxConfig = {
        agents: {
          defaults: {
            workspace: tmpDir,
            heartbeat: { every: "5m", target: "whatsapp" },
          },
        },
        channels: { whatsapp: { allowFrom: ["*"] } },
        session: { store: storePath },
      };
      const sessionKey = resolveMainSessionKey(cfg);

      await fs.writeFile(
        storePath,
      });

      replySpy.mockResolvedValue({ text: "Heartbeat alert" });
      const sendWhatsApp = createMessageSendSpy();

      const res = await runHeartbeatOnce({
        cfg,
        deps: makeWhatsAppDeps({
          sendWhatsApp,
          webAuthExists: async () => false,
          hasActiveWebListener: () => false,
        }),
      });

      expect(res.status).toBe("skipped");
      expect(res).toMatchObject({ reason: "whatsapp-not-linked" });
      expect(sendWhatsApp).not.toHaveBeenCalled();
    });
  });

  it("passes through accountId for telegram heartbeats", async () => {
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-hb-"));
    const storePath = path.join(tmpDir, "sessions.json");
    const replySpy = vi.spyOn(replyModule, "getReplyFromConfig");
    const prevTelegramToken = process.env.TELEGRAM_BOT_TOKEN;
    process.env.TELEGRAM_BOT_TOKEN = "";
    try {
      const cfg: GenSparxConfig = {
        agents: {
          defaults: {
            workspace: tmpDir,
            heartbeat: { every: "5m", target: "telegram" },
          },
        },
        channels: { telegram: { botToken: "test-bot-token-123" } },
        session: { store: storePath },
      };
      const sessionKey = resolveMainSessionKey(cfg);

      await fs.writeFile(
        storePath,
        heartbeat: params.heartbeat,
        channels: { telegram: params.telegram },
      });
      await seedMainSessionStore(storePath, cfg, {
        lastChannel: "telegram",
        lastProvider: "telegram",
        lastTo: TELEGRAM_GROUP,
      });

      replySpy.mockResolvedValue({ text: "Hello from heartbeat" });
      const sendTelegram = createMessageSendSpy({ chatId: TELEGRAM_GROUP });

      await runHeartbeatOnce({
        cfg,
        deps: makeTelegramDeps({ sendTelegram }),
      });

      expect(sendTelegram).toHaveBeenCalledTimes(1);
      expect(sendTelegram).toHaveBeenCalledWith(
        TELEGRAM_GROUP,
        "Hello from heartbeat",
        expect.objectContaining({ accountId: params.expectedAccountId, verbose: false }),
      );
    });
  }

  it("uses explicit heartbeat accountId for telegram delivery", async () => {
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-hb-"));
    const storePath = path.join(tmpDir, "sessions.json");
    const replySpy = vi.spyOn(replyModule, "getReplyFromConfig");
    const prevTelegramToken = process.env.TELEGRAM_BOT_TOKEN;
    process.env.TELEGRAM_BOT_TOKEN = "";
    try {
      const cfg: GenSparxConfig = {
        agents: {
          defaults: {
            workspace: tmpDir,
            heartbeat: { every: "5m", target: "telegram", accountId: "work" },
          },
        },
      },
      expectedAccountId: undefined,
    },
    {
      title: "uses explicit heartbeat accountId for telegram delivery",
      heartbeat: { every: "5m", target: "telegram", accountId: "work" },
      telegram: {
        accounts: {
          work: { botToken: "test-bot-token-123" },
        },
        session: { store: storePath },
      };
      const sessionKey = resolveMainSessionKey(cfg);

      await fs.writeFile(
        storePath,
        JSON.stringify(
          {
            [sessionKey]: {
              sessionId: "sid",
              updatedAt: Date.now(),
              lastChannel: "telegram",
              lastProvider: "telegram",
              lastTo: "123456",
            },
          },
          null,
          2,
        ),
      );

      replySpy.mockResolvedValue({ text: "Hello from heartbeat" });
      const sendTelegram = vi.fn().mockResolvedValue({
        messageId: "m1",
        chatId: "123456",
      });

      await runHeartbeatOnce({
        cfg,
        deps: {
          sendTelegram,
          getQueueSize: () => 0,
          nowMs: () => 0,
        },
      });

      expect(sendTelegram).toHaveBeenCalledTimes(1);
      expect(sendTelegram).toHaveBeenCalledWith(
        "123456",
        "Hello from heartbeat",
        expect.objectContaining({ accountId: "work", verbose: false }),
      );
    } finally {
      replySpy.mockRestore();
      if (prevTelegramToken === undefined) {
        delete process.env.TELEGRAM_BOT_TOKEN;
      } else {
        process.env.TELEGRAM_BOT_TOKEN = prevTelegramToken;
      }
      await fs.rm(tmpDir, { recursive: true, force: true });
    }
  });

  it("does not pre-resolve telegram accountId (allows config-only account tokens)", async () => {
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-hb-"));
    const storePath = path.join(tmpDir, "sessions.json");
    const replySpy = vi.spyOn(replyModule, "getReplyFromConfig");
    const prevTelegramToken = process.env.TELEGRAM_BOT_TOKEN;
    process.env.TELEGRAM_BOT_TOKEN = "";
    try {
      const cfg: GenSparxConfig = {
        agents: {
          defaults: {
            workspace: tmpDir,
            heartbeat: { every: "5m", target: "telegram" },
          },
        },
        channels: {
          telegram: {
            accounts: {
              work: { botToken: "test-bot-token-123" },
            },
          },
        },
        session: { store: storePath },
      };
      const sessionKey = resolveMainSessionKey(cfg);

      await fs.writeFile(
        storePath,
        JSON.stringify(
          {
            [sessionKey]: {
              sessionId: "sid",
              updatedAt: Date.now(),
              lastChannel: "telegram",
              lastProvider: "telegram",
              lastTo: "123456",
            },
          },
          null,
          2,
        ),
      );

      replySpy.mockResolvedValue({ text: "Hello from heartbeat" });
      const sendTelegram = vi.fn().mockResolvedValue({
        messageId: "m1",
        chatId: "123456",
      });

      await runHeartbeatOnce({
        cfg,
        deps: {
          sendTelegram,
          getQueueSize: () => 0,
          nowMs: () => 0,
        },
      });

      expect(sendTelegram).toHaveBeenCalledTimes(1);
      expect(sendTelegram).toHaveBeenCalledWith(
        "123456",
        "Hello from heartbeat",
        expect.objectContaining({ accountId: undefined, verbose: false }),
      );
    } finally {
      replySpy.mockRestore();
      if (prevTelegramToken === undefined) {
        delete process.env.TELEGRAM_BOT_TOKEN;
      } else {
        process.env.TELEGRAM_BOT_TOKEN = prevTelegramToken;
      }
      await fs.rm(tmpDir, { recursive: true, force: true });
    }
  });
});
