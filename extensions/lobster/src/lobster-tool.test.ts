import { EventEmitter } from "node:events";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import type { GenSparxPluginApi, GenSparxPluginToolContext } from "../../../src/plugins/types.js";
import { createLobsterTool } from "./lobster-tool.js";

async function writeFakeLobsterScript(scriptBody: string, prefix = "GenSparx-lobster-plugin-") {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), prefix));
  const isWindows = process.platform === "win32";

vi.mock("node:child_process", () => ({
  spawn: (...args: unknown[]) => spawnState.spawn(...args),
}));

let createLobsterTool: typeof import("./lobster-tool.js").createLobsterTool;

function fakeApi(overrides: Partial<GenSparxPluginApi> = {}): GenSparxPluginApi {
  return {
    id: "lobster",
    name: "lobster",
    source: "test",
    config: {},
    pluginConfig: {},
    // oxlint-disable-next-line typescript/no-explicit-any
    runtime: { version: "test" } as any,
    logger: { info() {}, warn() {}, error() {}, debug() {} },
    registerTool() {},
    registerHttpHandler() {},
    registerChannel() {},
    registerGatewayMethod() {},
    registerCli() {},
    registerService() {},
    registerProvider() {},
    registerHook() {},
    registerHttpRoute() {},
    registerCommand() {},
    on() {},
    resolvePath: (p) => p,
    ...overrides,
  };
}

function fakeCtx(overrides: Partial<GenSparxPluginToolContext> = {}): GenSparxPluginToolContext {
  return {
    config: {},
    workspaceDir: "/tmp",
    agentDir: "/tmp",
    agentId: "main",
    sessionKey: "main",
    messageChannel: undefined,
    agentAccountId: undefined,
    sandboxed: false,
    ...overrides,
  };
}

const testMaybe = process.platform === "win32" ? it.skip : it;

