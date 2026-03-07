import path from "node:path";
import { describe, expect, it } from "vitest";
import { formatCliCommand } from "./command-format.js";
import { applyCliProfileEnv, parseCliProfileArgs } from "./profile.js";

describe("parseCliProfileArgs", () => {
  it("leaves gateway --dev for subcommands", () => {
    const res = parseCliProfileArgs([
      "node",
      "gensparx",
      "gateway",
      "--dev",
      "--allow-unconfigured",
    ]);
    if (!res.ok) {
      throw new Error(res.error);
    }
    expect(res.profile).toBeNull();
    expect(res.argv).toEqual(["node", "gensparx", "gateway", "--dev", "--allow-unconfigured"]);
  });

  it("still accepts global --dev before subcommand", () => {
    const res = parseCliProfileArgs(["node", "gensparx", "--dev", "gateway"]);
    if (!res.ok) {
      throw new Error(res.error);
    }
    expect(res.profile).toBe("dev");
    expect(res.argv).toEqual(["node", "gensparx", "gateway"]);
  });

  it("parses --profile value and strips it", () => {
    const res = parseCliProfileArgs(["node", "gensparx", "--profile", "work", "status"]);
    if (!res.ok) {
      throw new Error(res.error);
    }
    expect(res.profile).toBe("work");
    expect(res.argv).toEqual(["node", "gensparx", "status"]);
  });

  it("rejects missing profile value", () => {
    const res = parseCliProfileArgs(["node", "gensparx", "--profile"]);
    expect(res.ok).toBe(false);
  });

  it.each([
    ["--dev first", ["node", "gensparx", "--dev", "--profile", "work", "status"]],
    ["--profile first", ["node", "gensparx", "--profile", "work", "--dev", "status"]],
  ])("rejects combining --dev with --profile (%s)", (_name, argv) => {
    const res = parseCliProfileArgs(argv);
    expect(res.ok).toBe(false);
  });
});

describe("applyCliProfileEnv", () => {
  it("fills env defaults for dev profile", () => {
    const env: Record<string, string | undefined> = {};
    applyCliProfileEnv({
      profile: "dev",
      env,
      homedir: () => "/home/peter",
    });
    const expectedStateDir = path.join(path.resolve("/home/peter"), ".gensparx-dev");
    expect(env.GENSPARX_PROFILE).toBe("dev");
    expect(env.GENSPARX_STATE_DIR).toBe(expectedStateDir);
    expect(env.GENSPARX_CONFIG_PATH).toBe(path.join(expectedStateDir, "gensparx.json"));
    expect(env.GENSPARX_GATEWAY_PORT).toBe("19001");
  });

  it("does not override explicit env values", () => {
    const env: Record<string, string | undefined> = {
      GENSPARX_STATE_DIR: "/custom",
      GENSPARX_GATEWAY_PORT: "19099",
    };
    applyCliProfileEnv({
      profile: "dev",
      env,
      homedir: () => "/home/peter",
    });
    expect(env.GENSPARX_STATE_DIR).toBe("/custom");
    expect(env.GENSPARX_GATEWAY_PORT).toBe("19099");
    expect(env.GENSPARX_CONFIG_PATH).toBe(path.join("/custom", "gensparx.json"));
  });

  it("uses GENSPARX_HOME when deriving profile state dir", () => {
    const env: Record<string, string | undefined> = {
      GENSPARX_HOME: "/srv/gensparx-home",
      HOME: "/home/other",
    };
    applyCliProfileEnv({
      profile: "work",
      env,
      homedir: () => "/home/fallback",
    });

    const resolvedHome = path.resolve("/srv/gensparx-home");
    expect(env.GENSPARX_STATE_DIR).toBe(path.join(resolvedHome, ".gensparx-work"));
    expect(env.GENSPARX_CONFIG_PATH).toBe(
      path.join(resolvedHome, ".gensparx-work", "gensparx.json"),
    );
  });
});

describe("formatCliCommand", () => {
  it.each([
    {
      name: "no profile is set",
      cmd: "gensparx doctor --fix",
      env: {},
      expected: "gensparx doctor --fix",
    },
    {
      name: "profile is default",
      cmd: "gensparx doctor --fix",
      env: { GENSPARX_PROFILE: "default" },
      expected: "gensparx doctor --fix",
    },
    {
      name: "profile is Default (case-insensitive)",
      cmd: "gensparx doctor --fix",
      env: { GENSPARX_PROFILE: "Default" },
      expected: "gensparx doctor --fix",
    },
    {
      name: "profile is invalid",
      cmd: "gensparx doctor --fix",
      env: { GENSPARX_PROFILE: "bad profile" },
      expected: "gensparx doctor --fix",
    },
    {
      name: "--profile is already present",
      cmd: "gensparx --profile work doctor --fix",
      env: { GENSPARX_PROFILE: "work" },
      expected: "gensparx --profile work doctor --fix",
    },
    {
      name: "--dev is already present",
      cmd: "gensparx --dev doctor",
      env: { GENSPARX_PROFILE: "dev" },
      expected: "gensparx --dev doctor",
    },
  ])("returns command unchanged when $name", ({ cmd, env, expected }) => {
    expect(formatCliCommand(cmd, env)).toBe(expected);
  });

  it("inserts --profile flag when profile is set", () => {
    expect(formatCliCommand("gensparx doctor --fix", { GENSPARX_PROFILE: "work" })).toBe(
      "gensparx --profile work doctor --fix",
    );
  });

  it("trims whitespace from profile", () => {
    expect(formatCliCommand("gensparx doctor --fix", { GENSPARX_PROFILE: "  jbgensparx  " })).toBe(
      "gensparx --profile jbgensparx doctor --fix",
    );
  });

  it("handles command with no args after gensparx", () => {
    expect(formatCliCommand("gensparx", { GENSPARX_PROFILE: "test" })).toBe(
      "gensparx --profile test",
    );
  });

  it("handles pnpm wrapper", () => {
    expect(formatCliCommand("pnpm gensparx doctor", { GENSPARX_PROFILE: "work" })).toBe(
      "pnpm gensparx --profile work doctor",
    );
  });
});
