import { describe, expect, it } from "vitest";
import { detectRespawnSupervisor, SUPERVISOR_HINT_ENV_VARS } from "./supervisor-markers.js";

describe("SUPERVISOR_HINT_ENV_VARS", () => {
  it("includes the cross-platform supervisor hint env vars", () => {
    const envVars = new Set(SUPERVISOR_HINT_ENV_VARS);
    expect(envVars.has("LAUNCH_JOB_LABEL")).toBe(true);
    expect(envVars.has("XPC_SERVICE_NAME")).toBe(true);
    expect(envVars.has("INVOCATION_ID")).toBe(true);
    expect(envVars.has("GENSPARX_SERVICE_MARKER")).toBe(true);
  });
});

describe("detectRespawnSupervisor", () => {
  it("detects launchd from Gensparx's explicit marker or current gateway launchd job", () => {
    expect(
      detectRespawnSupervisor({ GENSPARX_LAUNCHD_LABEL: " ai.gensparx.gateway " }, "darwin"),
    ).toBe("launchd");
    expect(detectRespawnSupervisor({ GENSPARX_LAUNCHD_LABEL: "   " }, "darwin")).toBeNull();
    expect(detectRespawnSupervisor({ LAUNCH_JOB_LABEL: "ai.gensparx.gateway" }, "darwin")).toBe(
      "launchd",
    );
    expect(
      detectRespawnSupervisor(
        { LAUNCH_JOB_NAME: "ai.gensparx.work", GENSPARX_PROFILE: "work" },
        "darwin",
      ),
    ).toBe("launchd");
    expect(detectRespawnSupervisor({ LAUNCH_JOB_LABEL: "ai.gensparx.mac" }, "darwin")).toBeNull();
    expect(detectRespawnSupervisor({ XPC_SERVICE_NAME: "ai.gensparx.mac" }, "darwin")).toBeNull();
    expect(
      detectRespawnSupervisor(
        { XPC_SERVICE_NAME: "ai.gensparx.mac", GENSPARX_PROFILE: "mac" },
        "darwin",
      ),
    ).toBeNull();
    expect(detectRespawnSupervisor({ XPC_SERVICE_NAME: "ai.gensparx.gateway" }, "darwin")).toBe(
      "launchd",
    );
  });

  it("detects systemd only from non-blank platform-specific hints", () => {
    expect(detectRespawnSupervisor({ INVOCATION_ID: "abc123" }, "linux")).toBe("systemd");
    expect(detectRespawnSupervisor({ JOURNAL_STREAM: "" }, "linux")).toBeNull();
  });

  it("detects scheduled-task supervision on Windows from the Gensparx marker", () => {
    expect(detectRespawnSupervisor({ GENSPARX_SERVICE_MARKER: "gateway" }, "win32")).toBe(
      "schtasks",
    );
    expect(detectRespawnSupervisor({ GENSPARX_SERVICE_MARKER: "node" }, "win32")).toBeNull();
  });

  it("ignores service markers on unknown platforms", () => {
    expect(detectRespawnSupervisor({ LAUNCH_JOB_LABEL: "ai.gensparx.gateway" }, "freebsd")).toBe(
      null,
    );
  });
});
