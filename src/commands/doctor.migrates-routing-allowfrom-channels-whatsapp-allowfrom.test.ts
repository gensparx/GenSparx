import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { stripAnsi } from "../terminal/ansi.js";

let originalIsTTY: boolean | undefined;
let originalStateDir: string | undefined;
let originalUpdateInProgress: string | undefined;
let tempStateDir: string | undefined;

function setStdinTty(value: boolean | undefined) {
  try {
    Object.defineProperty(process.stdin, "isTTY", {
      value,
      configurable: true,
    });
  } catch {
    // ignore
  }
}

function hasNoteTitle(call: unknown[], expectedTitle: string): boolean {
  const title = call[1];
  if (typeof title === "string") {
    return stripAnsi(title).includes(expectedTitle);
  }
  return false;
}

beforeEach(() => {
  confirm.mockReset().mockResolvedValue(true);
  select.mockReset().mockResolvedValue("node");
  note.mockClear();

  readConfigFileSnapshot.mockReset();
  writeConfigFile.mockReset().mockResolvedValue(undefined);
  resolveGenSparxPackageRoot.mockReset().mockResolvedValue(null);
  runGatewayUpdate.mockReset().mockResolvedValue({
    status: "skipped",
    mode: "unknown",
    steps: [],
    durationMs: 0,
  });
  legacyReadConfigFileSnapshot.mockReset().mockResolvedValue({
    path: "/tmp/gensparx.json",
    exists: false,
    raw: null,
    parsed: {},
    valid: true,
    config: {},
    issues: [],
    legacyIssues: [],
  });
  createConfigIO.mockReset().mockImplementation(() => ({
    readConfigFileSnapshot: legacyReadConfigFileSnapshot,
  }));
  runExec.mockReset().mockResolvedValue({ stdout: "", stderr: "" });
  runCommandWithTimeout.mockReset().mockResolvedValue({
    stdout: "",
    stderr: "",
    code: 0,
    signal: null,
    killed: false,
  });
  ensureAuthProfileStore.mockReset().mockReturnValue({ version: 1, profiles: {} });
  migrateLegacyConfig.mockReset().mockImplementation((raw: unknown) => ({
    config: raw as Record<string, unknown>,
    changes: ["Moved routing.allowFrom → channels.whatsapp.allowFrom."],
  }));
  findLegacyGatewayServices.mockReset().mockResolvedValue([]);
  uninstallLegacyGatewayServices.mockReset().mockResolvedValue([]);
  findExtraGatewayServices.mockReset().mockResolvedValue([]);
  renderGatewayServiceCleanupHints.mockReset().mockReturnValue(["cleanup"]);
  resolveGatewayProgramArguments.mockReset().mockResolvedValue({
    programArguments: ["node", "cli", "gateway", "--port", "18789"],
  });
  serviceInstall.mockReset().mockResolvedValue(undefined);
  serviceIsLoaded.mockReset().mockResolvedValue(false);
  serviceStop.mockReset().mockResolvedValue(undefined);
  serviceRestart.mockReset().mockResolvedValue(undefined);
  serviceUninstall.mockReset().mockResolvedValue(undefined);
  callGateway.mockReset().mockRejectedValue(new Error("gateway closed"));

  originalIsTTY = process.stdin.isTTY;
  setStdinTty(true);
  originalStateDir = process.env.GENSPARX_STATE_DIR;
  originalUpdateInProgress = process.env.GENSPARX_UPDATE_IN_PROGRESS;
  process.env.GENSPARX_UPDATE_IN_PROGRESS = "1";
  tempStateDir = fs.mkdtempSync(path.join(os.tmpdir(), "gensparx-doctor-state-"));
  process.env.GENSPARX_STATE_DIR = tempStateDir;
  fs.mkdirSync(path.join(tempStateDir, "agents", "main", "sessions"), {
    recursive: true,
  });
  fs.mkdirSync(path.join(tempStateDir, "credentials"), { recursive: true });
});

