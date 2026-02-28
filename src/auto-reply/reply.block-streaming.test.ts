import fs from "node:fs/promises";
import path from "node:path";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { loadModelCatalog } from "../agents/model-catalog.js";
import type { OpenClawConfig } from "../config/config.js";
import { withTempHome as withTempHomeHarness } from "../config/home-env.test-harness.js";
import { getReplyFromConfig } from "./reply.js";

type RunEmbeddedPiAgent = typeof import("../agents/pi-embedded.js").runEmbeddedPiAgent;
type RunEmbeddedPiAgentParams = Parameters<RunEmbeddedPiAgent>[0];
type RunEmbeddedPiAgentReply = Awaited<ReturnType<RunEmbeddedPiAgent>>;

const piEmbeddedMock = vi.hoisted(() => ({
  abortEmbeddedPiRun: vi.fn().mockReturnValue(false),
  runEmbeddedPiAgent: vi.fn<RunEmbeddedPiAgent>(),
  queueEmbeddedPiMessage: vi.fn().mockReturnValue(false),
  resolveEmbeddedSessionLane: (key: string) => `session:${key.trim() || "main"}`,
  isEmbeddedPiRunActive: vi.fn().mockReturnValue(false),
  isEmbeddedPiRunStreaming: vi.fn().mockReturnValue(false),
}));

vi.mock("/src/agents/pi-embedded.js", () => piEmbeddedMock);
vi.mock("../agents/pi-embedded.js", () => piEmbeddedMock);
vi.mock("../agents/model-catalog.js", () => ({
  loadModelCatalog: vi.fn(),
}));

type GetReplyOptions = NonNullable<Parameters<typeof getReplyFromConfig>[1]>;

function createEmbeddedReply(text: string): RunEmbeddedPiAgentReply {
  return {
    payloads: [{ text }],
    meta: {
      durationMs: 5,
      agentMeta: { sessionId: "s", provider: "p", model: "m" },
    },
  };
}

function createTelegramMessage(messageSid: string) {
  return {
    Body: "ping",
    From: "+1004",
    To: "+2000",
    MessageSid: messageSid,
    Provider: "telegram",
  } as const;
}

function createReplyConfig(home: string, streamMode?: "block"): OpenClawConfig {
  return {
    agents: {
      defaults: {
        model: { primary: "anthropic/claude-opus-4-5" },
        workspace: path.join(home, "openclaw"),
      },
    },
    channels: { telegram: { allowFrom: ["*"], streamMode } },
    session: { store: path.join(home, "sessions.json") },
  };
}

async function runTelegramReply(params: {
  home: string;
  messageSid: string;
  onBlockReply?: GetReplyOptions["onBlockReply"];
  onReplyStart?: GetReplyOptions["onReplyStart"];
  disableBlockStreaming?: boolean;
  streamMode?: "block";
}) {
  return getReplyFromConfig(
    createTelegramMessage(params.messageSid),
    {
      onReplyStart: params.onReplyStart,
      onBlockReply: params.onBlockReply,
      disableBlockStreaming: params.disableBlockStreaming,
    },
    createReplyConfig(params.home, params.streamMode),
  );
}

async function withTempHome<T>(fn: (home: string) => Promise<T>): Promise<T> {
  return withTempHomeBase(fn, { prefix: "gensparx-stream-" });
}

