import { beforeEach, describe, expect, it, vi } from "vitest";

const execFileMock = vi.hoisted(() => vi.fn());

vi.mock("node:child_process", () => ({
  execFile: execFileMock,
}));

import { splitArgsPreservingQuotes } from "./arg-split.js";
import { parseSystemdExecStart } from "./systemd-unit.js";
import {
  isSystemdUserServiceAvailable,
  parseSystemdShow,
  restartSystemdService,
  resolveSystemdUserUnitPath,
  stopSystemdService,
} from "./systemd.js";

describe("systemd availability", () => {
  beforeEach(() => {
    execFileMock.mockClear();
  });

  it("returns true when systemctl --user succeeds", async () => {
    execFileMock.mockImplementation((_cmd, _args, _opts, cb) => {
      cb(null, "", "");
    });
    await expect(isSystemdUserServiceAvailable()).resolves.toBe(true);
  });

  it("returns false when systemd user bus is unavailable", async () => {
    execFileMock.mockImplementation((_cmd, _args, _opts, cb) => {
      const err = new Error("Failed to connect to bus") as Error & {
        stderr?: string;
        code?: number;
      };
      err.stderr = "Failed to connect to bus";
      err.code = 1;
      cb(err, "", "");
    });
    await expect(isSystemdUserServiceAvailable()).resolves.toBe(false);
  });
});

describe("systemd runtime parsing", () => {
  it("parses active state details", () => {
    const output = [
      "ActiveState=inactive",
      "SubState=dead",
      "MainPID=0",
      "ExecMainStatus=2",
      "ExecMainCode=exited",
    ].join("\n");
    expect(parseSystemdShow(output)).toEqual({
      activeState: "inactive",
      subState: "dead",
      execMainStatus: 2,
      execMainCode: "exited",
    });
  });
});

describe("resolveSystemdUserUnitPath", () => {
  it("uses default service name when GENSPARX_PROFILE is default", () => {
    const env = { HOME: "/home/test", GENSPARX_PROFILE: "default" };
    expect(resolveSystemdUserUnitPath(env)).toBe(
      "/home/test/.config/systemd/user/gensparx-gateway.service",
    );
  });

  it("uses default service name when GENSPARX_PROFILE is unset", () => {
    const env = { HOME: "/home/test" };
    expect(resolveSystemdUserUnitPath(env)).toBe(
      "/home/test/.config/systemd/user/gensparx-gateway.service",
    );
  });

  it("uses profile-specific service name when GENSPARX_PROFILE is set to a custom value", () => {
    const env = { HOME: "/home/test", GENSPARX_PROFILE: "jbphoenix" };
    expect(resolveSystemdUserUnitPath(env)).toBe(
      "/home/test/.config/systemd/user/gensparx-gateway-jbphoenix.service",
    );
  });

  it("prefers GENSPARX_SYSTEMD_UNIT over GENSPARX_PROFILE", () => {
    const env = {
      HOME: "/home/test",
      GENSPARX_PROFILE: "jbphoenix",
      GENSPARX_SYSTEMD_UNIT: "custom-unit",
    };
    expect(resolveSystemdUserUnitPath(env)).toBe(
      "/home/test/.config/systemd/user/custom-unit.service",
    );
  });

  it("handles GENSPARX_SYSTEMD_UNIT with .service suffix", () => {
    const env = {
      HOME: "/home/test",
      GENSPARX_SYSTEMD_UNIT: "custom-unit.service",
    };
    expect(resolveSystemdUserUnitPath(env)).toBe(
      "/home/test/.config/systemd/user/custom-unit.service",
    );
  });

  it("trims whitespace from GENSPARX_SYSTEMD_UNIT", () => {
    const env = {
      HOME: "/home/test",
      GENSPARX_SYSTEMD_UNIT: "  custom-unit  ",
    };
    expect(resolveSystemdUserUnitPath(env)).toBe(
      "/home/test/.config/systemd/user/custom-unit.service",
    );
  });

  it("handles case-insensitive 'Default' profile", () => {
    const env = { HOME: "/home/test", GENSPARX_PROFILE: "Default" };
    expect(resolveSystemdUserUnitPath(env)).toBe(
      "/home/test/.config/systemd/user/gensparx-gateway.service",
    );
  });

  it("handles case-insensitive 'DEFAULT' profile", () => {
    const env = { HOME: "/home/test", GENSPARX_PROFILE: "DEFAULT" };
    expect(resolveSystemdUserUnitPath(env)).toBe(
      "/home/test/.config/systemd/user/gensparx-gateway.service",
    );
  });

  it("trims whitespace from GENSPARX_PROFILE", () => {
    const env = { HOME: "/home/test", GENSPARX_PROFILE: "  myprofile  " };
    expect(resolveSystemdUserUnitPath(env)).toBe(
      "/home/test/.config/systemd/user/gensparx-gateway-myprofile.service",
    );
  });
});
