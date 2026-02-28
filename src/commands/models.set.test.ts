import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

const readConfigFileSnapshot = vi.fn();
const writeConfigFile = vi.fn().mockResolvedValue(undefined);
const loadConfig = vi.fn().mockReturnValue({});

vi.mock("../config/config.js", () => ({
  CONFIG_PATH: "/tmp/gensparx.json",
  readConfigFileSnapshot,
  writeConfigFile,
  loadConfig,
}));

function mockConfigSnapshot(config: Record<string, unknown> = {}) {
  readConfigFileSnapshot.mockResolvedValue({
    path: "/tmp/openclaw.json",
    exists: true,
    raw: "{}",
    parsed: {},
    valid: true,
    config,
    issues: [],
    legacyIssues: [],
  });
}

function makeRuntime() {
  return { log: vi.fn(), error: vi.fn(), exit: vi.fn() };
}

function getWrittenConfig() {
  return writeConfigFile.mock.calls[0]?.[0] as Record<string, unknown>;
}

function expectWrittenPrimaryModel(model: string) {
  expect(writeConfigFile).toHaveBeenCalledTimes(1);
  const written = getWrittenConfig();
  expect(written.agents).toEqual({
    defaults: {
      model: { primary: model },
      models: { [model]: {} },
    },
  });
}

let modelsSetCommand: typeof import("./models/set.js").modelsSetCommand;
let modelsFallbacksAddCommand: typeof import("./models/fallbacks.js").modelsFallbacksAddCommand;

describe("models set + fallbacks", () => {
  beforeAll(async () => {
    ({ modelsSetCommand } = await import("./models/set.js"));
    ({ modelsFallbacksAddCommand } = await import("./models/fallbacks.js"));
  });

  beforeEach(() => {
    readConfigFileSnapshot.mockClear();
    writeConfigFile.mockClear();
  });

  it("normalizes z.ai provider in models set", async () => {
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

    const runtime = { log: vi.fn(), error: vi.fn(), exit: vi.fn() };
    const { modelsSetCommand } = await import("./models/set.js");

    await modelsSetCommand("z.ai/glm-4.7", runtime);

    expectWrittenPrimaryModel("zai/glm-4.7");
  });

  it("normalizes z-ai provider in models fallbacks add", async () => {
    readConfigFileSnapshot.mockResolvedValue({
      path: "/tmp/gensparx.json",
      exists: true,
      raw: "{}",
      parsed: {},
      valid: true,
      config: { agents: { defaults: { model: { fallbacks: [] } } } },
      issues: [],
      legacyIssues: [],
    });

    const runtime = { log: vi.fn(), error: vi.fn(), exit: vi.fn() };
    const { modelsFallbacksAddCommand } = await import("./models/fallbacks.js");

    await modelsFallbacksAddCommand("z-ai/glm-4.7", runtime);

    expect(writeConfigFile).toHaveBeenCalledTimes(1);
    const written = getWrittenConfig();
    expect(written.agents).toEqual({
      defaults: {
        model: { fallbacks: ["zai/glm-4.7"] },
        models: { "zai/glm-4.7": {} },
      },
    });
  });

  it("normalizes provider casing in models set", async () => {
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

    await modelsFallbacksAddCommand("anthropic/claude-opus-4-6", runtime);

    expect(writeConfigFile).toHaveBeenCalledTimes(1);
    const written = getWrittenConfig();
    expect(written.agents).toEqual({
      defaults: {
        model: {
          primary: "openai/gpt-4.1-mini",
          fallbacks: ["anthropic/claude-opus-4-6"],
        },
        models: { "anthropic/claude-opus-4-6": {} },
      },
    });
  });

  it("normalizes provider casing in models set", async () => {
    mockConfigSnapshot({});
    const runtime = makeRuntime();

    await modelsSetCommand("Z.AI/glm-4.7", runtime);

    expectWrittenPrimaryModel("zai/glm-4.7");
  });

  it("rewrites string defaults.model to object form when setting primary", async () => {
    mockConfigSnapshot({ agents: { defaults: { model: "openai/gpt-4.1-mini" } } });
    const runtime = makeRuntime();

    await modelsSetCommand("anthropic/claude-opus-4-6", runtime);

    expect(writeConfigFile).toHaveBeenCalledTimes(1);
    const written = getWrittenConfig();
    expect(written.agents).toEqual({
      defaults: {
        model: { primary: "anthropic/claude-opus-4-6" },
        models: { "anthropic/claude-opus-4-6": {} },
      },
    });
  });
});