describe("lobster plugin tool", () => {
  let tempDir = "";
  const originalProcessState = snapshotPlatformPathEnv();

  beforeAll(async () => {
    ({ createLobsterTool } = await import("./lobster-tool.js"));

    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "openclaw-lobster-plugin-"));
  });

  afterEach(() => {
    restorePlatformPathEnv(originalProcessState);
  });

  afterAll(async () => {
    if (!tempDir) {
      return;
    }
    if (process.platform === "win32") {
      await fs.rm(tempDir, { recursive: true, force: true, maxRetries: 10, retryDelay: 50 });
    } else {
      await fs.rm(tempDir, { recursive: true, force: true });
    }
  });

  beforeEach(() => {
    spawnState.queue.length = 0;
    spawnState.spawn.mockReset();
    spawnState.spawn.mockImplementation(() => {
      const next = spawnState.queue.shift() ?? { stdout: "" };
      const stdout = new PassThrough();
      const stderr = new PassThrough();
      const child = new EventEmitter() as EventEmitter & {
        stdout: PassThrough;
        stderr: PassThrough;
        kill: (signal?: string) => boolean;
      };
      child.stdout = stdout;
      child.stderr = stderr;
      child.kill = () => true;

      setImmediate(() => {
        if (next.stderr) {
          stderr.end(next.stderr);
        } else {
          stderr.end();
        }
        stdout.end(next.stdout);
        child.emit("exit", next.exitCode ?? 0);
      });

      return child;
    });
  });

  const queueSuccessfulEnvelope = (hello = "world") => {
    spawnState.queue.push({
      stdout: JSON.stringify({
        ok: true,
        status: "ok",
        output: [{ hello }],
        requiresApproval: null,
      }),
    });
  };

  it("runs lobster and returns parsed envelope in details", async () => {
    spawnState.queue.push({
      stdout: JSON.stringify({
        ok: true,
        status: "ok",
        output: [{ hello: "world" }],
        requiresApproval: null,
      }),
    });

    const tool = createLobsterTool(fakeApi());
    const res = await tool.execute("call1", {
      action: "run",
      pipeline: "noop",
      timeoutMs: 1000,
    });

    expect(spawnState.spawn).toHaveBeenCalled();
    expect(res.details).toMatchObject({ ok: true, status: "ok" });
  });

  it("tolerates noisy stdout before the JSON envelope", async () => {
    const payload = { ok: true, status: "ok", output: [], requiresApproval: null };
    const { dir } = await writeFakeLobsterScript(
      `const payload = ${JSON.stringify(payload)};\n` +
        `console.log("noise before json");\n` +
        `process.stdout.write(JSON.stringify(payload));\n`,
      "GenSparx-lobster-plugin-noisy-",
    );

    const tool = createLobsterTool(fakeApi());
    const res = await tool.execute("call-noisy", {
      action: "run",
      pipeline: "noop",
      timeoutMs: 1000,
    });

    expect(res.details).toMatchObject({ ok: true, status: "ok" });
  });

  it("requires action", async () => {
    const tool = createLobsterTool(fakeApi());
    await expect(tool.execute("call-action-missing", {})).rejects.toThrow(/action required/);
  });

  it("requires pipeline for run action", async () => {
    const tool = createLobsterTool(fakeApi());
    await expect(
      tool.execute("call-pipeline-missing", {
        action: "run",
      }),
    ).rejects.toThrow(/pipeline required/);
  });

  it("requires token and approve for resume action", async () => {
    const tool = createLobsterTool(fakeApi());
    await expect(
      tool.execute("call-resume-token-missing", {
        action: "resume",
        approve: true,
      }),
    ).rejects.toThrow(/token required/);
    await expect(
      tool.execute("call-resume-approve-missing", {
        action: "resume",
        token: "resume-token",
      }),
    ).rejects.toThrow(/approve required/);
  });

  it("rejects unknown action", async () => {
    const tool = createLobsterTool(fakeApi());
    await expect(
      tool.execute("call-action-unknown", {
        action: "explode",
      }),
    ).rejects.toThrow(/Unknown action/);
  });

  it("rejects absolute cwd", async () => {
    const tool = createLobsterTool(fakeApi());
    await expect(
      tool.execute("call2c", {
        action: "run",
        pipeline: "noop",
        cwd: "/tmp",
      }),
    ).rejects.toThrow(/cwd must be a relative path/);
  });

  it("rejects cwd that escapes the gateway working directory", async () => {
    const tool = createLobsterTool(fakeApi());
    await expect(
      tool.execute("call2d", {
        action: "run",
        pipeline: "noop",
        cwd: "../../etc",
      }),
    ).rejects.toThrow(/must stay within/);
  });

  testMaybe("uses pluginConfig.lobsterPath when provided", async () => {
    const fake = await writeFakeLobster({
      payload: { ok: true, status: "ok", output: [{ hello: "world" }], requiresApproval: null },
    });

    const tool = createLobsterTool(fakeApi());
    await expect(
      tool.execute("call3", {
        action: "run",
        pipeline: "noop",
      }),
    ).rejects.toThrow(/invalid JSON/);
  });

  it("rejects invalid JSON from lobster", async () => {
    const { dir } = await writeFakeLobsterScript(
      `process.stdout.write("nope");\n`,
      "GenSparx-lobster-plugin-bad-",
    );

    const tool = createLobsterTool(fakeApi());
    await tool.execute("call-win-shim", {
      action: "run",
      pipeline: "noop",
    });

    const [command, argv, options] = spawnState.spawn.mock.calls[0] ?? [];
    expect(command).toBe(process.execPath);
    expect(argv).toEqual([shimScriptPath, "run", "--mode", "tool", "noop"]);
    expect(options).toMatchObject({ windowsHide: true });
    expect(options).not.toHaveProperty("shell");
  });

  it("does not retry a failed Windows spawn with shell fallback", async () => {
    setProcessPlatform("win32");
    spawnState.spawn.mockReset();
    spawnState.spawn.mockImplementationOnce(() => {
      const child = new EventEmitter() as EventEmitter & {
        stdout: PassThrough;
        stderr: PassThrough;
        kill: (signal?: string) => boolean;
      };
      child.stdout = new PassThrough();
      child.stderr = new PassThrough();
      child.kill = () => true;
      const err = Object.assign(new Error("spawn failed"), { code: "ENOENT" });
      setImmediate(() => child.emit("error", err));
      return child;
    });

    const tool = createLobsterTool(fakeApi());
    await expect(
      tool.execute("call-win-no-retry", {
        action: "run",
        pipeline: "noop",
      }),
    ).rejects.toThrow(/spawn failed/);
    expect(spawnState.spawn).toHaveBeenCalledTimes(1);
  });

  it("can be gated off in sandboxed contexts", async () => {
    const api = fakeApi();
    const factoryTool = (ctx: GenSparxPluginToolContext) => {
      if (ctx.sandboxed) {
        return null;
      }
      return createLobsterTool(api);
    };

    expect(factoryTool(fakeCtx({ sandboxed: true }))).toBeNull();
    expect(factoryTool(fakeCtx({ sandboxed: false }))?.name).toBe("lobster");
  });
});