describe("block streaming", () => {
  beforeEach(() => {
    vi.stubEnv("OPENCLAW_TEST_FAST", "1");
    piEmbeddedMock.abortEmbeddedPiRun.mockClear().mockReturnValue(false);
    piEmbeddedMock.queueEmbeddedPiMessage.mockClear().mockReturnValue(false);
    piEmbeddedMock.isEmbeddedPiRunActive.mockClear().mockReturnValue(false);
    piEmbeddedMock.isEmbeddedPiRunStreaming.mockClear().mockReturnValue(false);
    piEmbeddedMock.runEmbeddedPiAgent.mockClear();
    vi.mocked(loadModelCatalog).mockResolvedValue([
      { id: "claude-opus-4-5", name: "Opus 4.5", provider: "anthropic" },
      { id: "gpt-4.1-mini", name: "GPT-4.1 Mini", provider: "openai" },
    ]);
  });

  it("handles ordering, timeout fallback, and telegram streamMode block", async () => {
    await withTempHome(async (home) => {
      let releaseTyping: (() => void) | undefined;
      const typingGate = new Promise<void>((resolve) => {
        releaseTyping = resolve;
      });
      const onReplyStart = vi.fn(() => typingGate);
      const onBlockReply = vi.fn().mockResolvedValue(undefined);

      const impl = async (params: RunEmbeddedPiAgentParams) => {
        void params.onBlockReply?.({ text: "hello" });
        return {
          payloads: [{ text: "hello" }],
          meta: {
            durationMs: 5,
            agentMeta: { sessionId: "s", provider: "p", model: "m" },
          },
        };
      };
      piEmbeddedMock.runEmbeddedPiAgent.mockImplementation(impl);

      const replyPromise = getReplyFromConfig(
        {
          Body: "ping",
          From: "+1004",
          To: "+2000",
          MessageSid: "msg-123",
          Provider: "discord",
        },
        {
          onReplyStart,
          onBlockReply,
          disableBlockStreaming: false,
        },
        {
          agents: {
            defaults: {
              model: "anthropic/claude-opus-4-5",
              workspace: path.join(home, "gensparx"),
            },
          },
          channels: { whatsapp: { allowFrom: ["*"] } },
          session: { store: path.join(home, "sessions.json") },
        },
      );

      await waitForCalls(() => onReplyStart.mock.calls.length, 1);
      releaseTyping?.();

      const res = await replyPromise;
      expect(res).toBeUndefined();
      expect(onBlockReply).toHaveBeenCalledTimes(1);
    });
  });

  it("preserves block reply ordering when typing start is slow", async () => {
    await withTempHome(async (home) => {
      let releaseTyping: (() => void) | undefined;
      const typingGate = new Promise<void>((resolve) => {
        releaseTyping = resolve;
      });
      const seen: string[] = [];
      const onBlockReply = vi.fn(async (payload) => {
        seen.push(payload.text ?? "");
      });

      const impl = async (params: RunEmbeddedPiAgentParams) => {
        void params.onBlockReply?.({ text: "first" });
        void params.onBlockReply?.({ text: "second" });
        return {
          payloads: [{ text: "first" }, { text: "second" }],
          meta: createEmbeddedReply("first").meta,
        };
      };
      piEmbeddedMock.runEmbeddedPiAgent.mockImplementation(impl);

      const replyPromise = getReplyFromConfig(
        {
          Body: "ping",
          From: "+1004",
          To: "+2000",
          MessageSid: "msg-125",
          Provider: "telegram",
        },
        {
          onReplyStart,
          onBlockReply,
          disableBlockStreaming: false,
        },
        {
          agents: {
            defaults: {
              model: "anthropic/claude-opus-4-5",
              workspace: path.join(home, "gensparx"),
            },
          },
          channels: { telegram: { allowFrom: ["*"] } },
          session: { store: path.join(home, "sessions.json") },
        },
      );

      await onReplyStartCalled;
      releaseTyping?.();

      const res = await replyPromise;
      expect(res).toBeUndefined();
      expect(seen).toEqual(["first\n\nsecond"]);

      const onBlockReplyStreamMode = vi.fn().mockResolvedValue(undefined);
      piEmbeddedMock.runEmbeddedPiAgent.mockImplementation(async () =>
        createEmbeddedReply("final"),
      );

      const resStreamMode = await runTelegramReply({
        home,
        messageSid: "msg-127",
        onBlockReply: onBlockReplyStreamMode,
        streamMode: "block",
      });

      const streamPayload = Array.isArray(resStreamMode) ? resStreamMode[0] : resStreamMode;
      expect(streamPayload?.text).toBe("final");
      expect(onBlockReplyStreamMode).not.toHaveBeenCalled();
    });
  });

  it("trims leading whitespace in block-streamed replies", async () => {
    await withTempHome(async (home) => {
      const seen: string[] = [];
      const onBlockReply = vi.fn(async (payload) => {
        seen.push(payload.text ?? "");
      });

      const impl = async (params: RunEmbeddedPiAgentParams) => {
        void params.onBlockReply?.({ text: "chunk-1" });
        return {
          payloads: [{ text: "chunk-1\nchunk-2" }],
          meta: {
            durationMs: 5,
            agentMeta: { sessionId: "s", provider: "p", model: "m" },
          },
        };
      };
      piEmbeddedMock.runEmbeddedPiAgent.mockImplementation(impl);

      const res = await getReplyFromConfig(
        {
          Body: "ping",
          From: "+1004",
          To: "+2000",
          MessageSid: "msg-124",
          Provider: "discord",
        },
        {
          onBlockReply,
          disableBlockStreaming: false,
        },
        {
          agents: {
            defaults: {
              model: "anthropic/claude-opus-4-5",
              workspace: path.join(home, "gensparx"),
            },
          },
          channels: { whatsapp: { allowFrom: ["*"] } },
          session: { store: path.join(home, "sessions.json") },
        },
      );

      const res = await runTelegramReply({
        home,
        messageSid: "msg-128",
        onBlockReply,
        disableBlockStreaming: false,
      });

      expect(res).toBeUndefined();
      expect(onBlockReply).toHaveBeenCalledTimes(1);
      expect(seen).toEqual(["Hello from stream"]);
    });
  });

  it("still parses media directives for direct block payloads", async () => {
    await withTempHome(async (home) => {
      const onBlockReply = vi.fn();

      const impl = async (params: RunEmbeddedPiAgentParams) => {
        void params.onBlockReply?.({ text: "streamed" });
        return {
          payloads: [{ text: "final" }],
          meta: {
            durationMs: 5,
            agentMeta: { sessionId: "s", provider: "p", model: "m" },
          },
        };
      };
      piEmbeddedMock.runEmbeddedPiAgent.mockImplementation(impl);

      const replyPromise = getReplyFromConfig(
        {
          Body: "ping",
          From: "+1004",
          To: "+2000",
          MessageSid: "msg-126",
          Provider: "telegram",
        },
        {
          onBlockReply,
          blockReplyTimeoutMs: 10,
          disableBlockStreaming: false,
        },
        {
          agents: {
            defaults: {
              model: "anthropic/claude-opus-4-5",
              workspace: path.join(home, "gensparx"),
            },
          },
          channels: { telegram: { allowFrom: ["*"] } },
          session: { store: path.join(home, "sessions.json") },
        },
      );

      const res = await runTelegramReply({
        home,
        messageSid: "msg-129",
        onBlockReply,
        disableBlockStreaming: false,
      });

      const res = await getReplyFromConfig(
        {
          Body: "ping",
          From: "+1004",
          To: "+2000",
          MessageSid: "msg-126",
          Provider: "telegram",
        },
        {
          onBlockReply,
        },
        {
          agents: {
            defaults: {
              model: "anthropic/claude-opus-4-5",
              workspace: path.join(home, "gensparx"),
            },
          },
          channels: { telegram: { allowFrom: ["*"], streamMode: "block" } },
          session: { store: path.join(home, "sessions.json") },
        },
      );

      expect(res?.text).toBe("final");
      expect(onBlockReply).not.toHaveBeenCalled();
    });
  });
});
