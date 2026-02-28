import type { Client } from "@buape/carbon";
import { ChannelType, MessageType } from "@buape/carbon";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  dispatchMock,
  readAllowFromStoreMock,
  sendMock,
  updateLastRouteMock,
  upsertPairingRequestMock,
} from "./monitor.tool-result.test-harness.js";
import { createDiscordMessageHandler } from "./monitor/message-handler.js";
import { __resetDiscordChannelInfoCacheForTest } from "./monitor/message-utils.js";
import { createNoopThreadBindingManager } from "./monitor/thread-bindings.js";

const sendMock = vi.fn();
const reactMock = vi.fn();
const updateLastRouteMock = vi.fn();
const dispatchMock = vi.fn();
const readAllowFromStoreMock = vi.fn();
const upsertPairingRequestMock = vi.fn();

vi.mock("./send.js", () => ({
  sendMessageDiscord: (...args: unknown[]) => sendMock(...args),
  reactMessageDiscord: async (...args: unknown[]) => {
    reactMock(...args);
  },
}));
vi.mock("../auto-reply/dispatch.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../auto-reply/dispatch.js")>();
  return {
    ...actual,
    dispatchInboundMessage: (...args: unknown[]) => dispatchMock(...args),
    dispatchInboundMessageWithDispatcher: (...args: unknown[]) => dispatchMock(...args),
    dispatchInboundMessageWithBufferedDispatcher: (...args: unknown[]) => dispatchMock(...args),
  };
});
vi.mock("../pairing/pairing-store.js", () => ({
  readChannelAllowFromStore: (...args: unknown[]) => readAllowFromStoreMock(...args),
  upsertChannelPairingRequest: (...args: unknown[]) => upsertPairingRequestMock(...args),
}));
vi.mock("../config/sessions.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../config/sessions.js")>();
  return {
    ...actual,
    resolveStorePath: vi.fn(() => "/tmp/gensparx-sessions.json"),
    updateLastRoute: (...args: unknown[]) => updateLastRouteMock(...args),
    resolveSessionKey: vi.fn(),
  };
});

beforeEach(() => {
  __resetDiscordChannelInfoCacheForTest();
  sendMock.mockClear().mockResolvedValue(undefined);
  updateLastRouteMock.mockClear();
  dispatchMock.mockClear().mockImplementation(async ({ dispatcher }) => {
    dispatcher.sendFinalReply({ text: "hi" });
    return { queuedFinal: true, counts: { tool: 0, block: 0, final: 1 } };
  });
  readAllowFromStoreMock.mockClear().mockResolvedValue([]);
  upsertPairingRequestMock.mockClear().mockResolvedValue({ code: "PAIRCODE", created: true });
});

