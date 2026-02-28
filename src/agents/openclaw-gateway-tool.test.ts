import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { describe, expect, it, vi } from "vitest";
import { withEnvAsync } from "../test-utils/env.js";
import "./test-helpers/fast-core-tools.js";
import { createGenSparxTools } from "./gensparx-tools.js";

vi.mock("./tools/gateway.js", () => ({
  callGatewayTool: vi.fn(async (method: string) => {
    if (method === "config.get") {
      return { hash: "hash-1" };
    }
    return { ok: true };
  }),
  readGatewayCallOptions: vi.fn(() => ({})),
}));

function requireGatewayTool(agentSessionKey?: string) {
  const tool = createOpenClawTools({
    ...(agentSessionKey ? { agentSessionKey } : {}),
    config: { commands: { restart: true } },
  }).find((candidate) => candidate.name === "gateway");
  expect(tool).toBeDefined();
  if (!tool) {
    throw new Error("missing gateway tool");
  }
  return tool;
}

function expectConfigMutationCall(params: {
  callGatewayTool: {
    mock: {
      calls: Array<readonly unknown[]>;
    };
  };
  action: "config.apply" | "config.patch";
  raw: string;
  sessionKey: string;
}) {
  expect(params.callGatewayTool).toHaveBeenCalledWith("config.get", expect.any(Object), {});
  expect(params.callGatewayTool).toHaveBeenCalledWith(
    params.action,
    expect.any(Object),
    expect.objectContaining({
      raw: params.raw.trim(),
      baseHash: "hash-1",
      sessionKey: params.sessionKey,
    }),
  );
}

describe("gateway tool", () => {
  it("marks gateway as owner-only", async () => {
    const tool = requireGatewayTool();
    expect(tool.ownerOnly).toBe(true);
  });

  it("schedules SIGUSR1 restart", async () => {
    vi.useFakeTimers();
    const kill = vi.spyOn(process, "kill").mockImplementation(() => true);
    const previousStateDir = process.env.GENSPARX_STATE_DIR;
    const previousProfile = process.env.GENSPARX_PROFILE;
    const stateDir = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-test-"));
    process.env.GENSPARX_STATE_DIR = stateDir;
    process.env.GENSPARX_PROFILE = "isolated";

    try {
      const tool = createGenSparxTools({
        config: { commands: { restart: true } },
      }).find((candidate) => candidate.name === "gateway");
      expect(tool).toBeDefined();
      if (!tool) {
        throw new Error("missing gateway tool");
      }

          const result = await tool.execute("call1", {
            action: "restart",
            delayMs: 0,
          });
          expect(result.details).toMatchObject({
            ok: true,
            pid: process.pid,
            signal: "SIGUSR1",
            delayMs: 0,
          });

      const sentinelPath = path.join(stateDir, "restart-sentinel.json");
      const raw = await fs.readFile(sentinelPath, "utf-8");
      const parsed = JSON.parse(raw) as {
        payload?: { kind?: string; doctorHint?: string | null };
      };
      expect(parsed.payload?.kind).toBe("restart");
      expect(parsed.payload?.doctorHint).toBe(
        "Run: gensparx --profile isolated doctor --non-interactive",
      );
    } finally {
      kill.mockRestore();
      vi.useRealTimers();
      if (previousStateDir === undefined) {
        delete process.env.GENSPARX_STATE_DIR;
      } else {
        process.env.GENSPARX_STATE_DIR = previousStateDir;
      }
      if (previousProfile === undefined) {
        delete process.env.GENSPARX_PROFILE;
      } else {
        process.env.GENSPARX_PROFILE = previousProfile;
      }
    }
  });

  it("passes config.apply through gateway call", async () => {
    const { callGatewayTool } = await import("./tools/gateway.js");
    const tool = createGenSparxTools({
      agentSessionKey: "agent:main:whatsapp:dm:+15555550123",
    }).find((candidate) => candidate.name === "gateway");
    expect(tool).toBeDefined();
    if (!tool) {
      throw new Error("missing gateway tool");
    }

    const raw = '{\n  agents: { defaults: { workspace: "~/gensparx" } }\n}\n';
    await tool.execute("call2", {
      action: "config.apply",
      raw,
    });

    expectConfigMutationCall({
      callGatewayTool: vi.mocked(callGatewayTool),
      action: "config.apply",
      raw,
      sessionKey,
    });
  });

  it("passes config.patch through gateway call", async () => {
    const { callGatewayTool } = await import("./tools/gateway.js");
    const tool = createGenSparxTools({
      agentSessionKey: "agent:main:whatsapp:dm:+15555550123",
    }).find((candidate) => candidate.name === "gateway");
    expect(tool).toBeDefined();
    if (!tool) {
      throw new Error("missing gateway tool");
    }

    const raw = '{\n  channels: { telegram: { groups: { "*": { requireMention: false } } } }\n}\n';
    await tool.execute("call4", {
      action: "config.patch",
      raw,
    });

    expectConfigMutationCall({
      callGatewayTool: vi.mocked(callGatewayTool),
      action: "config.patch",
      raw,
      sessionKey,
    });
  });

  it("passes update.run through gateway call", async () => {
    const { callGatewayTool } = await import("./tools/gateway.js");
    const tool = createGenSparxTools({
      agentSessionKey: "agent:main:whatsapp:dm:+15555550123",
    }).find((candidate) => candidate.name === "gateway");
    expect(tool).toBeDefined();
    if (!tool) {
      throw new Error("missing gateway tool");
    }

    await tool.execute("call3", {
      action: "update.run",
      note: "test update",
    });

    expect(callGatewayTool).toHaveBeenCalledWith(
      "update.run",
      expect.any(Object),
      expect.objectContaining({
        note: "test update",
        sessionKey,
      }),
    );
    const updateCall = vi
      .mocked(callGatewayTool)
      .mock.calls.find((call) => call[0] === "update.run");
    expect(updateCall).toBeDefined();
    if (updateCall) {
      const [, opts, params] = updateCall;
      expect(opts).toMatchObject({ timeoutMs: 20 * 60_000 });
      expect(params).toMatchObject({ timeoutMs: 20 * 60_000 });
    }
  });
});
