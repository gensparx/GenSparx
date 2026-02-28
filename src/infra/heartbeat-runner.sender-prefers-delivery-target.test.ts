import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { GenSparxConfig } from "../config/config.js";
import { slackPlugin } from "../../extensions/slack/src/channel.js";
import { setSlackRuntime } from "../../extensions/slack/src/runtime.js";
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
import { installHeartbeatRunnerTestRuntime } from "./heartbeat-runner.test-harness.js";
import { seedMainSessionStore, withTempHeartbeatSandbox } from "./heartbeat-runner.test-utils.js";

// Avoid pulling optional runtime deps during isolated runs.
vi.mock("jiti", () => ({ createJiti: () => () => ({}) }));

installHeartbeatRunnerTestRuntime({ includeSlack: true });

describe("runHeartbeatOnce", () => {
  it("uses the delivery target as sender when lastTo differs", async () => {
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
              target: "slack",
              to: "C0A9P2N8QHY",
            },
          },
          session: { store: storePath },
        };

        await seedMainSessionStore(storePath, cfg, {
          lastChannel: "telegram",
          lastProvider: "telegram",
          lastTo: "1644620762",
        });

        replySpy.mockImplementation(async (ctx: { To?: string; From?: string }) => {
          expect(ctx.To).toBe("C0A9P2N8QHY");
          expect(ctx.From).toBe("C0A9P2N8QHY");
          return { text: "ok" };
        });

        const sendSlack = vi.fn().mockResolvedValue({
          messageId: "m1",
          channelId: "C0A9P2N8QHY",
        });

        await runHeartbeatOnce({
          cfg,
          deps: {
            sendSlack,
            getQueueSize: () => 0,
            nowMs: () => 0,
          },
        });

        expect(sendSlack).toHaveBeenCalled();
      },
      { prefix: "openclaw-hb-" },
    );
  });
});
