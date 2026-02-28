import path from "node:path";
import { describe, expect, it } from "vitest";
import { resolveGatewayStateDir } from "./paths.js";

describe("resolveGatewayStateDir", () => {
  it("uses the default state dir when no overrides are set", () => {
    const env = { HOME: "/Users/test" };
    expect(resolveGatewayStateDir(env)).toBe(path.join("/Users/test", ".gensparx"));
  });

  it("appends the profile suffix when set", () => {
    const env = { HOME: "/Users/test", GENSPARX_PROFILE: "rescue" };
    expect(resolveGatewayStateDir(env)).toBe(path.join("/Users/test", ".gensparx-rescue"));
  });

  it("treats default profiles as the base state dir", () => {
    const env = { HOME: "/Users/test", GENSPARX_PROFILE: "Default" };
    expect(resolveGatewayStateDir(env)).toBe(path.join("/Users/test", ".gensparx"));
  });

  it("uses GENSPARX_STATE_DIR when provided", () => {
    const env = { HOME: "/Users/test", GENSPARX_STATE_DIR: "/var/lib/gensparx" };
    expect(resolveGatewayStateDir(env)).toBe(path.resolve("/var/lib/gensparx"));
  });

  it("expands ~ in GENSPARX_STATE_DIR", () => {
    const env = { HOME: "/Users/test", GENSPARX_STATE_DIR: "~/gensparx-state" };
    expect(resolveGatewayStateDir(env)).toBe(path.resolve("/Users/test/gensparx-state"));
  });

  it("preserves Windows absolute paths without HOME", () => {
    const env = { GENSPARX_STATE_DIR: "C:\\State.gensparx" };
    expect(resolveGatewayStateDir(env)).toBe("C:\\State.gensparx");
  });
});
