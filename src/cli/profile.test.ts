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

  it("rejects combining --dev with --profile (dev first)", () => {
    const res = parseCliProfileArgs(["node", "gensparx", "--dev", "--profile", "work", "status"]);
    expect(res.ok).toBe(false);
  });

  it("rejects combining --dev with --profile (profile first)", () => {
    const res = parseCliProfileArgs(["node", "gensparx", "--profile", "work", "--dev", "status"]);
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
    const expectedStateDir = path.join("/home/peter", ".gensparx-dev");
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
});

describe("formatCliCommand", () => {
  it("returns command unchanged when no profile is set", () => {
    expect(formatCliCommand("gensparx doctor --fix", {})).toBe("gensparx doctor --fix");
  });

  it("returns command unchanged when profile is default", () => {
    expect(formatCliCommand("gensparx doctor --fix", { GENSPARX_PROFILE: "default" })).toBe(
      "gensparx doctor --fix",
    );
  });

  it("returns command unchanged when profile is Default (case-insensitive)", () => {
    expect(formatCliCommand("gensparx doctor --fix", { GENSPARX_PROFILE: "Default" })).toBe(
      "gensparx doctor --fix",
    );
  });

  it("returns command unchanged when profile is invalid", () => {
    expect(formatCliCommand("gensparx doctor --fix", { GENSPARX_PROFILE: "bad profile" })).toBe(
      "gensparx doctor --fix",
    );
  });

  it("returns command unchanged when --profile is already present", () => {
    expect(
      formatCliCommand("gensparx --profile work doctor --fix", { GENSPARX_PROFILE: "work" }),
    ).toBe("gensparx --profile work doctor --fix");
  });

  it("returns command unchanged when --dev is already present", () => {
    expect(formatCliCommand("gensparx --dev doctor", { GENSPARX_PROFILE: "dev" })).toBe(
      "gensparx --dev doctor",
    );
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