afterEach(() => {
  setStdinTty(originalIsTTY);
  if (originalStateDir === undefined) {
    delete process.env.GENSPARX_STATE_DIR;
  } else {
    process.env.GENSPARX_STATE_DIR = originalStateDir;
  }
  if (originalUpdateInProgress === undefined) {
    delete process.env.GENSPARX_UPDATE_IN_PROGRESS;
  } else {
    process.env.GENSPARX_UPDATE_IN_PROGRESS = originalUpdateInProgress;
  }
  if (tempStateDir) {
    fs.rmSync(tempStateDir, { recursive: true, force: true });
    tempStateDir = undefined;
  }
});

const readConfigFileSnapshot = vi.fn();
const confirm = vi.fn().mockResolvedValue(true);
const select = vi.fn().mockResolvedValue("node");
const note = vi.fn();
const writeConfigFile = vi.fn().mockResolvedValue(undefined);
const resolveGenSparxPackageRoot = vi.fn().mockResolvedValue(null);
const runGatewayUpdate = vi.fn().mockResolvedValue({
  status: "skipped",
  mode: "unknown",
  steps: [],
  durationMs: 0,
});
const migrateLegacyConfig = vi.fn((raw: unknown) => ({
  config: raw as Record<string, unknown>,
  changes: ["Moved routing.allowFrom → channels.whatsapp.allowFrom."],
}));

const runExec = vi.fn().mockResolvedValue({ stdout: "", stderr: "" });
const runCommandWithTimeout = vi.fn().mockResolvedValue({
  stdout: "",
  stderr: "",
  code: 0,
  signal: null,
  killed: false,
});

const ensureAuthProfileStore = vi.fn().mockReturnValue({ version: 1, profiles: {} });

const legacyReadConfigFileSnapshot = vi.fn().mockResolvedValue({
  path: "/tmp/gensparx.json",
  exists: false,
  raw: null,
  parsed: {},
  valid: true,
  config: {},
  issues: [],
  legacyIssues: [],
});
const createConfigIO = vi.fn(() => ({
  readConfigFileSnapshot: legacyReadConfigFileSnapshot,
}));

const findLegacyGatewayServices = vi.fn().mockResolvedValue([]);
const uninstallLegacyGatewayServices = vi.fn().mockResolvedValue([]);
const findExtraGatewayServices = vi.fn().mockResolvedValue([]);
const renderGatewayServiceCleanupHints = vi.fn().mockReturnValue(["cleanup"]);
const resolveGatewayProgramArguments = vi.fn().mockResolvedValue({
  programArguments: ["node", "cli", "gateway", "--port", "18789"],
});
const serviceInstall = vi.fn().mockResolvedValue(undefined);
const serviceIsLoaded = vi.fn().mockResolvedValue(false);
const serviceStop = vi.fn().mockResolvedValue(undefined);
const serviceRestart = vi.fn().mockResolvedValue(undefined);
const serviceUninstall = vi.fn().mockResolvedValue(undefined);
const callGateway = vi.fn().mockRejectedValue(new Error("gateway closed"));

vi.mock("@clack/prompts", () => ({
  confirm,
  intro: vi.fn(),
  note,
  outro: vi.fn(),
  select,
}));

vi.mock("../agents/skills-status.js", () => ({
  buildWorkspaceSkillStatus: () => ({ skills: [] }),
}));

vi.mock("../plugins/loader.js", () => ({
  loadGenSparxPlugins: () => ({ plugins: [], diagnostics: [] }),
}));

vi.mock("../config/config.js", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    CONFIG_PATH: "/tmp/gensparx.json",
    createConfigIO,
    readConfigFileSnapshot,
    writeConfigFile,
    migrateLegacyConfig,
  };
});

vi.mock("../daemon/legacy.js", () => ({
  findLegacyGatewayServices,
  uninstallLegacyGatewayServices,
}));

vi.mock("../daemon/inspect.js", () => ({
  findExtraGatewayServices,
  renderGatewayServiceCleanupHints,
}));

vi.mock("../daemon/program-args.js", () => ({
  resolveGatewayProgramArguments,
}));

vi.mock("../gateway/call.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../gateway/call.js")>();
  return {
    ...actual,
    callGateway,
  };
});

vi.mock("../process/exec.js", () => ({
  runExec,
  runCommandWithTimeout,
}));

vi.mock("../infra/gensparx-root.js", () => ({
  resolveGenSparxPackageRoot,
}));

