import type { ChildProcess } from "node:child_process";
import childProcess from "node:child_process";
import { afterAll, afterEach, beforeEach, vi } from "vitest";

// Ensure Vitest environment is properly set
process.env.VITEST = "true";
process.env.OPENAI_API_KEY = process.env.OPENAI_API_KEY || "dummy-openai-key";
process.env.ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || "dummy-anthropic-key";

// Track spawned child processes to ensure they get cleaned up after tests.
const spawnedChildren: ChildProcess[] = [];
const originalSpawn = childProcess.spawn;
const originalFork = childProcess.fork;
childProcess.spawn = ((...args: Parameters<typeof originalSpawn>) => {
  const cp = originalSpawn(...args);
  spawnedChildren.push(cp);
  return cp;
}) as typeof childProcess.spawn;
childProcess.fork = ((...args: Parameters<typeof originalFork>) => {
  const cp = originalFork(...args);
  spawnedChildren.push(cp);
  return cp;
}) as typeof childProcess.fork;

// Track better-sqlite3 connections and close them on teardown.
const openSqlite: Array<{ close: () => void }> = [];
vi.mock("better-sqlite3", async () => {
  const mod = await vi.importActual<typeof import("better-sqlite3")>("better-sqlite3");
  const Wrapped = function (...args: unknown[]) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const db = new mod.default(...args);
    openSqlite.push(db as { close: () => void });
    return db;
  };
  Wrapped.prototype = mod.default.prototype;
  return { __esModule: true, default: Wrapped as typeof mod.default };
});

import type {
  ChannelId,
  ChannelOutboundAdapter,
  ChannelPlugin,
} from "../src/channels/plugins/types.js";
import type { GenSparxConfig } from "../src/config/config.js";
import type { OutboundSendDeps } from "../src/infra/outbound/deliver.js";
import { withIsolatedTestHome } from "./test-env.js";

// Set HOME/state isolation before importing any runtime OpenClaw modules.
const testEnv = withIsolatedTestHome();
afterAll(() => testEnv.cleanup());

const [{ installProcessWarningFilter }, { setActivePluginRegistry }, { createTestRegistry }] =
  await Promise.all([
    import("../src/infra/warning-filter.js"),
    import("../src/plugins/runtime.js"),
    import("../src/test-utils/channel-plugins.js"),
  ]);

installProcessWarningFilter();

const pickSendFn = (id: ChannelId, deps?: OutboundSendDeps) => {
  switch (id) {
    case "discord":
      return deps?.sendDiscord;
    case "slack":
      return deps?.sendSlack;
    case "telegram":
      return deps?.sendTelegram;
    case "whatsapp":
      return deps?.sendWhatsApp;
    case "signal":
      return deps?.sendSignal;
    case "imessage":
      return deps?.sendIMessage;
    default:
      return undefined;
  }
};

const createStubOutbound = (
  id: ChannelId,
  deliveryMode: ChannelOutboundAdapter["deliveryMode"] = "direct",
): ChannelOutboundAdapter => ({
  deliveryMode,
  sendText: async ({ deps, to, text }) => {
    const send = pickSendFn(id, deps);
    if (send) {
      // oxlint-disable-next-line typescript/no-explicit-any
      const result = await send(to, text, { verbose: false } as any);
      return { channel: id, ...result };
    }
    return { channel: id, messageId: "test" };
  },
  sendMedia: async ({ deps, to, text, mediaUrl }) => {
    const send = pickSendFn(id, deps);
    if (send) {
      // oxlint-disable-next-line typescript/no-explicit-any
      const result = await send(to, text, { verbose: false, mediaUrl } as any);
      return { channel: id, ...result };
    }
    return { channel: id, messageId: "test" };
  },
});

