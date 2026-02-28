import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { captureEnv } from "../../test-utils/env.js";
import { writeSkill } from "../skills.e2e-test-helpers.js";
import { resolveBundledSkillsDir } from "./bundled-dir.js";

describe("resolveBundledSkillsDir", () => {
  const originalOverride = process.env.GENSPARX_BUNDLED_SKILLS_DIR;

  afterEach(() => {
    if (originalOverride === undefined) {
      delete process.env.GENSPARX_BUNDLED_SKILLS_DIR;
    } else {
      process.env.GENSPARX_BUNDLED_SKILLS_DIR = originalOverride;
    }
  });

  it("resolves bundled skills under a flattened dist layout", async () => {
    delete process.env.GENSPARX_BUNDLED_SKILLS_DIR;

    const root = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-bundled-"));
    await fs.writeFile(path.join(root, "package.json"), JSON.stringify({ name: "gensparx" }));

    await writeSkill({
      dir: path.join(root, "skills", "peekaboo"),
      name: "peekaboo",
      description: "peekaboo",
    });

    const distDir = path.join(root, "dist");
    await fs.mkdir(distDir, { recursive: true });
    const argv1 = path.join(distDir, "index.js");
    await fs.writeFile(argv1, "// stub", "utf-8");

    const moduleUrl = pathToFileURL(path.join(distDir, "skills.js")).href;
    const execPath = path.join(root, "bin", "node");
    await fs.mkdir(path.dirname(execPath), { recursive: true });

    const resolved = resolveBundledSkillsDir({
      argv1,
      moduleUrl,
      cwd: distDir,
      execPath,
    });

    expect(resolved).toBe(path.join(root, "skills"));
  });
});
