import { beforeAll, describe, expect, it, vi } from "vitest";
import { escapeRegExp, formatEnvelopeTimestamp } from "../../test/helpers/envelope-timestamp.js";
import { withEnvAsync } from "../test-utils/env.js";
import {
  createWebListenerFactoryCapture,
  installWebAutoReplyTestHomeHooks,
  installWebAutoReplyUnitTestHooks,
  makeSessionStore,
  setLoadConfigMock,
} from "./auto-reply.test-harness.js";
import type { WebInboundMessage } from "./inbound.js";

installWebAutoReplyTestHomeHooks();

import { resetInboundDedupe } from "../auto-reply/reply/inbound-dedupe.js";
import { resetLogger, setLoggerOverride } from "../logging.js";
import { monitorWebChannel } from "./auto-reply.js";
import { resetBaileysMocks, resetLoadConfigMock, setLoadConfigMock } from "./test-helpers.js";

let previousHome: string | undefined;
let tempHome: string | undefined;

const rmDirWithRetries = async (dir: string): Promise<void> => {
  // Some tests can leave async session-store writes in-flight; recursive deletion can race and throw ENOTEMPTY.
  for (let attempt = 0; attempt < 10; attempt += 1) {
    try {
      await fs.rm(dir, { recursive: true, force: true });
      return;
    } catch (err) {
      const code =
        err && typeof err === "object" && "code" in err
          ? String((err as { code?: unknown }).code)
          : null;
      if (code === "ENOTEMPTY" || code === "EBUSY" || code === "EPERM") {
        await new Promise((resolve) => setTimeout(resolve, 25));
        continue;
      }
      throw err;
    }
  }

  await fs.rm(dir, { recursive: true, force: true });
};

beforeEach(async () => {
  resetInboundDedupe();
  previousHome = process.env.HOME;
  tempHome = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-web-home-"));
  process.env.HOME = tempHome;
});

afterEach(async () => {
  process.env.HOME = previousHome;
  if (tempHome) {
    await rmDirWithRetries(tempHome);
    tempHome = undefined;
  }
});

const makeSessionStore = async (
  entries: Record<string, unknown> = {},
): Promise<{ storePath: string; cleanup: () => Promise<void> }> => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-session-"));
  const storePath = path.join(dir, "sessions.json");
  await fs.writeFile(storePath, JSON.stringify(entries));
  const cleanup = async () => {
    // Session store writes can be in-flight when the test finishes (e.g. updateLastRoute
    // after a message flush). `fs.rm({ recursive })` can race and throw ENOTEMPTY.
    for (let attempt = 0; attempt < 10; attempt += 1) {
      try {
        await fs.rm(dir, { recursive: true, force: true });
        return;
      } catch (err) {
        const code =
          err && typeof err === "object" && "code" in err
            ? String((err as { code?: unknown }).code)
            : null;
        if (code === "ENOTEMPTY" || code === "EBUSY" || code === "EPERM") {
          await new Promise((resolve) => setTimeout(resolve, 25));
          continue;
        }
        throw err;
      }
    }

    await fs.rm(dir, { recursive: true, force: true });
  };
  return {
    log: vi.fn(),
    error: vi.fn(),
    exit: vi.fn(),
  };
}

function startMonitorWebChannel(params: {
  monitorWebChannelFn: (...args: unknown[]) => Promise<unknown>;
  listenerFactory: unknown;
  sleep: ReturnType<typeof vi.fn>;
  signal?: AbortSignal;
  heartbeatSeconds?: number;
  messageTimeoutMs?: number;
  watchdogCheckMs?: number;
  reconnect?: { initialMs: number; maxMs: number; maxAttempts: number; factor: number };
}) {
  const runtime = createRuntime();
  const controller = new AbortController();
  const run = params.monitorWebChannelFn(
    false,
    params.listenerFactory as never,
    true,
    async () => ({ text: "ok" }),
    runtime as never,
    params.signal ?? controller.signal,
    {
      heartbeatSeconds: params.heartbeatSeconds ?? 1,
      messageTimeoutMs: params.messageTimeoutMs,
      watchdogCheckMs: params.watchdogCheckMs,
      reconnect: params.reconnect ?? { initialMs: 10, maxMs: 10, maxAttempts: 3, factor: 1.1 },
      sleep: params.sleep,
    },
  );

  return { runtime, controller, run };
}