const createStubPlugin = (params: {
  id: ChannelId;
  label?: string;
  aliases?: string[];
  deliveryMode?: ChannelOutboundAdapter["deliveryMode"];
  preferSessionLookupForAnnounceTarget?: boolean;
}): ChannelPlugin => ({
  id: params.id,
  meta: {
    id: params.id,
    label: params.label ?? String(params.id),
    selectionLabel: params.label ?? String(params.id),
    docsPath: `/channels/${params.id}`,
    blurb: "test stub.",
    aliases: params.aliases,
    preferSessionLookupForAnnounceTarget: params.preferSessionLookupForAnnounceTarget,
  },
  capabilities: { chatTypes: ["direct", "group"] },
  config: {
    listAccountIds: (cfg: GenSparxConfig) => {
      const channels = cfg.channels as Record<string, unknown> | undefined;
      const entry = channels?.[params.id];
      if (!entry || typeof entry !== "object") {
        return [];
      }
      const accounts = (entry as { accounts?: Record<string, unknown> }).accounts;
      const ids = accounts ? Object.keys(accounts).filter(Boolean) : [];
      return ids.length > 0 ? ids : ["default"];
    },
    resolveAccount: (cfg: GenSparxConfig, accountId: string) => {
      const channels = cfg.channels as Record<string, unknown> | undefined;
      const entry = channels?.[params.id];
      if (!entry || typeof entry !== "object") {
        return {};
      }
      const accounts = (entry as { accounts?: Record<string, unknown> }).accounts;
      const match = accountId ? accounts?.[accountId] : undefined;
      return (match && typeof match === "object") || typeof match === "string" ? match : entry;
    },
    isConfigured: async (_account, cfg: GenSparxConfig) => {
      const channels = cfg.channels as Record<string, unknown> | undefined;
      return Boolean(channels?.[params.id]);
    },
  },
  outbound: createStubOutbound(params.id, params.deliveryMode),
});

const createDefaultRegistry = () =>
  createTestRegistry([
    {
      pluginId: "discord",
      plugin: createStubPlugin({ id: "discord", label: "Discord" }),
      source: "test",
    },
    {
      pluginId: "slack",
      plugin: createStubPlugin({ id: "slack", label: "Slack" }),
      source: "test",
    },
    {
      pluginId: "telegram",
      plugin: {
        ...createStubPlugin({ id: "telegram", label: "Telegram" }),
        status: {
          buildChannelSummary: async () => ({
            configured: false,
            tokenSource: process.env.TELEGRAM_BOT_TOKEN ? "env" : "none",
          }),
        },
      },
      source: "test",
    },
    {
      pluginId: "whatsapp",
      plugin: createStubPlugin({
        id: "whatsapp",
        label: "WhatsApp",
        deliveryMode: "gateway",
        preferSessionLookupForAnnounceTarget: true,
      }),
      source: "test",
    },
    {
      pluginId: "signal",
      plugin: createStubPlugin({ id: "signal", label: "Signal" }),
      source: "test",
    },
    {
      pluginId: "imessage",
      plugin: createStubPlugin({ id: "imessage", label: "iMessage", aliases: ["imsg"] }),
      source: "test",
    },
  ]);

// Creating a fresh registry before every single test was measurable overhead.
// The registry is treated as immutable by production code; tests that need a
// custom registry set it explicitly.
const DEFAULT_PLUGIN_REGISTRY = createDefaultRegistry();

beforeEach(() => {
  setActivePluginRegistry(DEFAULT_PLUGIN_REGISTRY);
});

afterEach(() => {
  // Guard against leaked fake timers across test files/workers.
  if (vi.isFakeTimers()) {
    vi.useRealTimers();
  }
});

afterAll(() => {
  // Kill any lingering child processes.
  for (const cp of spawnedChildren) {
    try {
      if (!cp.killed) {
        cp.kill("SIGKILL");
      }
    } catch {
      // ignore kill errors
    }
  }
  spawnedChildren.length = 0;

  // Close any tracked better-sqlite3 connections.
  for (const db of openSqlite) {
    try {
      db.close();
    } catch {
      // ignore close errors
    }
  }
  openSqlite.length = 0;
});
