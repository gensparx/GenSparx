import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { OpenClawConfig } from "../config/config.js";
import { createTempHomeHarness, makeReplyConfig } from "./reply.test-harness.js";

const agentMocks = vi.hoisted(() => ({
  runEmbeddedPiAgent: vi.fn(),
  loadModelCatalog: vi.fn(),
  webAuthExists: vi.fn().mockResolvedValue(true),
  getWebAuthAgeMs: vi.fn().mockReturnValue(120_000),
  readWebSelfId: vi.fn().mockReturnValue({ e164: "+1999" }),
}));

vi.mock("../agents/pi-embedded.js", () => ({
  abortEmbeddedPiRun: vi.fn().mockReturnValue(false),
  runEmbeddedPiAgent: agentMocks.runEmbeddedPiAgent,
  queueEmbeddedPiMessage: vi.fn().mockReturnValue(false),
  resolveEmbeddedSessionLane: (key: string) => `session:${key.trim() || "main"}`,
  isEmbeddedPiRunActive: vi.fn().mockReturnValue(false),
  isEmbeddedPiRunStreaming: vi.fn().mockReturnValue(false),
}));

vi.mock("../agents/model-catalog.js", () => ({
  loadModelCatalog: agentMocks.loadModelCatalog,
}));

async function withTempHome<T>(fn: (home: string) => Promise<T>): Promise<T> {
  return withTempHomeBase(
    async (home) => {
      return await fn(home);
    },
    {
      env: {
        GENSPARX_AGENT_DIR: (home) => path.join(home, ".gensparx", "agent"),
        PI_CODING_AGENT_DIR: (home) => path.join(home, ".gensparx", "agent"),
      },
      prefix: "gensparx-rawbody-",
    },
  );
}

