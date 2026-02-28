import { describe, expect, it } from "vitest";
import type { AuthProfileStore } from "./auth-profiles.js";
import { requireApiKey, resolveAwsSdkEnvVarName, resolveModelAuthMode } from "./model-auth.js";

describe("resolveAwsSdkEnvVarName", () => {
  it("prefers bearer token over access keys and profile", () => {
    const env = {
      AWS_BEARER_TOKEN_BEDROCK: "bearer",
      AWS_ACCESS_KEY_ID: "access",
      AWS_SECRET_ACCESS_KEY: "secret",
      AWS_PROFILE: "default",
    } as NodeJS.ProcessEnv;

describe("getApiKeyForModel", () => {
  it("migrates legacy oauth.json into auth-profiles.json", async () => {
    const previousStateDir = process.env.GENSPARX_STATE_DIR;
    const previousAgentDir = process.env.GENSPARX_AGENT_DIR;
    const previousPiAgentDir = process.env.PI_CODING_AGENT_DIR;
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-oauth-"));

    try {
      process.env.GENSPARX_STATE_DIR = tempDir;
      process.env.GENSPARX_AGENT_DIR = path.join(tempDir, "agent");
      process.env.PI_CODING_AGENT_DIR = process.env.GENSPARX_AGENT_DIR;

      const oauthDir = path.join(tempDir, "credentials");
      await fs.mkdir(oauthDir, { recursive: true, mode: 0o700 });
      await fs.writeFile(
        path.join(oauthDir, "oauth.json"),
        `${JSON.stringify({ "openai-codex": oauthFixture }, null, 2)}\n`,
        "utf8",
      );

      vi.resetModules();
      const { ensureAuthProfileStore } = await import("./auth-profiles.js");
      const { getApiKeyForModel } = await import("./model-auth.js");

      const model = {
        id: "codex-mini-latest",
        provider: "openai-codex",
        api: "openai-codex-responses",
      } as Model<Api>;

      const store = ensureAuthProfileStore(process.env.GENSPARX_AGENT_DIR, {
        allowKeychainPrompt: false,
      });
      const apiKey = await getApiKeyForModel({
        model,
        cfg: {
          auth: {
            profiles: {
              "openai-codex:default": {
                provider: "openai-codex",
                mode: "oauth",
              },
            },
          },
        },
        store,
        agentDir: process.env.GENSPARX_AGENT_DIR,
      });
      expect(apiKey.apiKey).toBe(oauthFixture.access);

      const authProfiles = await fs.readFile(
        path.join(tempDir, "agent", "auth-profiles.json"),
        "utf8",
      );
      const authData = JSON.parse(authProfiles) as Record<string, unknown>;
      expect(authData.profiles).toMatchObject({
        "openai-codex:default": {
          type: "oauth",
          provider: "openai-codex",
          access: oauthFixture.access,
          refresh: oauthFixture.refresh,
        },
      });
    } finally {
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
      await fs.rm(tempDir, { recursive: true, force: true });
    }
  });

  it("suggests openai-codex when only Codex OAuth is configured", async () => {
    const previousStateDir = process.env.GENSPARX_STATE_DIR;
    const previousAgentDir = process.env.GENSPARX_AGENT_DIR;
    const previousPiAgentDir = process.env.PI_CODING_AGENT_DIR;
    const previousOpenAiKey = process.env.OPENAI_API_KEY;
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-auth-"));

    try {
      delete process.env.OPENAI_API_KEY;
      process.env.GENSPARX_STATE_DIR = tempDir;
      process.env.GENSPARX_AGENT_DIR = path.join(tempDir, "agent");
      process.env.PI_CODING_AGENT_DIR = process.env.GENSPARX_AGENT_DIR;

      const authProfilesPath = path.join(tempDir, "agent", "auth-profiles.json");
      await fs.mkdir(path.dirname(authProfilesPath), {
        recursive: true,
        mode: 0o700,
      });
      await fs.writeFile(
        authProfilesPath,
        `${JSON.stringify(
          {
            version: 1,
            profiles: {
              "openai-codex:default": {
                type: "oauth",
                provider: "openai-codex",
                ...oauthFixture,
              },
            },
          },
          null,
          2,
        )}\n`,
        "utf8",
      );

      vi.resetModules();
      const { resolveApiKeyForProvider } = await import("./model-auth.js");

      let error: unknown = null;
      try {
        await resolveApiKeyForProvider({ provider: "openai" });
      } catch (err) {
        error = err;
      }
      expect(String(error)).toContain("openai-codex/gpt-5.2");
    } finally {
      if (previousOpenAiKey === undefined) {
        delete process.env.OPENAI_API_KEY;
      } else {
        process.env.OPENAI_API_KEY = previousOpenAiKey;
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
      await fs.rm(tempDir, { recursive: true, force: true });
    }
  });

  it("uses profile when no bearer token or access keys exist", () => {
    const env = {
      AWS_PROFILE: "default",
    } as NodeJS.ProcessEnv;

    expect(resolveAwsSdkEnvVarName(env)).toBe("AWS_PROFILE");
  });

  it("returns undefined when no AWS auth env is set", () => {
    expect(resolveAwsSdkEnvVarName({} as NodeJS.ProcessEnv)).toBeUndefined();
  });
});

describe("resolveModelAuthMode", () => {
  it("returns mixed when provider has both token and api key profiles", () => {
    const store: AuthProfileStore = {
      version: 1,
      profiles: {
        "openai:token": {
          type: "token",
          provider: "openai",
          token: "token-value",
        },
        "openai:key": {
          type: "api_key",
          provider: "openai",
          key: "api-key",
        },
      },
    };

    expect(resolveModelAuthMode("openai", undefined, store)).toBe("mixed");
  });

  it("returns aws-sdk when provider auth is overridden", () => {
    expect(
      resolveModelAuthMode(
        "amazon-bedrock",
        {
          models: {
            providers: {
              "amazon-bedrock": {
                baseUrl: "https://bedrock-runtime.us-east-1.amazonaws.com",
                models: [],
                auth: "aws-sdk",
              },
            },
          },
        },
        { version: 1, profiles: {} },
      ),
    ).toBe("aws-sdk");
  });

  it("returns aws-sdk for bedrock alias without explicit auth override", () => {
    expect(resolveModelAuthMode("bedrock", undefined, { version: 1, profiles: {} })).toBe(
      "aws-sdk",
    );
  });

  it("returns aws-sdk for aws-bedrock alias without explicit auth override", () => {
    expect(resolveModelAuthMode("aws-bedrock", undefined, { version: 1, profiles: {} })).toBe(
      "aws-sdk",
    );
  });
});

describe("requireApiKey", () => {
  it("normalizes line breaks in resolved API keys", () => {
    const key = requireApiKey(
      {
        apiKey: "\n sk-test-abc\r\n",
        source: "env: OPENAI_API_KEY",
        mode: "api-key",
      },
      "openai",
    );

    expect(key).toBe("sk-test-abc");
  });

  it("throws when no API key is present", () => {
    expect(() =>
      requireApiKey(
        {
          source: "env: OPENAI_API_KEY",
          mode: "api-key",
        },
        "openai",
      ),
    ).toThrow('No API key resolved for provider "openai"');
  });
});
