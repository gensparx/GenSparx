import { Command } from "commander";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { registerNodeCli } from "./register.js";

type LoadNodeHostConfig = typeof import("../../node-host/config.js").loadNodeHostConfig;

const daemonMocks = vi.hoisted(() => ({
  loadNodeHostConfig: vi.fn<LoadNodeHostConfig>(async () => null),
  runNodeHost: vi.fn(),
  runNodeDaemonInstall: vi.fn(),
  runNodeDaemonRestart: vi.fn(),
  runNodeDaemonStatus: vi.fn(),
  runNodeDaemonStop: vi.fn(),
  runNodeDaemonUninstall: vi.fn(),
}));

vi.mock("./daemon.js", () => daemonMocks);

vi.mock("../../node-host/config.js", () => ({
  loadNodeHostConfig: daemonMocks.loadNodeHostConfig,
}));

vi.mock("../../node-host/runner.js", () => ({
  runNodeHost: daemonMocks.runNodeHost,
}));

function createProgram(): Command {
  const program = new Command();
  program.exitOverride();
  program.configureOutput({
    writeErr: () => undefined,
    writeOut: () => undefined,
  });
  registerNodeCli(program);
  return program;
}

describe("registerNodeCli", () => {
  beforeEach(() => {
    daemonMocks.loadNodeHostConfig.mockClear();
    daemonMocks.loadNodeHostConfig.mockResolvedValue(null);
    daemonMocks.runNodeHost.mockClear();
    daemonMocks.runNodeDaemonInstall.mockClear();
    daemonMocks.runNodeDaemonRestart.mockClear();
    daemonMocks.runNodeDaemonStatus.mockClear();
    daemonMocks.runNodeDaemonStop.mockClear();
    daemonMocks.runNodeDaemonUninstall.mockClear();
  });

  it("falls back to configured node run port when --port is omitted", async () => {
    daemonMocks.loadNodeHostConfig.mockResolvedValue({
      version: 1,
      nodeId: "node-existing",
      gateway: { host: "10.0.0.2", port: 19001 },
    });

    await createProgram().parseAsync(["node", "run"], { from: "user" });

    expect(daemonMocks.runNodeHost).toHaveBeenCalledWith(
      expect.objectContaining({ gatewayHost: "10.0.0.2", gatewayPort: 19001 }),
    );
  });

  it("inherits saved TLS settings only when using the saved gateway endpoint", async () => {
    daemonMocks.loadNodeHostConfig.mockResolvedValue({
      version: 1,
      nodeId: "node-existing",
      gateway: {
        host: "10.0.0.2",
        port: 19001,
        tls: true,
        tlsFingerprint: "old-fingerprint",
      },
    });

    await createProgram().parseAsync(["node", "run"], { from: "user" });
    expect(daemonMocks.runNodeHost).toHaveBeenLastCalledWith(
      expect.objectContaining({
        gatewayTls: true,
        gatewayTlsFingerprint: "old-fingerprint",
      }),
    );

    await createProgram().parseAsync(["node", "run", "--host", "10.0.0.3"], { from: "user" });
    expect(daemonMocks.runNodeHost).toHaveBeenLastCalledWith(
      expect.objectContaining({
        gatewayHost: "10.0.0.3",
        gatewayTls: undefined,
        gatewayTlsFingerprint: undefined,
      }),
    );
  });
});
