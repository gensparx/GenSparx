import { afterEach, describe, expect, it, vi } from "vitest";
import { resolveAgentModelPrimaryValue } from "../config/model-input.js";
import type { WizardPrompter } from "../wizard/prompts.js";
import { applyAuthChoice } from "./auth-choice.js";
import {
  createAuthTestLifecycle,
  createExitThrowingRuntime,
  createWizardPrompter,
  readAuthProfilesForAgent,
  requireOpenClawAgentDir,
  setupAuthTestEnv,
} from "./test-wizard-helpers.js";

const noopAsync = async () => {};
const noop = () => {};
const authProfilePathFor = (agentDir: string) => path.join(agentDir, "auth-profiles.json");
const requireAgentDir = () => {
  const agentDir = process.env.GENSPARX_AGENT_DIR;
  if (!agentDir) {
    throw new Error("GENSPARX_AGENT_DIR not set");
  }
  return agentDir;
};

describe("applyAuthChoice (moonshot)", () => {
  const previousStateDir = process.env.GENSPARX_STATE_DIR;
  const previousAgentDir = process.env.GENSPARX_AGENT_DIR;
  const previousPiAgentDir = process.env.PI_CODING_AGENT_DIR;
  const previousMoonshotKey = process.env.MOONSHOT_API_KEY;
  let tempStateDir: string | null = null;

  afterEach(async () => {
    if (tempStateDir) {
      await fs.rm(tempStateDir, { recursive: true, force: true });
      tempStateDir = null;
    }
    if (previousStateDir === undefined) {
      delete process.env.GENSPARX_STATE_DIR;
    } else {
      process.env.GENSPARX_STATE_DIR = previousStateDir;
    }
    if (previousAgentDir === undefined) {
      delete process.env.GENSPARX_AGENT_DIR;
    } else {
      process.env.GENSPARX_AGENT_DIR = previousAgentDir;
    }
    if (previousPiAgentDir === undefined) {
      delete process.env.PI_CODING_AGENT_DIR;
    } else {
      process.env.PI_CODING_AGENT_DIR = previousPiAgentDir;
    }
    if (previousMoonshotKey === undefined) {
      delete process.env.MOONSHOT_API_KEY;
    } else {
      process.env.MOONSHOT_API_KEY = previousMoonshotKey;
    }
  });

  it("keeps the .cn baseUrl when setDefaultModel is false", async () => {
    tempStateDir = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-auth-"));
    process.env.GENSPARX_STATE_DIR = tempStateDir;
    process.env.GENSPARX_AGENT_DIR = path.join(tempStateDir, "agent");
    process.env.PI_CODING_AGENT_DIR = process.env.GENSPARX_AGENT_DIR;
    delete process.env.MOONSHOT_API_KEY;

    const { result, text } = await runMoonshotCnFlow({
      config: {
        agents: {
          defaults: {
            model: { primary: "anthropic/claude-opus-4-5" },
          },
        },
      },
      setDefaultModel: false,
    });

    expect(text).toHaveBeenCalledWith(
      expect.objectContaining({ message: "Enter Moonshot API key (.cn)" }),
    );
    expect(resolveAgentModelPrimaryValue(result.config.agents?.defaults?.model)).toBe(
      "anthropic/claude-opus-4-5",
    );
    expect(result.config.models?.providers?.moonshot?.baseUrl).toBe("https://api.moonshot.cn/v1");
    expect(result.config.models?.providers?.moonshot?.models?.[0]?.input).toContain("image");
    expect(result.agentModelOverride).toBe("moonshot/kimi-k2.5");

    const parsed = await readAuthProfiles();
    expect(parsed.profiles?.["moonshot:default"]?.key).toBe("sk-moonshot-cn-test");
  });

  it("sets the default model when setDefaultModel is true", async () => {
    tempStateDir = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-auth-"));
    process.env.GENSPARX_STATE_DIR = tempStateDir;
    process.env.GENSPARX_AGENT_DIR = path.join(tempStateDir, "agent");
    process.env.PI_CODING_AGENT_DIR = process.env.GENSPARX_AGENT_DIR;
    delete process.env.MOONSHOT_API_KEY;

    const { result } = await runMoonshotCnFlow({
      config: {},
      setDefaultModel: true,
    });

    expect(resolveAgentModelPrimaryValue(result.config.agents?.defaults?.model)).toBe(
      "moonshot/kimi-k2.5",
    );
    expect(result.config.models?.providers?.moonshot?.baseUrl).toBe("https://api.moonshot.cn/v1");
    expect(result.config.models?.providers?.moonshot?.models?.[0]?.input).toContain("image");
    expect(result.agentModelOverride).toBeUndefined();

    const parsed = await readAuthProfiles();
    expect(parsed.profiles?.["moonshot:default"]?.key).toBe("sk-moonshot-cn-test");
  });
});
