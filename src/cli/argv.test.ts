import { describe, expect, it } from "vitest";
import {
  buildParseArgv,
  getFlagValue,
  getCommandPath,
  getPrimaryCommand,
  getPositiveIntFlagValue,
  getVerboseFlag,
  hasHelpOrVersion,
  hasFlag,
  shouldMigrateState,
  shouldMigrateStateFromPath,
} from "./argv.js";

describe("argv helpers", () => {
  it("detects help/version flags", () => {
    expect(hasHelpOrVersion(["node", "gensparx", "--help"])).toBe(true);
    expect(hasHelpOrVersion(["node", "gensparx", "-V"])).toBe(true);
    expect(hasHelpOrVersion(["node", "gensparx", "status"])).toBe(false);
  });

  it("extracts command path ignoring flags and terminator", () => {
    expect(getCommandPath(["node", "gensparx", "status", "--json"], 2)).toEqual(["status"]);
    expect(getCommandPath(["node", "gensparx", "agents", "list"], 2)).toEqual(["agents", "list"]);
    expect(getCommandPath(["node", "gensparx", "status", "--", "ignored"], 2)).toEqual(["status"]);
  });

  it("returns primary command", () => {
    expect(getPrimaryCommand(["node", "gensparx", "agents", "list"])).toBe("agents");
    expect(getPrimaryCommand(["node", "gensparx"])).toBeNull();
  });

  it("parses boolean flags and ignores terminator", () => {
    expect(hasFlag(["node", "gensparx", "status", "--json"], "--json")).toBe(true);
    expect(hasFlag(["node", "gensparx", "--", "--json"], "--json")).toBe(false);
  });

  it("extracts flag values with equals and missing values", () => {
    expect(getFlagValue(["node", "gensparx", "status", "--timeout", "5000"], "--timeout")).toBe(
      "5000",
    );
    expect(getFlagValue(["node", "gensparx", "status", "--timeout=2500"], "--timeout")).toBe(
      "2500",
    );
    expect(getFlagValue(["node", "gensparx", "status", "--timeout"], "--timeout")).toBeNull();
    expect(getFlagValue(["node", "gensparx", "status", "--timeout", "--json"], "--timeout")).toBe(
      null,
    );
    expect(getFlagValue(["node", "gensparx", "--", "--timeout=99"], "--timeout")).toBeUndefined();
  });

  it("parses verbose flags", () => {
    expect(getVerboseFlag(["node", "gensparx", "status", "--verbose"])).toBe(true);
    expect(getVerboseFlag(["node", "gensparx", "status", "--debug"])).toBe(false);
    expect(getVerboseFlag(["node", "gensparx", "status", "--debug"], { includeDebug: true })).toBe(
      true,
    );
  });

  it("parses positive integer flag values", () => {
    expect(getPositiveIntFlagValue(["node", "gensparx", "status"], "--timeout")).toBeUndefined();
    expect(
      getPositiveIntFlagValue(["node", "gensparx", "status", "--timeout"], "--timeout"),
    ).toBeNull();
    expect(
      getPositiveIntFlagValue(["node", "gensparx", "status", "--timeout", "5000"], "--timeout"),
    ).toBe(5000);
    expect(
      getPositiveIntFlagValue(["node", "gensparx", "status", "--timeout", "nope"], "--timeout"),
    ).toBeUndefined();
  });

  it("builds parse argv from raw args", () => {
    const nodeArgv = buildParseArgv({
      programName: "gensparx",
      rawArgs: ["node", "gensparx", "status"],
    });
    expect(nodeArgv).toEqual(["node", "gensparx", "status"]);

    const versionedNodeArgv = buildParseArgv({
      programName: "gensparx",
      rawArgs: ["node-22", "gensparx", "status"],
    });
    expect(versionedNodeArgv).toEqual(["node-22", "gensparx", "status"]);

    const versionedNodeWindowsArgv = buildParseArgv({
      programName: "gensparx",
      rawArgs: ["node-22.2.0.exe", "gensparx", "status"],
    });
    expect(versionedNodeWindowsArgv).toEqual(["node-22.2.0.exe", "gensparx", "status"]);

    const versionedNodePatchlessArgv = buildParseArgv({
      programName: "gensparx",
      rawArgs: ["node-22.2", "gensparx", "status"],
    });
    expect(versionedNodePatchlessArgv).toEqual(["node-22.2", "gensparx", "status"]);

    const versionedNodeWindowsPatchlessArgv = buildParseArgv({
      programName: "gensparx",
      rawArgs: ["node-22.2.exe", "gensparx", "status"],
    });
    expect(versionedNodeWindowsPatchlessArgv).toEqual(["node-22.2.exe", "gensparx", "status"]);

    const versionedNodeWithPathArgv = buildParseArgv({
      programName: "gensparx",
      rawArgs: ["/usr/bin/node-22.2.0", "gensparx", "status"],
    });
    expect(versionedNodeWithPathArgv).toEqual(["/usr/bin/node-22.2.0", "gensparx", "status"]);

    const nodejsArgv = buildParseArgv({
      programName: "gensparx",
      rawArgs: ["nodejs", "gensparx", "status"],
    });
    expect(nodejsArgv).toEqual(["nodejs", "gensparx", "status"]);

    const nonVersionedNodeArgv = buildParseArgv({
      programName: "gensparx",
      rawArgs: ["node-dev", "gensparx", "status"],
    });
    expect(nonVersionedNodeArgv).toEqual(["node", "gensparx", "node-dev", "gensparx", "status"]);

    const directArgv = buildParseArgv({
      programName: "gensparx",
      rawArgs: ["gensparx", "status"],
    });
    expect(directArgv).toEqual(["node", "gensparx", "status"]);

    const bunArgv = buildParseArgv({
      programName: "gensparx",
      rawArgs: ["bun", "src/entry.ts", "status"],
    });
    expect(bunArgv).toEqual(["bun", "src/entry.ts", "status"]);
  });

  it("builds parse argv from fallback args", () => {
    const fallbackArgv = buildParseArgv({
      programName: "gensparx",
      fallbackArgv: ["status"],
    });
    expect(fallbackArgv).toEqual(["node", "gensparx", "status"]);
  });

  it("decides when to migrate state", () => {
    expect(shouldMigrateState(["node", "gensparx", "status"])).toBe(false);
    expect(shouldMigrateState(["node", "gensparx", "health"])).toBe(false);
    expect(shouldMigrateState(["node", "gensparx", "sessions"])).toBe(false);
    expect(shouldMigrateState(["node", "gensparx", "memory", "status"])).toBe(false);
    expect(shouldMigrateState(["node", "gensparx", "agent", "--message", "hi"])).toBe(false);
    expect(shouldMigrateState(["node", "gensparx", "agents", "list"])).toBe(true);
    expect(shouldMigrateState(["node", "gensparx", "message", "send"])).toBe(true);
  });

  it("reuses command path for migrate state decisions", () => {
    expect(shouldMigrateStateFromPath(["status"])).toBe(false);
    expect(shouldMigrateStateFromPath(["agents", "list"])).toBe(true);
  });
});
