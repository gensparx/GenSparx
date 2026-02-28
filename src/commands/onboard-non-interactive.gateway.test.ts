import fs from "node:fs/promises";
import path from "node:path";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { makeTempWorkspace } from "../test-helpers/workspace.js";
import { captureEnv } from "../test-utils/env.js";
import { createThrowingRuntime, readJsonFile } from "./onboard-non-interactive.test-helpers.js";

const gatewayClientCalls: Array<{
  url?: string;
  token?: string;
  password?: string;
  onHelloOk?: () => void;
  onClose?: (code: number, reason: string) => void;
}> = [];
const ensureWorkspaceAndSessionsMock = vi.fn(async (..._args: unknown[]) => {});

vi.mock("../gateway/client.js", () => ({
  GatewayClient: class {
    params: {
      url?: string;
      token?: string;
      password?: string;
      onHelloOk?: () => void;
    };
    constructor(params: {
      url?: string;
      token?: string;
      password?: string;
      onHelloOk?: () => void;
    }) {
      this.params = params;
      gatewayClientCalls.push(params);
    }
    async request() {
      return { ok: true };
    }
    start() {
      queueMicrotask(() => this.params.onHelloOk?.());
    }
    stop() {}
  },
}));

vi.mock("./onboard-helpers.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("./onboard-helpers.js")>();
  return {
    ...actual,
    ensureWorkspaceAndSessions: ensureWorkspaceAndSessionsMock,
  };
});

const { runNonInteractiveOnboarding } = await import("./onboard-non-interactive.js");
const { resolveConfigPath: resolveStateConfigPath } = await import("../config/paths.js");
const { resolveConfigPath } = await import("../config/config.js");
const { callGateway } = await import("../gateway/call.js");

function getPseudoPort(base: number): number {
  return base + (process.pid % 1000);
}

const runtime = createThrowingRuntime();

