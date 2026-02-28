import "./isolated-agent.mocks.js";
import fs from "node:fs/promises";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { runSubagentAnnounceFlow } from "../agents/subagent-announce.js";
import type { CliDeps } from "../cli/deps.js";
import type { GenSparxConfig } from "../config/config.js";
import type { CronJob } from "./types.js";
import { withTempHome as withTempHomeBase } from "../../test/helpers/temp-home.js";
import { telegramOutbound } from "../channels/plugins/outbound/telegram.js";
import { setActivePluginRegistry } from "../plugins/runtime.js";
import { createOutboundTestPlugin, createTestRegistry } from "../test-utils/channel-plugins.js";

vi.mock("../agents/pi-embedded.js", () => ({
  abortEmbeddedPiRun: vi.fn().mockReturnValue(false),
  runEmbeddedPiAgent: vi.fn(),
  resolveEmbeddedSessionLane: (key: string) => `session:${key.trim() || "main"}`,
}));
vi.mock("../agents/model-catalog.js", () => ({
  loadModelCatalog: vi.fn(),
}));

import { loadModelCatalog } from "../agents/model-catalog.js";
import { runEmbeddedPiAgent } from "../agents/pi-embedded.js";
import { runCronIsolatedAgentTurn } from "./isolated-agent.js";
import {
  makeCfg,
  makeJob,
  withTempCronHome,
  writeSessionStore,
} from "./isolated-agent.test-harness.js";
import { setupIsolatedAgentTurnMocks } from "./isolated-agent.test-setup.js";

const describeMaybe = process.platform === "win32" ? describe.skip : describe;

async function withTempHome<T>(fn: (home: string) => Promise<T>): Promise<T> {
  return withTempHomeBase(fn, { prefix: "gensparx-cron-" });
}

async function writeSessionStore(home: string) {
  const dir = path.join(home, ".gensparx", "sessions");
  await fs.mkdir(dir, { recursive: true });
  const storePath = path.join(dir, "sessions.json");
  await fs.writeFile(
    storePath,
    JSON.stringify(
      {
        "agent:main:main": {
          sessionId: "main-session",
          updatedAt: Date.now(),
          lastProvider: "webchat",
          lastTo: "",
        },
      },
    });

    expect(res.status).toBe("ok");
    expect(res.delivered).toBe(false);
    expect(res.deliveryAttempted).toBe(true);
    expect(runSubagentAnnounceFlow).not.toHaveBeenCalled();
    expect(deps.sendMessageTelegram).toHaveBeenCalledTimes(1);
  });
}

function makeCfg(
  home: string,
  storePath: string,
  overrides: Partial<GenSparxConfig> = {},
): GenSparxConfig {
  const base: GenSparxConfig = {
    agents: {
      defaults: {
        model: "anthropic/claude-opus-4-5",
        workspace: path.join(home, "gensparx"),
      },
    },
    session: { store: storePath, mainKey: "main" },
  } as GenSparxConfig;
  return { ...base, ...overrides };
}

    expectDeliveredOk(res);
    expect(runSubagentAnnounceFlow).toHaveBeenCalledTimes(1);
    const announceArgs = vi.mocked(runSubagentAnnounceFlow).mock.calls[0]?.[0] as
      | {
          requesterOrigin?: { channel?: string; to?: string };
          roundOneReply?: string;
          bestEffortDeliver?: boolean;
        }
      | undefined;
    expect(announceArgs?.requesterOrigin?.channel).toBe("telegram");
    expect(announceArgs?.requesterOrigin?.to).toBe("123");
    expect(announceArgs?.roundOneReply).toBe(params.expectedText);
    expect(announceArgs?.bestEffortDeliver).toBe(false);
    expect((announceArgs as { expectsCompletionMessage?: boolean })?.expectsCompletionMessage).toBe(
      true,
    );
    expect(deps.sendMessageTelegram).not.toHaveBeenCalled();
  });
}