function makeInboundMessage(params: {
  body: string;
  from: string;
  to: string;
  id?: string;
  timestamp?: number;
  sendComposing: ReturnType<typeof vi.fn>;
  reply: ReturnType<typeof vi.fn>;
  sendMedia: ReturnType<typeof vi.fn>;
}): WebInboundMessage {
  return {
    body: params.body,
    from: params.from,
    to: params.to,
    id: params.id,
    timestamp: params.timestamp,
    conversationId: params.from,
    accountId: "default",
    chatType: "direct",
    chatId: params.from,
    sendComposing: params.sendComposing as unknown as WebInboundMessage["sendComposing"],
    reply: params.reply as unknown as WebInboundMessage["reply"],
    sendMedia: params.sendMedia as unknown as WebInboundMessage["sendMedia"],
  };
}

describe("web auto-reply", () => {
  installWebAutoReplyUnitTestHooks();

  // Ensure test-harness `vi.mock(...)` hooks are registered before importing the module under test.
  let monitorWebChannel: typeof import("./auto-reply.js").monitorWebChannel;
  beforeAll(async () => {
    ({ monitorWebChannel } = await import("./auto-reply.js"));
  });

  it("handles helper envelope timestamps with trimmed timezones (regression)", () => {
    const d = new Date("2025-01-01T00:00:00.000Z");
    expect(() => formatEnvelopeTimestamp(d, " America/Los_Angeles ")).not.toThrow();
  });

  it("handles reconnect progress and max-attempt stop behavior", async () => {
    for (const scenario of [
      {
        reconnect: { initialMs: 10, maxMs: 10, maxAttempts: 3, factor: 1.1 },
        expectedCallsAfterFirstClose: 2,
        closeTwiceAndFinish: false,
        expectedError: "Retry 1",
      },
      {
        reconnect: { initialMs: 5, maxMs: 5, maxAttempts: 2, factor: 1.1 },
        expectedCallsAfterFirstClose: 2,
        closeTwiceAndFinish: true,
        expectedError: "max attempts reached",
      },
    ]) {
      const closeResolvers: Array<() => void> = [];
      const sleep = vi.fn(async () => {});
      const listenerFactory = vi.fn(async () => {
        const onClose = new Promise<void>((res) => {
          closeResolvers.push(res);
        });
        return { close: vi.fn(), onClose };
      });
      const { runtime, controller, run } = startMonitorWebChannel({
        monitorWebChannelFn: monitorWebChannel as never,
        listenerFactory,
        sleep,
        reconnect: scenario.reconnect,
      });

      await Promise.resolve();
      expect(listenerFactory).toHaveBeenCalledTimes(1);

      closeResolvers.shift()?.();
      await vi.waitFor(
        () => {
          expect(listenerFactory).toHaveBeenCalledTimes(scenario.expectedCallsAfterFirstClose);
        },
        { timeout: 250, interval: 2 },
      );

      if (scenario.closeTwiceAndFinish) {
        closeResolvers.shift()?.();
        await run;
      } else {
        controller.abort();
        closeResolvers.shift()?.();
        await Promise.resolve();
        await run;
      }

      expect(runtime.error).toHaveBeenCalledWith(expect.stringContaining(scenario.expectedError));
    }
  });

  it("treats status 440 as non-retryable and stops without retrying", async () => {
    const closeResolvers: Array<(reason?: unknown) => void> = [];
    const sleep = vi.fn(async () => {});
    const listenerFactory = vi.fn(async () => {
      const onClose = new Promise<unknown>((res) => {
        closeResolvers.push(res);
      });
      return { close: vi.fn(), onClose };
    });
    const { runtime, controller, run } = startMonitorWebChannel({
      monitorWebChannelFn: monitorWebChannel as never,
      listenerFactory,
      sleep,
      reconnect: { initialMs: 10, maxMs: 10, maxAttempts: 3, factor: 1.1 },
    });

    await Promise.resolve();
    expect(listenerFactory).toHaveBeenCalledTimes(1);
    closeResolvers.shift()?.({
      status: 440,
      isLoggedOut: false,
      error: "Unknown Stream Errored (conflict)",
    });

    const completedQuickly = await Promise.race([
      run.then(() => true),
      new Promise<boolean>((resolve) => setTimeout(() => resolve(false), 60)),
    ]);

    if (!completedQuickly) {
      await vi.waitFor(
        () => {
          expect(listenerFactory).toHaveBeenCalledTimes(2);
        },
        { timeout: 250, interval: 2 },
      );
      controller.abort();
      closeResolvers[1]?.({ status: 499, isLoggedOut: false, error: "aborted" });
      await run;
    }

    expect(completedQuickly).toBe(true);
    expect(listenerFactory).toHaveBeenCalledTimes(1);
    expect(sleep).not.toHaveBeenCalled();
    expect(runtime.error).toHaveBeenCalledWith(expect.stringContaining("status 440"));
    expect(runtime.error).toHaveBeenCalledWith(expect.stringContaining("session conflict"));
    expect(runtime.error).toHaveBeenCalledWith(expect.stringContaining("Stopping web monitoring"));
  });

  it("forces reconnect when watchdog closes without onClose", async () => {
    vi.useFakeTimers();
    try {
      const sleep = vi.fn(async () => {});
      const closeResolvers: Array<(reason: unknown) => void> = [];
      let capturedOnMessage:
        | ((msg: import("./inbound.js").WebInboundMessage) => Promise<void>)
        | undefined;
      const listenerFactory = vi.fn(
        async (opts: {
          onMessage: (msg: import("./inbound.js").WebInboundMessage) => Promise<void>;
        }) => {
          capturedOnMessage = opts.onMessage;
          let resolveClose: (reason: unknown) => void = () => {};
          const onClose = new Promise<unknown>((res) => {
            resolveClose = res;
            closeResolvers.push(res);
          });
          return {
            close: vi.fn(),
            onClose,
            signalClose: (reason?: unknown) => resolveClose(reason),
          };
        },
      );
      const { controller, run } = startMonitorWebChannel({
        monitorWebChannelFn: monitorWebChannel as never,
        listenerFactory,
        sleep,
        heartbeatSeconds: 60,
        messageTimeoutMs: 30,
        watchdogCheckMs: 5,
      });

      expect(resolver).toHaveBeenCalledTimes(2);
      const firstArgs = resolver.mock.calls[0][0];
      const secondArgs = resolver.mock.calls[1][0];
      const firstTimestamp = formatEnvelopeTimestamp(new Date("2025-01-01T00:00:00Z"));
      const secondTimestamp = formatEnvelopeTimestamp(new Date("2025-01-01T01:00:00Z"));
      const firstPattern = escapeRegExp(firstTimestamp);
      const secondPattern = escapeRegExp(secondTimestamp);
      expect(firstArgs.Body).toMatch(
        new RegExp(`\\[WhatsApp \\+1 (\\+\\d+[smhd] )?${firstPattern}\\] .gensparx\\] first`),
      );
      expect(firstArgs.Body).not.toContain("second");
      expect(secondArgs.Body).toMatch(
        new RegExp(`\\[WhatsApp \\+1 (\\+\\d+[smhd] )?${secondPattern}\\] .gensparx\\] second`),
      );
      expect(secondArgs.Body).not.toContain("first");

      const reply = vi.fn().mockResolvedValue(undefined);
      const sendComposing = vi.fn();
      const sendMedia = vi.fn();

      // The watchdog only needs `lastMessageAt` to be set. Don't await full message
      // processing here since it can schedule timers and become flaky under load.
      void capturedOnMessage?.(
        makeInboundMessage({
          body: "hi",
          from: "+1",
          to: "+2",
          id: "m1",
          sendComposing,
          reply,
          sendMedia,
        }),
      );

      await vi.advanceTimersByTimeAsync(200);
      await Promise.resolve();
      await vi.waitFor(
        () => {
          expect(listenerFactory).toHaveBeenCalledTimes(2);
        },
        { timeout: 250, interval: 2 },
      );

      controller.abort();
      closeResolvers[1]?.({ status: 499, isLoggedOut: false });
      await Promise.resolve();
      await run;
    } finally {
      vi.useRealTimers();
    }
  });

  it("processes inbound messages without batching and preserves timestamps", async () => {
    await withEnvAsync({ TZ: "Europe/Vienna" }, async () => {
      const originalMax = process.getMaxListeners();
      process.setMaxListeners?.(1); // force low to confirm bump

      const store = await makeSessionStore({
        main: { sessionId: "sid", updatedAt: Date.now() },
      });

      try {
        const sendMedia = vi.fn();
        const reply = vi.fn().mockResolvedValue(undefined);
        const sendComposing = vi.fn();
        const resolver = vi.fn().mockResolvedValue({ text: "ok" });

        const capture = createWebListenerFactoryCapture();

        setLoadConfigMock(() => ({
          agents: {
            defaults: {
              envelopeTimezone: "utc",
            },
          },
          session: { store: store.storePath },
        }));

        await monitorWebChannel(false, capture.listenerFactory as never, false, resolver);
        const capturedOnMessage = capture.getOnMessage();
        expect(capturedOnMessage).toBeDefined();

        // Two messages from the same sender with fixed timestamps
        await capturedOnMessage?.(
          makeInboundMessage({
            body: "first",
            from: "+1",
            to: "+2",
            id: "m1",
            timestamp: 1735689600000, // Jan 1 2025 00:00:00 UTC
            sendComposing,
            reply,
            sendMedia,
          }),
        );
        await capturedOnMessage?.(
          makeInboundMessage({
            body: "second",
            from: "+1",
            to: "+2",
            id: "m2",
            timestamp: 1735693200000, // Jan 1 2025 01:00:00 UTC
            sendComposing,
            reply,
            sendMedia,
          }),
        );

        expect(resolver).toHaveBeenCalledTimes(2);
        const firstArgs = resolver.mock.calls[0][0];
        const secondArgs = resolver.mock.calls[1][0];
        const firstTimestamp = formatEnvelopeTimestamp(new Date("2025-01-01T00:00:00Z"));
        const secondTimestamp = formatEnvelopeTimestamp(new Date("2025-01-01T01:00:00Z"));
        const firstPattern = escapeRegExp(firstTimestamp);
        const secondPattern = escapeRegExp(secondTimestamp);
        expect(firstArgs.Body).toMatch(
          new RegExp(`\\[WhatsApp \\+1 (\\+\\d+[smhd] )?${firstPattern}\\] \\[openclaw\\] first`),
        );
        expect(firstArgs.Body).not.toContain("second");
        expect(secondArgs.Body).toMatch(
          new RegExp(`\\[WhatsApp \\+1 (\\+\\d+[smhd] )?${secondPattern}\\] \\[openclaw\\] second`),
        );
        expect(secondArgs.Body).not.toContain("first");

        // Max listeners bumped to avoid warnings in multi-instance test runs
        expect(process.getMaxListeners?.()).toBeGreaterThanOrEqual(50);
      } finally {
        process.setMaxListeners?.(originalMax);
        await store.cleanup();
      }
    });
  });
});
