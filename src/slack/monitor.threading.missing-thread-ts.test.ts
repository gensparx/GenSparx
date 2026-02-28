import { beforeEach, describe, expect, it, vi } from "vitest";
import { resetInboundDedupe } from "../auto-reply/reply/inbound-dedupe.js";
import {
  flush,
  getSlackClient,
  getSlackHandlerOrThrow,
  getSlackTestState,
  resetSlackTestState,
  startSlackMonitor,
  stopSlackMonitor,
} from "./monitor.test-helpers.js";

const { monitorSlackProvider } = await import("./monitor.js");

const slackTestState = getSlackTestState();

type SlackConversationsClient = {
  history: ReturnType<typeof vi.fn>;
  info: ReturnType<typeof vi.fn>;
};

function makeThreadReplyEvent() {
  return {
    ...actual,
    loadConfig: () => config,
  };
});

vi.mock("../auto-reply/reply.js", () => ({
  getReplyFromConfig: (...args: unknown[]) => replyMock(...args),
}));

vi.mock("./resolve-channels.js", () => ({
  resolveSlackChannelAllowlist: async ({ entries }: { entries: string[] }) =>
    entries.map((input) => ({ input, resolved: false })),
}));

vi.mock("./resolve-users.js", () => ({
  resolveSlackUserAllowlist: async ({ entries }: { entries: string[] }) =>
    entries.map((input) => ({ input, resolved: false })),
}));

vi.mock("./send.js", () => ({
  sendMessageSlack: (...args: unknown[]) => sendMock(...args),
}));

vi.mock("../pairing/pairing-store.js", () => ({
  readChannelAllowFromStore: (...args: unknown[]) => readAllowFromStoreMock(...args),
  upsertChannelPairingRequest: (...args: unknown[]) => upsertPairingRequestMock(...args),
}));

vi.mock("../config/sessions.js", () => ({
  resolveStorePath: vi.fn(() => "/tmp/gensparx-sessions.json"),
  updateLastRoute: (...args: unknown[]) => updateLastRouteMock(...args),
  resolveSessionKey: vi.fn(),
  readSessionUpdatedAt: vi.fn(() => undefined),
  recordSessionMetaFromInbound: vi.fn().mockResolvedValue(undefined),
}));

vi.mock("@slack/bolt", () => {
  const handlers = new Map<string, (args: unknown) => Promise<void>>();
  (globalThis as { __slackHandlers?: typeof handlers }).__slackHandlers = handlers;
  const client = {
    auth: { test: vi.fn().mockResolvedValue({ user_id: "bot-user" }) },
    conversations: {
      info: vi.fn().mockResolvedValue({
        channel: { name: "general", is_channel: true },
      }),
      replies: vi.fn().mockResolvedValue({ messages: [] }),
      history: vi.fn().mockResolvedValue({ messages: [] }),
    },
    users: {
      info: vi.fn().mockResolvedValue({
        user: { profile: { display_name: "Ada" } },
      }),
    },
    assistant: {
      threads: {
        setStatus: vi.fn().mockResolvedValue({ ok: true }),
      },
    },
    reactions: {
      add: (...args: unknown[]) => reactMock(...args),
    },
  };
}

function getConversationsClient(): SlackConversationsClient {
  const client = getSlackClient();
  if (!client) {
    throw new Error("Slack client not registered");
  }
  return client.conversations as SlackConversationsClient;
}

async function runMissingThreadScenario(params: {
  historyResponse?: { messages: Array<{ ts?: string; thread_ts?: string }> };
  historyError?: Error;
}) {
  slackTestState.replyMock.mockResolvedValue({ text: "thread reply" });

  const conversations = getConversationsClient();
  if (params.historyError) {
    conversations.history.mockRejectedValueOnce(params.historyError);
  } else {
    conversations.history.mockResolvedValueOnce(
      params.historyResponse ?? { messages: [{ ts: "456" }] },
    );
  }

  const { controller, run } = startSlackMonitor(monitorSlackProvider);
  const handler = await getSlackHandlerOrThrow("message");
  await handler(makeThreadReplyEvent());

  await flush();
  await stopSlackMonitor({ controller, run });

  expect(slackTestState.sendMock).toHaveBeenCalledTimes(1);
  return slackTestState.sendMock.mock.calls[0]?.[2];
}

beforeEach(() => {
  resetInboundDedupe();
  resetSlackTestState({
    messages: { responsePrefix: "PFX" },
    channels: {
      slack: {
        dm: { enabled: true, policy: "open", allowFrom: ["*"] },
        groupPolicy: "open",
        channels: { C1: { allow: true, requireMention: false } },
      },
    },
  });
  const conversations = getConversationsClient();
  conversations.info.mockResolvedValue({
    channel: { name: "general", is_channel: true },
  });
});

describe("monitorSlackProvider threading", () => {
  it("recovers missing thread_ts when parent_user_id is present", async () => {
    const options = await runMissingThreadScenario({
      historyResponse: { messages: [{ ts: "456", thread_ts: "111.222" }] },
    });
    expect(options).toMatchObject({ threadTs: "111.222" });
  });

  it("continues without thread_ts when history lookup returns no thread result", async () => {
    const options = await runMissingThreadScenario({
      historyResponse: { messages: [{ ts: "456" }] },
    });
    expect(options).not.toMatchObject({ threadTs: "111.222" });
  });

  it("continues without thread_ts when history lookup throws", async () => {
    const options = await runMissingThreadScenario({
      historyError: new Error("history failed"),
    });
    expect(options).not.toMatchObject({ threadTs: "111.222" });
  });
});
