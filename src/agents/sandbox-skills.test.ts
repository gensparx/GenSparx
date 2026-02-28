import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { GenSparxConfig } from "../config/config.js";

vi.mock("./sandbox/docker.js", () => ({
  ensureSandboxContainer: vi.fn(async () => "openclaw-sbx-test"),
}));

vi.mock("./sandbox/browser.js", () => ({
  ensureSandboxBrowser: vi.fn(async () => null),
}));

vi.mock("./sandbox/prune.js", () => ({
  maybePruneSandboxes: vi.fn(async () => undefined),
}));

describe("sandbox skill mirroring", () => {
  let envSnapshot: ReturnType<typeof captureFullEnv>;

  beforeEach(() => {
    envSnapshot = captureFullEnv();
  });

  afterEach(() => {
    envSnapshot.restore();
  });

  const runContext = async (workspaceAccess: "none" | "ro") => {
    const stateDir = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-state-"));
    const bundledDir = path.join(stateDir, "bundled-skills");
    await fs.mkdir(bundledDir, { recursive: true });

    process.env.GENSPARX_STATE_DIR = stateDir;
    process.env.GENSPARX_BUNDLED_SKILLS_DIR = bundledDir;
    vi.resetModules();

    const { resolveSandboxContext } = await import("./sandbox.js");

    const workspaceDir = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-workspace-"));
    await writeSkill({
      dir: path.join(workspaceDir, "skills", "demo-skill"),
      name: "demo-skill",
      description: "Demo skill",
    });

    const cfg: GenSparxConfig = {
      agents: {
        defaults: {
          sandbox: {
            mode: "all",
            scope: "session",
            workspaceAccess,
            workspaceRoot: path.join(bundledDir, "sandboxes"),
          },
        },
      },
    };

    const context = await resolveSandboxContext({
      config: cfg,
      sessionKey: "agent:main:main",
      workspaceDir,
    });

    return { context, workspaceDir };
  };

  it.each(["ro", "none"] as const)(
    "copies skills into the sandbox when workspaceAccess is %s",
    async (workspaceAccess) => {
      const { context } = await runContext(workspaceAccess);

    expect(context?.enabled).toBe(true);
    const skillPath = path.join(context?.workspaceDir ?? "", "skills", "demo-skill", "SKILL.md");
    await expect(fs.readFile(skillPath, "utf-8")).resolves.toContain("demo-skill");
  }, 120_000);

  it("copies skills into the sandbox when workspaceAccess is none", async () => {
    const { context } = await runContext("none");

    expect(context?.enabled).toBe(true);
    const skillPath = path.join(context?.workspaceDir ?? "", "skills", "demo-skill", "SKILL.md");
    await expect(fs.readFile(skillPath, "utf-8")).resolves.toContain("demo-skill");
  }, 120_000);
});