describe("RawBody directive parsing", () => {
  beforeEach(() => {
    vi.stubEnv("OPENCLAW_TEST_FAST", "1");
    agentMocks.runEmbeddedPiAgent.mockClear();
    agentMocks.loadModelCatalog.mockClear();
    agentMocks.loadModelCatalog.mockResolvedValue([
      { id: "claude-opus-4-5", name: "Opus 4.5", provider: "anthropic" },
    ]);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("handles directives and history in the prompt", async () => {
    await withTempHome(async (home) => {
      vi.mocked(runEmbeddedPiAgent).mockReset();

      const groupMessageCtx = {
        Body: `[Chat messages since your last reply - for context]\\n[WhatsApp ...] Someone: hello\\n\\n[Current message - respond to this]\\n[WhatsApp ...] Jake: /think:high\\n[from: Jake McInteer (+6421807830)]`,
        RawBody: "/think:high",
        From: "+1222",
        To: "+1222",
        ChatType: "group",
        CommandAuthorized: true,
      };

      const res = await getReplyFromConfig(
        groupMessageCtx,
        {},
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

      const text = Array.isArray(res) ? res[0]?.text : res?.text;
      expect(text).toContain("Thinking level set to high.");
      expect(runEmbeddedPiAgent).not.toHaveBeenCalled();
    });
  });

  it("/model status detected from RawBody", async () => {
    await withTempHome(async (home) => {
      vi.mocked(runEmbeddedPiAgent).mockReset();

      const groupMessageCtx = {
        Body: `[Context]\nJake: /model status\n[from: Jake]`,
        RawBody: "/model status",
        From: "+1222",
        To: "+1222",
        ChatType: "group",
        CommandAuthorized: true,
      };

      const res = await getReplyFromConfig(
        groupMessageCtx,
        {},
        {
          agents: {
            defaults: {
              model: "anthropic/claude-opus-4-5",
              workspace: path.join(home, "gensparx"),
              models: {
                "anthropic/claude-opus-4-5": {},
              },
            },
          },
          channels: { whatsapp: { allowFrom: ["*"] } },
          session: { store: path.join(home, "sessions.json") },
        },
      );

      const text = Array.isArray(res) ? res[0]?.text : res?.text;
      expect(text).toContain("anthropic/claude-opus-4-5");
      expect(runEmbeddedPiAgent).not.toHaveBeenCalled();
    });
  });

  it("CommandBody is honored when RawBody is missing", async () => {
    await withTempHome(async (home) => {
      vi.mocked(runEmbeddedPiAgent).mockReset();

      const groupMessageCtx = {
        Body: `[Context]\nJake: /verbose on\n[from: Jake]`,
        CommandBody: "/verbose on",
        From: "+1222",
        To: "+1222",
        ChatType: "group",
        CommandAuthorized: true,
      };

      const res = await getReplyFromConfig(
        groupMessageCtx,
        {},
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

      const text = Array.isArray(res) ? res[0]?.text : res?.text;
      expect(text).toContain("Verbose logging enabled.");
      expect(runEmbeddedPiAgent).not.toHaveBeenCalled();
    });
  });

  it("Integration: WhatsApp group message with structural wrapper and RawBody command", async () => {
    await withTempHome(async (home) => {
      vi.mocked(runEmbeddedPiAgent).mockReset();

      const groupMessageCtx = {
        Body: `[Chat messages since your last reply - for context]\\n[WhatsApp ...] Someone: hello\\n\\n[Current message - respond to this]\\n[WhatsApp ...] Jake: /status\\n[from: Jake McInteer (+6421807830)]`,
        RawBody: "/status",
        ChatType: "group",
        From: "+1222",
        To: "+1222",
        SessionKey: "agent:main:whatsapp:group:g1",
        Provider: "whatsapp",
        Surface: "whatsapp",
        SenderE164: "+1222",
        CommandAuthorized: true,
      };

      const res = await getReplyFromConfig(
        groupMessageCtx,
        {},
        {
          agents: {
            defaults: {
              model: "anthropic/claude-opus-4-5",
              workspace: path.join(home, "gensparx"),
            },
          },
          channels: { whatsapp: { allowFrom: ["+1222"] } },
          session: { store: path.join(home, "sessions.json") },
        },
      );

      const text = Array.isArray(res) ? res[0]?.text : res?.text;
      expect(text).toContain("Session: agent:main:whatsapp:group:g1");
      expect(text).toContain("anthropic/claude-opus-4-5");
      expect(runEmbeddedPiAgent).not.toHaveBeenCalled();
    });
  });

  it("preserves history when RawBody is provided for command parsing", async () => {
    await withTempHome(async (home) => {
      vi.mocked(runEmbeddedPiAgent).mockResolvedValue({
        payloads: [{ text: "ok" }],
        meta: {
          durationMs: 1,
          agentMeta: { sessionId: "s", provider: "p", model: "m" },
        },
      });

      const groupMessageCtx = {
        Body: "/think:high status please",
        BodyForAgent: "/think:high status please",
        RawBody: "/think:high status please",
        InboundHistory: [{ sender: "Peter", body: "hello", timestamp: 1700000000000 }],
        From: "+1222",
        To: "+1222",
        ChatType: "group",
        GroupSubject: "Ops",
        SenderName: "Jake McInteer",
        SenderE164: "+6421807830",
        CommandAuthorized: true,
      };

      const res = await getReplyFromConfig(
        groupMessageCtx,
        {},
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

      const text = Array.isArray(res) ? res[0]?.text : res?.text;
      expect(text).toBe("ok");
      expect(agentMocks.runEmbeddedPiAgent).toHaveBeenCalledOnce();
      const prompt =
        (agentMocks.runEmbeddedPiAgent.mock.calls[0]?.[0] as { prompt?: string } | undefined)
          ?.prompt ?? "";
      expect(prompt).toContain("Chat history since last reply (untrusted, for context):");
      expect(prompt).toContain('"sender": "Peter"');
      expect(prompt).toContain('"body": "hello"');
      expect(prompt).toContain("status please");
      expect(prompt).not.toContain("/think:high");
    });
  });
});
