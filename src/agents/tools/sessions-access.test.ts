import { describe, expect, it } from "vitest";
import type { GensparxConfig } from "../../config/config.js";
import {
  createAgentToAgentPolicy,
  createSessionVisibilityGuard,
  resolveEffectiveSessionToolsVisibility,
  resolveSandboxSessionToolsVisibility,
  resolveSandboxedSessionToolContext,
  resolveSessionToolsVisibility,
} from "./sessions-access.js";

describe("resolveSessionToolsVisibility", () => {
  it("defaults to tree when unset or invalid", () => {
    expect(resolveSessionToolsVisibility({} as unknown as GensparxConfig)).toBe("tree");
    expect(
      resolveSessionToolsVisibility({
        tools: { sessions: { visibility: "invalid" } },
      } as unknown as GensparxConfig),
    ).toBe("tree");
  });

  it("accepts known visibility values case-insensitively", () => {
    expect(
      resolveSessionToolsVisibility({
        tools: { sessions: { visibility: "ALL" } },
      } as unknown as GensparxConfig),
    ).toBe("all");
  });
});

describe("resolveEffectiveSessionToolsVisibility", () => {
  it("clamps to tree in sandbox when sandbox visibility is spawned", () => {
    const cfg = {
      tools: { sessions: { visibility: "all" } },
      agents: { defaults: { sandbox: { sessionToolsVisibility: "spawned" } } },
    } as unknown as GensparxConfig;
    expect(resolveEffectiveSessionToolsVisibility({ cfg, sandboxed: true })).toBe("tree");
  });

  it("preserves visibility when sandbox clamp is all", () => {
    const cfg = {
      tools: { sessions: { visibility: "all" } },
      agents: { defaults: { sandbox: { sessionToolsVisibility: "all" } } },
    } as unknown as GensparxConfig;
    expect(resolveEffectiveSessionToolsVisibility({ cfg, sandboxed: true })).toBe("all");
  });
});

describe("sandbox session-tools context", () => {
  it("defaults sandbox visibility clamp to spawned", () => {
    expect(resolveSandboxSessionToolsVisibility({} as unknown as GensparxConfig)).toBe("spawned");
  });

  it("restricts non-subagent sandboxed sessions to spawned visibility", () => {
    const cfg = {
      tools: { sessions: { visibility: "all" } },
      agents: { defaults: { sandbox: { sessionToolsVisibility: "spawned" } } },
    } as unknown as GensparxConfig;
    const context = resolveSandboxedSessionToolContext({
      cfg,
      agentSessionKey: "agent:main:main",
      sandboxed: true,
    });

    expect(context.restrictToSpawned).toBe(true);
    expect(context.requesterInternalKey).toBe("agent:main:main");
    expect(context.effectiveRequesterKey).toBe("agent:main:main");
  });

  it("does not restrict subagent sessions in sandboxed mode", () => {
    const cfg = {
      tools: { sessions: { visibility: "all" } },
      agents: { defaults: { sandbox: { sessionToolsVisibility: "spawned" } } },
    } as unknown as GensparxConfig;
    const context = resolveSandboxedSessionToolContext({
      cfg,
      agentSessionKey: "agent:main:subagent:abc",
      sandboxed: true,
    });

    expect(context.restrictToSpawned).toBe(false);
    expect(context.requesterInternalKey).toBe("agent:main:subagent:abc");
  });
});

