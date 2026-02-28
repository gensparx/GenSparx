import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { stripAnsi } from "../terminal/ansi.js";

vi.doUnmock("./doctor-state-integrity.js");

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

function normalizeText(value: unknown): string {
  if (typeof value === "string") {
    return stripAnsi(value).replace(/\s+/g, " ").trim();
  }
  if (value == null) {
    return "";
  }
  try {
    return stripAnsi(JSON.stringify(value)).replace(/\s+/g, " ").trim();
  } catch {
    return "";
  }
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
}));

vi.mock("../agents/auth-profiles.js", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    ensureAuthProfileStore,
  };
});

vi.mock("../daemon/service.js", () => ({
  resolveGatewayService: () => ({
    label: "LaunchAgent",
    loadedText: "loaded",
    notLoadedText: "not loaded",
    install: serviceInstall,
    uninstall: serviceUninstall,
    stop: serviceStop,
    restart: serviceRestart,
    isLoaded: serviceIsLoaded,
    readCommand: vi.fn(),
    readRuntime: vi.fn().mockResolvedValue({ status: "running" }),
  }),
}));

vi.mock("../pairing/pairing-store.js", () => ({
  readChannelAllowFromStore: vi.fn().mockResolvedValue([]),
  upsertChannelPairingRequest: vi.fn().mockResolvedValue({ code: "000000", created: false }),
}));

vi.mock("../telegram/token.js", () => ({
  resolveTelegramToken: vi.fn(() => ({ token: "", source: "none" })),
}));

vi.mock("../runtime.js", () => ({
  defaultRuntime: {
    log: () => {},
    error: () => {},
    exit: () => {
      throw new Error("exit");
    },
  },
}));

vi.mock("../utils.js", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    resolveUserPath: (value: string) => value,
    sleep: vi.fn(),
  };
});

vi.mock("./health.js", () => ({
  healthCommand: vi.fn().mockResolvedValue(undefined),
}));

vi.mock("./onboard-helpers.js", () => ({
  applyWizardMetadata: (cfg: Record<string, unknown>) => cfg,
  DEFAULT_WORKSPACE: "/tmp",
  guardCancel: (value: unknown) => value,
  printWizardHeader: vi.fn(),
  randomToken: vi.fn(() => "test-gateway-token"),
}));

vi.mock("./doctor-state-migrations.js", () => ({
  autoMigrateLegacyStateDir: vi.fn().mockResolvedValue({
    migrated: false,
    skipped: false,
    changes: [],
    warnings: [],
  }),
  detectLegacyStateMigrations: vi.fn().mockResolvedValue({
    targetAgentId: "main",
    targetMainKey: "main",
    targetScope: undefined,
    stateDir: "/tmp/state",
    oauthDir: "/tmp/oauth",
    sessions: {
      legacyDir: "/tmp/state/sessions",
      legacyStorePath: "/tmp/state/sessions/sessions.json",
      targetDir: "/tmp/state/agents/main/sessions",
      targetStorePath: "/tmp/state/agents/main/sessions/sessions.json",
      hasLegacy: false,
      legacyKeys: [],
    },
    agentDir: {
      legacyDir: "/tmp/state/agent",
      targetDir: "/tmp/state/agents/main/agent",
      hasLegacy: false,
    },
    whatsappAuth: {
      legacyDir: "/tmp/oauth",
      targetDir: "/tmp/oauth/whatsapp/default",
      hasLegacy: false,
    },
    preview: [],
  }),
  runLegacyStateMigrations: vi.fn().mockResolvedValue({
    changes: [],
    warnings: [],
  }),
}));

vi.mock("./doctor-update.js", () => ({
  maybeOfferUpdateBeforeDoctor: vi.fn().mockResolvedValue({ handled: false }),
}));

describe("doctor command", () => {
  beforeAll(async () => {
    ({ doctorCommand } = await import("./doctor.js"));
  });

  it("warns when the state directory is missing", async () => {
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

    const missingDir = fs.mkdtempSync(path.join(os.tmpdir(), "gensparx-missing-state-"));
    fs.rmSync(missingDir, { recursive: true, force: true });
    process.env.GENSPARX_STATE_DIR = missingDir;
    note.mockClear();

    await doctorCommand(createDoctorRuntime(), {
      nonInteractive: true,
      workspaceSuggestions: false,
    });

    const stateNote = note.mock.calls.find((call) =>
      normalizeText(call[1]).includes("State integrity"),
    );
    expect(stateNote).toBeTruthy();
    expect(normalizeText(stateNote?.[0])).toContain("CRITICAL");
  }, 30_000);

  it("warns about opencode provider overrides", async () => {
    readConfigFileSnapshot.mockResolvedValue({
      path: "/tmp/gensparx.json",
      exists: true,
      raw: "{}",
      parsed: {},
      valid: true,
      config: {
        models: {
          providers: {
            opencode: {
              api: "openai-completions",
              baseUrl: "https://opencode.ai/zen/v1",
            },
          },
        },
      },
    });

    await doctorCommand(createDoctorRuntime(), {
      nonInteractive: true,
      workspaceSuggestions: false,
    });

    const warned = note.mock.calls.some(
      ([message, title]) =>
        normalizeText(title).includes("OpenCode Zen") &&
        normalizeText(message).includes("models.providers.opencode"),
    );
    expect(warned).toBe(true);
  });

  it("skips gateway auth warning when GENSPARX_GATEWAY_TOKEN is set", async () => {
    readConfigFileSnapshot.mockResolvedValue({
      path: "/tmp/gensparx.json",
      exists: true,
      raw: "{}",
      parsed: {},
      valid: true,
      config: {
        gateway: { mode: "local" },
      },
    });

    const prevToken = process.env.GENSPARX_GATEWAY_TOKEN;
    process.env.GENSPARX_GATEWAY_TOKEN = "env-token-1234567890";
    note.mockClear();

    try {
      await doctorCommand(createDoctorRuntime(), {
        nonInteractive: true,
        workspaceSuggestions: false,
      });
    } finally {
      if (prevToken === undefined) {
        delete process.env.GENSPARX_GATEWAY_TOKEN;
      } else {
        process.env.GENSPARX_GATEWAY_TOKEN = prevToken;
      }
    }

    const warned = note.mock.calls.some(([message]) =>
      String(message).includes("Gateway auth is off or missing a token"),
    );
    expect(warned).toBe(false);
  });
});