describe("discord tool result dispatch", () => {
  it("sends status replies with responsePrefix", async () => {
    const cfg = {
      agents: {
        defaults: {
          model: "anthropic/claude-opus-4-5",
          workspace: "/tmp/gensparx",
        },
      },
      session: { store: "/tmp/gensparx-sessions.json" },
      messages: { responsePrefix: "PFX" },
      channels: { discord: { dm: { enabled: true, policy: "open" } } },
    } as ReturnType<typeof import("../config/config.js").loadConfig>;

function createHandlerBaseConfig(
  cfg: Config,
  runtimeError?: (err: unknown) => void,
): Parameters<typeof createDiscordMessageHandler>[0] {
  return {
    cfg,
    discordConfig: cfg.channels?.discord,
    accountId: "default",
    token: "token",
    runtime: {
      log: vi.fn(),
      error: runtimeError ?? vi.fn(),
      exit: (code: number): never => {
        throw new Error(`exit ${code}`);
      },
    },
    botUserId: "bot-id",
    guildHistories: new Map(),
    historyLimit: 0,
    mediaMaxBytes: 10_000,
    textLimit: 2000,
    replyToMode: "off",
    dmEnabled: true,
    groupDmEnabled: false,
    threadBindings: createNoopThreadBindingManager("default"),
  };
}

async function createDmHandler(opts: { cfg: Config; runtimeError?: (err: unknown) => void }) {
  return createDiscordMessageHandler(createHandlerBaseConfig(opts.cfg, opts.runtimeError));
}

    await handler(
      {
        message: {
          id: "m1",
          content: "/status",
          channelId: "c1",
          timestamp: new Date().toISOString(),
          type: MessageType.Default,
          attachments: [],
          embeds: [],
          mentionedEveryone: false,
          mentionedUsers: [],
          mentionedRoles: [],
          author: { id: "u1", bot: false, username: "Ada" },
        },
        author: { id: "u1", bot: false, username: "Ada" },
        guild_id: null,
      },
      client,
    );

    expect(runtimeError).not.toHaveBeenCalled();
    expect(sendMock).toHaveBeenCalledTimes(1);
    expect(sendMock.mock.calls[0]?.[1]).toMatch(/^PFX /);
  }, 30_000);

  it("caches channel info lookups between messages", async () => {
    const cfg = {
      agents: {
        defaults: {
          model: "anthropic/claude-opus-4-5",
          workspace: "/tmp/gensparx",
        },
      },
      session: { store: "/tmp/gensparx-sessions.json" },
      channels: { discord: { dm: { enabled: true, policy: "open" } } },
    } as ReturnType<typeof import("../config/config.js").loadConfig>;

    const handler = createDiscordMessageHandler({
      cfg,
      discordConfig: cfg.channels.discord,
      accountId: "default",
      token: "token",
      runtime: {
        log: vi.fn(),
        error: vi.fn(),
        exit: (code: number): never => {
          throw new Error(`exit ${code}`);
        },
      },
      botUserId: "bot-id",
      guildHistories: new Map(),
      historyLimit: 0,
      mediaMaxBytes: 10_000,
      textLimit: 2000,
      replyToMode: "off",
      dmEnabled: true,
      groupDmEnabled: false,
    });

    const fetchChannel = vi.fn().mockResolvedValue({
      type: ChannelType.DM,
      name: "dm",
    }),
  } as unknown as Client;
}

async function createCategoryGuildHandler() {
  return createDiscordMessageHandler({
    ...createHandlerBaseConfig(CATEGORY_GUILD_CFG),
    guildEntries: {
      "*": { requireMention: false, channels: { c1: { allow: true } } },
    },
  });
}

function createCategoryGuildClient() {
  return {
    fetchChannel: vi.fn().mockResolvedValue({
      type: ChannelType.GuildText,
      name: "general",
      parentId: "category-1",
    }),
    rest: { get: vi.fn() },
  } as unknown as Client;
}

function createCategoryGuildEvent(params: {
  messageId: string;
  timestamp?: string;
  author: Record<string, unknown>;
}) {
  return {
    message: {
      id: params.messageId,
      content: "hello",
      channelId: "c1",
      timestamp: params.timestamp ?? new Date().toISOString(),
      type: MessageType.Default,
      attachments: [],
      embeds: [],
      mentionedEveryone: false,
      mentionedUsers: [],
      mentionedRoles: [],
      author: { id: "u-cache", bot: false, username: "Ada" },
    };

    await handler(
      {
        message: { ...baseMessage, id: "m-cache-1" },
        author: baseMessage.author,
        guild_id: null,
      },
      client,
    );
    await handler(
      {
        message: { ...baseMessage, id: "m-cache-2" },
        author: baseMessage.author,
        guild_id: null,
      },
      client,
    );

    expect(fetchChannel).toHaveBeenCalledTimes(1);
  });

  it("includes forwarded message snapshots in body", async () => {
    let capturedBody = "";
    dispatchMock.mockImplementationOnce(async ({ ctx, dispatcher }) => {
      capturedBody = ctx.Body ?? "";
      dispatcher.sendFinalReply({ text: "ok" });
      return { queuedFinal: true, counts: { final: 1 } };
    });

    const cfg = {
      agents: {
        defaults: {
          model: "anthropic/claude-opus-4-5",
          workspace: "/tmp/gensparx",
        },
      },
      session: { store: "/tmp/gensparx-sessions.json" },
      channels: { discord: { dm: { enabled: true, policy: "open" } } },
    } as ReturnType<typeof import("../config/config.js").loadConfig>;

    const handler = createDiscordMessageHandler({
      cfg,
      discordConfig: cfg.channels.discord,
      accountId: "default",
      token: "token",
      runtime: {
        log: vi.fn(),
        error: vi.fn(),
        exit: (code: number): never => {
          throw new Error(`exit ${code}`);
        },
      },
      botUserId: "bot-id",
      guildHistories: new Map(),
      historyLimit: 0,
      mediaMaxBytes: 10_000,
      textLimit: 2000,
      replyToMode: "off",
      dmEnabled: true,
      groupDmEnabled: false,
    });

    const client = {
      fetchChannel: vi.fn().mockResolvedValue({
        type: ChannelType.DM,
        name: "dm",
      }),
    } as unknown as Client;

    await handler(
      {
        message: {
          id: "m-forward-1",
          content: "",
          channelId: "c-forward-1",
          timestamp: new Date().toISOString(),
          type: MessageType.Default,
          attachments: [],
          embeds: [],
          mentionedEveryone: false,
          mentionedUsers: [],
          mentionedRoles: [],
          author: { id: "u1", bot: false, username: "Ada" },
          rawData: {
            message_snapshots: [
              {
                message: {
                  content: "forwarded hello",
                  embeds: [],
                  attachments: [],
                  author: {
                    id: "u2",
                    username: "Bob",
                    discriminator: "0",
                  },
                },
              },
            ],
          },
        },
        author: { id: "u1", bot: false, username: "Ada" },
        guild_id: null,
      },
      client,
    );

    expect(capturedBody).toContain("[Forwarded message from @Bob]");
    expect(capturedBody).toContain("forwarded hello");
  });

describe("discord tool result dispatch", () => {
  it("uses channel id allowlists for non-thread channels with categories", async () => {
    let capturedCtx: { SessionKey?: string } | undefined;
    dispatchMock.mockImplementationOnce(async ({ ctx, dispatcher }) => {
      capturedCtx = ctx;
      dispatcher.sendFinalReply({ text: "hi" });
      return { queuedFinal: true, counts: { final: 1 } };
    });

    const cfg = {
      agents: {
        defaults: {
          model: "anthropic/claude-opus-4-5",
          workspace: "/tmp/gensparx",
        },
      },
      session: { store: "/tmp/gensparx-sessions.json" },
      channels: {
        discord: {
          dm: { enabled: true, policy: "open" },
          guilds: {
            "*": {
              requireMention: false,
              channels: { c1: { allow: true } },
            },
          },
        },
      },
      routing: { allowFrom: [] },
    } as ReturnType<typeof import("../config/config.js").loadConfig>;

    const handler = createDiscordMessageHandler({
      cfg,
      discordConfig: cfg.channels.discord,
      accountId: "default",
      token: "token",
      runtime: {
        log: vi.fn(),
        error: vi.fn(),
        exit: (code: number): never => {
          throw new Error(`exit ${code}`);
        },
      },
      botUserId: "bot-id",
      guildHistories: new Map(),
      historyLimit: 0,
      mediaMaxBytes: 10_000,
      textLimit: 2000,
      replyToMode: "off",
      dmEnabled: true,
      groupDmEnabled: false,
      guildEntries: {
        "*": { requireMention: false, channels: { c1: { allow: true } } },
      },
    });

    const client = {
      fetchChannel: vi.fn().mockResolvedValue({
        type: ChannelType.GuildText,
        name: "general",
        parentId: "category-1",
      }),
      rest: { get: vi.fn() },
    } as unknown as Client;

    await handler(
      createCategoryGuildEvent({
        messageId: "m-category",
        author: { id: "u1", bot: false, username: "Ada", tag: "Ada#1" },
      }),
      client,
    );

    expect(capturedCtx?.SessionKey).toBe("agent:main:discord:channel:c1");
  });

  it("prefixes group bodies with sender label", async () => {
    let capturedBody = "";
    dispatchMock.mockImplementationOnce(async ({ ctx, dispatcher }) => {
      capturedBody = ctx.Body ?? "";
      dispatcher.sendFinalReply({ text: "ok" });
      return { queuedFinal: true, counts: { final: 1 } };
    });

    const cfg = {
      agents: {
        defaults: {
          model: "anthropic/claude-opus-4-5",
          workspace: "/tmp/gensparx",
        },
      },
      session: { store: "/tmp/gensparx-sessions.json" },
      channels: {
        discord: {
          dm: { enabled: true, policy: "open" },
          guilds: {
            "*": {
              requireMention: false,
              channels: { c1: { allow: true } },
            },
          },
        },
      },
      routing: { allowFrom: [] },
    } as ReturnType<typeof import("../config/config.js").loadConfig>;

    const handler = createDiscordMessageHandler({
      cfg,
      discordConfig: cfg.channels.discord,
      accountId: "default",
      token: "token",
      runtime: {
        log: vi.fn(),
        error: vi.fn(),
        exit: (code: number): never => {
          throw new Error(`exit ${code}`);
        },
      },
      botUserId: "bot-id",
      guildHistories: new Map(),
      historyLimit: 0,
      mediaMaxBytes: 10_000,
      textLimit: 2000,
      replyToMode: "off",
      dmEnabled: true,
      groupDmEnabled: false,
      guildEntries: {
        "*": { requireMention: false, channels: { c1: { allow: true } } },
      },
    });

    const client = {
      fetchChannel: vi.fn().mockResolvedValue({
        type: ChannelType.GuildText,
        name: "general",
        parentId: "category-1",
      }),
      rest: { get: vi.fn() },
    } as unknown as Client;

    await handler(
      createCategoryGuildEvent({
        messageId: "m-prefix",
        timestamp: new Date("2026-01-17T00:00:00Z").toISOString(),
        author: { id: "u1", bot: false, username: "Ada", discriminator: "1234" },
      }),
      client,
    );

    expect(capturedBody).toContain("Ada (Ada#1234): hello");
  });

  it("replies with pairing code and sender id when dmPolicy is pairing", async () => {
    const cfg = {
      agents: {
        defaults: {
          model: "anthropic/claude-opus-4-5",
          workspace: "/tmp/gensparx",
        },
      },
      session: { store: "/tmp/gensparx-sessions.json" },
      channels: {
        discord: { dm: { enabled: true, policy: "pairing", allowFrom: [] } },
      },
    } as Config;

    const handler = await createDmHandler({ cfg });
    const client = createDmClient();

    await handler(
      {
        message: {
          id: "m1",
          content: "hello",
          channelId: "c1",
          timestamp: new Date().toISOString(),
          type: MessageType.Default,
          attachments: [],
          embeds: [],
          mentionedEveryone: false,
          mentionedUsers: [],
          mentionedRoles: [],
          author: { id: "u2", bot: false, username: "Ada" },
        },
        author: { id: "u2", bot: false, username: "Ada" },
        guild_id: null,
      },
      client,
    );

    expect(dispatchMock).not.toHaveBeenCalled();
    expect(upsertPairingRequestMock).toHaveBeenCalled();
    expect(sendMock).toHaveBeenCalledTimes(1);
    expect(String(sendMock.mock.calls[0]?.[1] ?? "")).toContain("Your Discord user id: u2");
    expect(String(sendMock.mock.calls[0]?.[1] ?? "")).toContain("Pairing code: PAIRCODE");
  }, 10000);
});