vi.mock("../infra/update-runner.js", () => ({
  runGatewayUpdate,
  serviceInstall,
  serviceIsLoaded,
  uninstallLegacyGatewayServices,
  writeConfigFile,
} from "./doctor.e2e-harness.js";
import "./doctor.fast-path-mocks.js";

const DOCTOR_MIGRATION_TIMEOUT_MS = process.platform === "win32" ? 60_000 : 45_000;
const { doctorCommand } = await import("./doctor.js");

describe("doctor command", () => {
  it("migrates routing.allowFrom to channels.whatsapp.allowFrom", { timeout: 60_000 }, async () => {
    readConfigFileSnapshot.mockResolvedValue({
      path: "/tmp/gensparx.json",
      exists: true,
      raw: "{}",
      parsed: { routing: { allowFrom: ["+15555550123"] } },
      valid: false,
      issues: [{ path: "routing.allowFrom", message: "legacy" }],
      legacyIssues: [{ path: "routing.allowFrom", message: "legacy" }],
    });

    const runtime = createDoctorRuntime();

    migrateLegacyConfig.mockReturnValue({
      config: {
        channels: { whatsapp: { allowFrom: ["+15555550123"] } },
        gateway: { remote: { token: "legacy-remote-token" } },
      },
      changes: ["Moved routing.allowFrom → channels.whatsapp.allowFrom."],
    });

    await doctorCommand(runtime, { repair: true });

    expect(writeConfigFile).toHaveBeenCalledTimes(1);
    const written = writeConfigFile.mock.calls[0]?.[0] as Record<string, unknown>;
    const gateway = (written.gateway as Record<string, unknown>) ?? {};
    const auth = gateway.auth as Record<string, unknown> | undefined;
    const remote = gateway.remote as Record<string, unknown>;
    const channels = (written.channels as Record<string, unknown>) ?? {};

    expect(channels.whatsapp).toEqual(
      expect.objectContaining({
        allowFrom: ["+15555550123"],
      }),
    );
    expect(written.routing).toBeUndefined();
    expect(remote.token).toBe("legacy-remote-token");
    expect(auth).toBeUndefined();
  });

  it("skips legacy gateway services migration", { timeout: 60_000 }, async () => {
    readConfigFileSnapshot.mockResolvedValue({
      path: "/tmp/gensparx.json",
      exists: true,
      raw: "{}",
      parsed: {},
      valid: true,
      config: {},
      issues: [],
      legacyIssues: [],
    });

    findLegacyGatewayServices.mockResolvedValueOnce([
      {
        platform: "darwin",
        label: "com.steipete.gensparx.gateway",
        detail: "loaded",
      },
    ]);
    serviceIsLoaded.mockResolvedValueOnce(false);
    serviceInstall.mockClear();

      await doctorCommand(createDoctorRuntime());

      expect(uninstallLegacyGatewayServices).not.toHaveBeenCalled();
      expect(serviceInstall).not.toHaveBeenCalled();
    },
  );

  it("offers to update first for git checkouts", async () => {
    delete process.env.GENSPARX_UPDATE_IN_PROGRESS;

    const root = "/tmp/gensparx";
    resolveGenSparxPackageRoot.mockResolvedValueOnce(root);
    runCommandWithTimeout.mockResolvedValueOnce({
      stdout: `${root}\n`,
      stderr: "",
      code: 0,
      signal: null,
      killed: false,
    });
    runGatewayUpdate.mockResolvedValueOnce({
      status: "ok",
      mode: "git",
      root,
      steps: [],
      durationMs: 1,
    });

    readConfigFileSnapshot.mockResolvedValue({
      path: "/tmp/gensparx.json",
      exists: true,
      raw: "{}",
      parsed: {},
      valid: true,
      config: {},
      issues: [],
      legacyIssues: [],
    });

    await doctorCommand(createDoctorRuntime());

    expect(runGatewayUpdate).toHaveBeenCalledWith(expect.objectContaining({ cwd: root }));
    expect(readConfigFileSnapshot).not.toHaveBeenCalled();
    expect(note.mock.calls.some((call) => hasNoteTitle(call, "Update result"))).toBe(true);
  });
});