describe("runCronIsolatedAgentTurn", () => {
  beforeEach(() => {
    setupIsolatedAgentTurnMocks();
  });

  it("routes text-only explicit target delivery through announce flow", async () => {
    await expectExplicitTelegramTargetAnnounce({
      payloads: [{ text: "hello from cron" }],
      expectedText: "hello from cron",
    });
  });

  it("announces the final payload text when delivery has an explicit target", async () => {
    await expectExplicitTelegramTargetAnnounce({
      payloads: [{ text: "Working on it..." }, { text: "Final weather summary" }],
      expectedText: "Final weather summary",
    });
  });

  it("routes announce injection to the delivery-target session key", async () => {
    await withTempCronHome(async (home) => {
      const storePath = await writeSessionStore(home, { lastProvider: "webchat", lastTo: "" });
      const deps = createCliDeps();
      mockAgentPayloads([{ text: "hello from cron" }]);

      const res = await runCronIsolatedAgentTurn({
        cfg: makeCfg(home, storePath, {
          session: {
            store: storePath,
            mainKey: "main",
            dmScope: "per-channel-peer",
          },
          channels: {
            telegram: { botToken: "t-1" },
          },
        }),
        deps,
        job: {
          ...makeJob({ kind: "agentTurn", message: "do it" }),
          delivery: { mode: "announce", channel: "telegram", to: "123" },
        },
        message: "do it",
        sessionKey: "cron:job-1",
        lane: "cron",
      });

      expect(res.status).toBe("ok");
      expect(runSubagentAnnounceFlow).toHaveBeenCalledTimes(1);
      const announceArgs = vi.mocked(runSubagentAnnounceFlow).mock.calls[0]?.[0] as
        | {
            requesterSessionKey?: string;
            requesterOrigin?: { channel?: string; to?: string };
          }
        | undefined;
      expect(announceArgs?.requesterSessionKey).toBe("agent:main:telegram:direct:123");
      expect(announceArgs?.requesterOrigin?.channel).toBe("telegram");
      expect(announceArgs?.requesterOrigin?.to).toBe("123");
    });
  });

  it("routes threaded announce targets through direct delivery", async () => {
    await withTempCronHome(async (home) => {
      const storePath = await writeSessionStore(home, { lastProvider: "webchat", lastTo: "" });
      await fs.writeFile(
        storePath,
        JSON.stringify(
          {
            "agent:main:main": {
              sessionId: "main-session",
              updatedAt: Date.now(),
              lastChannel: "telegram",
              lastTo: "123",
              lastThreadId: 42,
            },
          },
          null,
          2,
        ),
        "utf-8",
      );
      const deps = createCliDeps();
      mockAgentPayloads([{ text: "Final weather summary" }]);
      const res = await runTelegramAnnounceTurn({
        home,
        storePath,
        deps,
        delivery: { mode: "announce", channel: "last" },
      });

      expect(res.status).toBe("ok");
      expect(res.delivered).toBe(true);
      expect(runSubagentAnnounceFlow).not.toHaveBeenCalled();
      expect(deps.sendMessageTelegram).toHaveBeenCalledTimes(1);
      expect(deps.sendMessageTelegram).toHaveBeenCalledWith(
        "123",
        "Final weather summary",
        expect.objectContaining({
          messageThreadId: 42,
        }),
      );
    });
  });

  it("skips announce when messaging tool already sent to target", async () => {
    await withTempCronHome(async (home) => {
      const storePath = await writeSessionStore(home, { lastProvider: "webchat", lastTo: "" });
      const deps = createCliDeps();
      mockAgentPayloads([{ text: "sent" }], {
        didSendViaMessagingTool: true,
        messagingToolSentTargets: [{ tool: "message", provider: "telegram", to: "123" }],
      });

      const res = await runExplicitTelegramAnnounceTurn({
        home,
        storePath,
        deps,
      });

      expectDeliveredOk(res);
      expect(runSubagentAnnounceFlow).not.toHaveBeenCalled();
      expect(deps.sendMessageTelegram).not.toHaveBeenCalled();
    });
  });

  it("reports not-delivered when best-effort structured outbound sends all fail", async () => {
    await expectBestEffortTelegramNotDelivered({
      text: "caption",
      mediaUrl: "https://example.com/img.png",
    });
  });

  it("skips announce for heartbeat-only output", async () => {
    await withTempCronHome(async (home) => {
      const storePath = await writeSessionStore(home, { lastProvider: "webchat", lastTo: "" });
      const deps = createCliDeps();
      mockAgentPayloads([{ text: "HEARTBEAT_OK" }]);
      const res = await runTelegramAnnounceTurn({
        home,
        storePath,
        deps,
        delivery: { mode: "announce", channel: "telegram", to: "123" },
      });

      expect(res.status).toBe("ok");
      expect(runSubagentAnnounceFlow).not.toHaveBeenCalled();
      expect(deps.sendMessageTelegram).not.toHaveBeenCalled();
    });
  });

  describeMaybe("runCronIsolatedAgentTurn", () => {
    it("fails when announce delivery fails and best-effort is disabled", async () => {
      await withTempHome(async (home) => {
        const storePath = await writeSessionStore(home);
        const deps: CliDeps = {
          sendMessageWhatsApp: vi.fn(),
          sendMessageTelegram: vi.fn().mockRejectedValue(new Error("boom")),
          sendMessageDiscord: vi.fn(),
          sendMessageSignal: vi.fn(),
          sendMessageIMessage: vi.fn(),
        };
        vi.mocked(runEmbeddedPiAgent).mockResolvedValue({
          payloads: [{ text: "hello from cron" }],
          meta: {
            durationMs: 5,
            agentMeta: { sessionId: "s", provider: "p", model: "m" },
          },
        });
        const res = await runCronIsolatedAgentTurn({
          cfg: makeCfg(home, storePath, {
            channels: { telegram: { botToken: "t-1" } },
          }),
          deps,
          job: {
            ...makeJob({ kind: "agentTurn", message: "do it" }),
            delivery: { mode: "announce", channel: "telegram", to: "123" },
          },
          message: "do it",
          sessionKey: "cron:job-1",
          lane: "cron",
        });

        expect(res.status).toBe("error");
        expect(res.error).toBe("Error: boom");
      });
    });
  });

  it("fails when announce delivery reports false and best-effort is disabled", async () => {
    await withTempCronHome(async (home) => {
      const storePath = await writeSessionStore(home, { lastProvider: "webchat", lastTo: "" });
      const deps = createCliDeps();
      mockAgentPayloads([{ text: "hello from cron" }]);
      vi.mocked(runSubagentAnnounceFlow).mockResolvedValueOnce(false);

      const res = await runTelegramAnnounceTurn({
        home,
        storePath,
        deps,
        delivery: {
          mode: "announce",
          channel: "telegram",
          to: "123",
          bestEffort: false,
        },
      });

      expect(res.status).toBe("error");
      expect(res.error).toContain("cron announce delivery failed");
      expect(deps.sendMessageTelegram).not.toHaveBeenCalled();
    });
  });

  it("marks attempted when announce delivery reports false and best-effort is enabled", async () => {
    await withTempCronHome(async (home) => {
      const storePath = await writeSessionStore(home, { lastProvider: "webchat", lastTo: "" });
      const deps = createCliDeps();
      mockAgentPayloads([{ text: "hello from cron" }]);
      vi.mocked(runSubagentAnnounceFlow).mockResolvedValueOnce(false);

      const res = await runTelegramAnnounceTurn({
        home,
        storePath,
        deps,
        delivery: {
          mode: "announce",
          channel: "telegram",
          to: "123",
          bestEffort: true,
        },
      });

      expect(res.status).toBe("ok");
      expect(res.delivered).toBe(false);
      expect(res.deliveryAttempted).toBe(true);
      expect(runSubagentAnnounceFlow).toHaveBeenCalledTimes(1);
      expect(deps.sendMessageTelegram).not.toHaveBeenCalled();
    });
  });

  it("ignores structured direct delivery failures when best-effort is enabled", async () => {
    await expectBestEffortTelegramNotDelivered({
      text: "hello from cron",
      mediaUrl: "https://example.com/img.png",
    });
  });
});