describe("createAgentToAgentPolicy", () => {
  it("denies cross-agent access when disabled", () => {
    const policy = createAgentToAgentPolicy({} as unknown as GensparxConfig);
    expect(policy.enabled).toBe(false);
    expect(policy.isAllowed("main", "main")).toBe(true);
    expect(policy.isAllowed("main", "ops")).toBe(false);
  });

  it("honors allow patterns when enabled", () => {
    const policy = createAgentToAgentPolicy({
      tools: {
        agentToAgent: {
          enabled: true,
          allow: ["ops-*", "main"],
        },
      },
    } as unknown as GensparxConfig);

    expect(policy.isAllowed("ops-a", "ops-b")).toBe(true);
    expect(policy.isAllowed("main", "ops-a")).toBe(true);
    expect(policy.isAllowed("guest", "ops-a")).toBe(false);
  });

  it("matches wildcard patterns case-insensitively", () => {
    const policy = createAgentToAgentPolicy({
      tools: {
        agentToAgent: {
          enabled: true,
          allow: ["Ops-*"],
        },
      },
    } as unknown as GensparxConfig);

    expect(policy.matchesAllow("ops-worker")).toBe(true);
    expect(policy.matchesAllow("OPS-WORKER")).toBe(true);
    expect(policy.matchesAllow("guest")).toBe(false);
  });

  it("keeps exact allow patterns case-sensitive", () => {
    const policy = createAgentToAgentPolicy({
      tools: {
        agentToAgent: {
          enabled: true,
          allow: ["Ops"],
        },
      },
    } as unknown as GensparxConfig);

    expect(policy.matchesAllow("Ops")).toBe(true);
    expect(policy.matchesAllow("ops")).toBe(false);
  });

  it("keeps blank configured allow patterns fail-closed", () => {
    const policy = createAgentToAgentPolicy({
      tools: {
        agentToAgent: {
          enabled: true,
          allow: [" "],
        },
      },
    } as unknown as GensparxConfig);

    expect(policy.matchesAllow("ops")).toBe(false);
    expect(policy.isAllowed("main", "ops")).toBe(false);
  });
  it("handles interior wildcards", () => {
    const policy = createAgentToAgentPolicy({
      tools: {
        agentToAgent: {
          enabled: true,
          allow: ["team-*-prod"],
        },
      },
    } as unknown as GensparxConfig);

    expect(policy.matchesAllow("team-ops-prod")).toBe(true);
    expect(policy.matchesAllow("team-dev-prod")).toBe(true);
    expect(policy.matchesAllow("team-ops-staging")).toBe(false);
    expect(policy.matchesAllow("team-prod")).toBe(false);
  });

  it("handles multiple wildcards without polynomial backtracking", () => {
    const policy = createAgentToAgentPolicy({
      tools: {
        agentToAgent: {
          enabled: true,
          allow: ["*a*b*c*d*e*"],
        },
      },
    } as unknown as GensparxConfig);

    // Positive match
    expect(policy.matchesAllow("xaxbxcxdxe")).toBe(true);

    // Negative match with adversarial input that would cause O(n^k)
    // backtracking with the old `^.*a.*b.*c.*d.*e.*$` regex.
    const adversarial = "a".repeat(200) + "b".repeat(200) + "c".repeat(200) + "d".repeat(200);
    const start = performance.now();
    expect(policy.matchesAllow(adversarial)).toBe(false);
    const elapsed = performance.now() - start;
    // The old regex could take seconds; the segment matcher finishes sub-ms.
    expect(elapsed).toBeLessThan(50);
  });

  it("rejects when suffix overlaps prefix", () => {
    const policy = createAgentToAgentPolicy({
      tools: {
        agentToAgent: {
          enabled: true,
          allow: ["abc*xyz"],
        },
      },
    } as unknown as GensparxConfig);

    expect(policy.matchesAllow("abcxyz")).toBe(true);
    expect(policy.matchesAllow("abc-middle-xyz")).toBe(true);
    expect(policy.matchesAllow("ab")).toBe(false);
  });

  it("treats regex syntax as literal text in wildcard patterns", () => {
    const policy = createAgentToAgentPolicy({
      tools: {
        agentToAgent: {
          enabled: true,
          allow: ["ops.[prod]*"],
        },
      },
    } as unknown as GensparxConfig);

    expect(policy.matchesAllow("OPS.[PROD]-worker")).toBe(true);
    expect(policy.matchesAllow("opsXprod-worker")).toBe(false);
  });
});

describe("createSessionVisibilityGuard", () => {
  it("blocks cross-agent send when agent-to-agent is disabled", async () => {
    const guard = await createSessionVisibilityGuard({
      action: "send",
      requesterSessionKey: "agent:main:main",
      visibility: "all",
      a2aPolicy: createAgentToAgentPolicy({} as unknown as GensparxConfig),
    });

    expect(guard.check("agent:ops:main")).toEqual({
      allowed: false,
      status: "forbidden",
      error:
        "Agent-to-agent messaging is disabled. Set tools.agentToAgent.enabled=true to allow cross-agent sends.",
    });
  });

  it("enforces self visibility for same-agent sessions", async () => {
    const guard = await createSessionVisibilityGuard({
      action: "history",
      requesterSessionKey: "agent:main:main",
      visibility: "self",
      a2aPolicy: createAgentToAgentPolicy({} as unknown as GensparxConfig),
    });

    expect(guard.check("agent:main:main")).toEqual({ allowed: true });
    expect(guard.check("agent:main:telegram:group:1")).toEqual({
      allowed: false,
      status: "forbidden",
      error:
        "Session history visibility is restricted to the current session (tools.sessions.visibility=self).",
    });
  });
});