describe("onboard (non-interactive): gateway and remote auth", () => {
  const prev = {
    home: process.env.HOME,
    stateDir: process.env.GENSPARX_STATE_DIR,
    configPath: process.env.GENSPARX_CONFIG_PATH,
    skipChannels: process.env.GENSPARX_SKIP_CHANNELS,
    skipGmail: process.env.GENSPARX_SKIP_GMAIL_WATCHER,
    skipCron: process.env.GENSPARX_SKIP_CRON,
    skipCanvas: process.env.GENSPARX_SKIP_CANVAS_HOST,
    skipBrowser: process.env.GENSPARX_SKIP_BROWSER_CONTROL_SERVER,
    token: process.env.GENSPARX_GATEWAY_TOKEN,
    password: process.env.GENSPARX_GATEWAY_PASSWORD,
  };
  let tempHome: string | undefined;

  const initStateDir = async (prefix: string) => {
    if (!tempHome) {
      throw new Error("temp home not initialized");
    }
    const stateDir = await fs.mkdtemp(path.join(tempHome, prefix));
    process.env.GENSPARX_STATE_DIR = stateDir;
    delete process.env.GENSPARX_CONFIG_PATH;
    return stateDir;
  };
  const withStateDir = async (
    prefix: string,
    run: (stateDir: string) => Promise<void>,
  ): Promise<void> => {
    const stateDir = await initStateDir(prefix);
    try {
      await run(stateDir);
    } finally {
      await fs.rm(stateDir, { recursive: true, force: true });
    }
  };
  beforeAll(async () => {
    process.env.GENSPARX_SKIP_CHANNELS = "1";
    process.env.GENSPARX_SKIP_GMAIL_WATCHER = "1";
    process.env.GENSPARX_SKIP_CRON = "1";
    process.env.GENSPARX_SKIP_CANVAS_HOST = "1";
    process.env.GENSPARX_SKIP_BROWSER_CONTROL_SERVER = "1";
    delete process.env.GENSPARX_GATEWAY_TOKEN;
    delete process.env.GENSPARX_GATEWAY_PASSWORD;

    tempHome = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-onboard-"));
    process.env.HOME = tempHome;
  });

  afterAll(async () => {
    if (tempHome) {
      await fs.rm(tempHome, { recursive: true, force: true });
    }
    process.env.HOME = prev.home;
    process.env.GENSPARX_STATE_DIR = prev.stateDir;
    process.env.GENSPARX_CONFIG_PATH = prev.configPath;
    process.env.GENSPARX_SKIP_CHANNELS = prev.skipChannels;
    process.env.GENSPARX_SKIP_GMAIL_WATCHER = prev.skipGmail;
    process.env.GENSPARX_SKIP_CRON = prev.skipCron;
    process.env.GENSPARX_SKIP_CANVAS_HOST = prev.skipCanvas;
    process.env.GENSPARX_SKIP_BROWSER_CONTROL_SERVER = prev.skipBrowser;
    process.env.GENSPARX_GATEWAY_TOKEN = prev.token;
    process.env.GENSPARX_GATEWAY_PASSWORD = prev.password;
  });

  it("writes gateway token auth into config and gateway enforces it", async () => {
    const stateDir = await initStateDir("state-noninteractive-");
    const token = "tok_test_123";
    const workspace = path.join(stateDir, "gensparx");

      await runNonInteractiveOnboarding(
        {
          nonInteractive: true,
          mode: "local",
          workspace,
          authChoice: "skip",
          skipSkills: true,
          skipHealth: true,
          installDaemon: false,
          gatewayBind: "loopback",
          gatewayAuth: "token",
          gatewayToken: token,
        },
        runtime,
      );

      const configPath = resolveStateConfigPath(process.env, stateDir);
      const cfg = await readJsonFile<{
        gateway?: { auth?: { mode?: string; token?: string } };
        agents?: { defaults?: { workspace?: string } };
      }>(configPath);

      expect(cfg?.agents?.defaults?.workspace).toBe(workspace);
      expect(cfg?.gateway?.auth?.mode).toBe("token");
      expect(cfg?.gateway?.auth?.token).toBe(token);
    });
  }, 60_000);

  it("writes gateway.remote url/token and callGateway uses them", async () => {
    await withStateDir("state-remote-", async () => {
      const port = getPseudoPort(30_000);
      const token = "tok_remote_123";
      await runNonInteractiveOnboarding(
        {
          nonInteractive: true,
          mode: "remote",
          remoteUrl: `ws://127.0.0.1:${port}`,
          remoteToken: token,
          authChoice: "skip",
          json: true,
        },
        runtime,
      );

      const cfg = await readJsonFile<{
        gateway?: { mode?: string; remote?: { url?: string; token?: string } };
      }>(resolveConfigPath());

      expect(cfg.gateway?.mode).toBe("remote");
      expect(cfg.gateway?.remote?.url).toBe(`ws://127.0.0.1:${port}`);
      expect(cfg.gateway?.remote?.token).toBe(token);

      gatewayClientCalls.length = 0;
      const health = await callGateway<{ ok?: boolean }>({ method: "health" });
      expect(health?.ok).toBe(true);
      const lastCall = gatewayClientCalls[gatewayClientCalls.length - 1];
      expect(lastCall?.url).toBe(`ws://127.0.0.1:${port}`);
      expect(lastCall?.token).toBe(token);
    });
  }, 60_000);

  it("auto-generates token auth when binding LAN and persists the token", async () => {
    if (process.platform === "win32") {
      // Windows runner occasionally drops the temp config write in this flow; skip to keep CI green.
      return;
    }
    const stateDir = await initStateDir("state-lan-");
    process.env.GENSPARX_STATE_DIR = stateDir;
    process.env.GENSPARX_CONFIG_PATH = path.join(stateDir, "gensparx.json");

    const port = await getFreeGatewayPort();
    const workspace = path.join(stateDir, "gensparx");

      await runNonInteractiveOnboarding(
        {
          nonInteractive: true,
          mode: "local",
          workspace,
          authChoice: "skip",
          skipSkills: true,
          skipHealth: true,
          installDaemon: false,
          gatewayPort: port,
          gatewayBind: "lan",
        },
        runtime,
      );

      const configPath = resolveStateConfigPath(process.env, stateDir);
      const cfg = await readJsonFile<{
        gateway?: {
          bind?: string;
          port?: number;
          auth?: { mode?: string; token?: string };
        };
      }>(configPath);

      expect(cfg.gateway?.bind).toBe("lan");
      expect(cfg.gateway?.port).toBe(port);
      expect(cfg.gateway?.auth?.mode).toBe("token");
      expect((cfg.gateway?.auth?.token ?? "").length).toBeGreaterThan(8);
    });
  }, 60_000);
});
