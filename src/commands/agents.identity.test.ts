import fs from "node:fs/promises";
import path from "node:path";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { makeTempWorkspace } from "../test-helpers/workspace.js";
import { baseConfigSnapshot, createTestRuntime } from "./test-runtime-config-helpers.js";

const configMocks = vi.hoisted(() => ({
  readConfigFileSnapshot: vi.fn(),
  writeConfigFile: vi.fn().mockResolvedValue(undefined),
}));

vi.mock("../config/config.js", async (importOriginal) => ({
  ...(await importOriginal<typeof import("../config/config.js")>()),
  readConfigFileSnapshot: configMocks.readConfigFileSnapshot,
  writeConfigFile: configMocks.writeConfigFile,
}));

import { agentsSetIdentityCommand } from "./agents.js";

const runtime = createTestRuntime();
type ConfigWritePayload = {
  agents?: { list?: Array<{ id: string; identity?: Record<string, string> }> };
};

const baseSnapshot = {
  path: "/tmp/gensparx.json",
  exists: true,
  raw: "{}",
  parsed: {},
  valid: true,
  config: {},
  issues: [],
  legacyIssues: [],
};

describe("agents set-identity command", () => {
  beforeEach(() => {
    configMocks.readConfigFileSnapshot.mockClear();
    configMocks.writeConfigFile.mockClear();
    runtime.log.mockClear();
    runtime.error.mockClear();
    runtime.exit.mockClear();
  });

  it("sets identity from workspace IDENTITY.md", async () => {
    const root = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-identity-"));
    const workspace = path.join(root, "work");
    await fs.mkdir(workspace, { recursive: true });
    await fs.writeFile(
      path.join(workspace, "IDENTITY.md"),
      [
        "- Name: GenSparx",
        "- Creature: helpful sloth",
        "- Emoji: :)",
        "- Avatar: avatars/gensparx.png",
        "",
      ].join("\n"),
      "utf-8",
    );

    configMocks.readConfigFileSnapshot.mockResolvedValue({
      ...baseConfigSnapshot,
      config: {
        agents: {
          list: [
            { id: "main", workspace },
            { id: "ops", workspace: path.join(root, "ops") },
          ],
        },
      },
    });

    await agentsSetIdentityCommand({ workspace }, runtime);

    expect(configMocks.writeConfigFile).toHaveBeenCalledTimes(1);
    const written = configMocks.writeConfigFile.mock.calls[0]?.[0] as {
      agents?: { list?: Array<{ id: string; identity?: Record<string, string> }> };
    };
    const main = written.agents?.list?.find((entry) => entry.id === "main");
    expect(main?.identity).toEqual({
      name: "GenSparx",
      theme: "helpful sloth",
      emoji: ":)",
      avatar: "avatars/gensparx.png",
    });
  });

  it("errors when multiple agents match the same workspace", async () => {
    const root = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-identity-"));
    const workspace = path.join(root, "shared");
    await fs.mkdir(workspace, { recursive: true });
    await fs.writeFile(path.join(workspace, "IDENTITY.md"), "- Name: Echo\n", "utf-8");

    configMocks.readConfigFileSnapshot.mockResolvedValue({
      ...baseConfigSnapshot,
      config: {
        agents: {
          list: [
            { id: "main", workspace },
            { id: "ops", workspace },
          ],
        },
      },
    });

    await agentsSetIdentityCommand({ workspace }, runtime);

    expect(runtime.error).toHaveBeenCalledWith(expect.stringContaining("Multiple agents match"));
    expect(runtime.exit).toHaveBeenCalledWith(1);
    expect(configMocks.writeConfigFile).not.toHaveBeenCalled();
  });

  it("overrides identity file values with explicit flags", async () => {
    const root = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-identity-"));
    const workspace = path.join(root, "work");
    await fs.mkdir(workspace, { recursive: true });
    await fs.writeFile(
      path.join(workspace, "IDENTITY.md"),
      [
        "- Name: GenSparx",
        "- Theme: space lobster",
        "- Emoji: :)",
        "- Avatar: avatars/gensparx.png",
        "",
      ].join("\n"),
      "utf-8",
    );

    configMocks.readConfigFileSnapshot.mockResolvedValue({
      ...baseConfigSnapshot,
      config: { agents: { list: [{ id: "main", workspace }] } },
    });

    await agentsSetIdentityCommand(
      {
        workspace,
        fromIdentity: true,
        name: "Nova",
        emoji: "🦞",
        avatar: "https://example.com/override.png",
      },
      runtime,
    );

    expect(getWrittenMainIdentity()).toEqual({
      name: "Nova",
      theme: "space lobster",
      emoji: "🦞",
      avatar: "https://example.com/override.png",
    });
  });

  it("reads identity from an explicit IDENTITY.md path", async () => {
    const root = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-identity-"));
    const workspace = path.join(root, "work");
    const identityPath = path.join(workspace, "IDENTITY.md");
    await fs.mkdir(workspace, { recursive: true });
    await fs.writeFile(
      identityPath,
      [
        "- **Name:** C-3PO",
        "- **Creature:** Flustered Protocol Droid",
        "- **Emoji:** 🤖",
        "- **Avatar:** avatars/c3po.png",
        "",
      ].join("\n"),
      "utf-8",
    );

    configMocks.readConfigFileSnapshot.mockResolvedValue({
      ...baseConfigSnapshot,
      config: { agents: { list: [{ id: "main" }] } },
    });

    await agentsSetIdentityCommand({ agent: "main", identityFile: identityPath }, runtime);

    expect(getWrittenMainIdentity()).toEqual({
      name: "C-3PO",
      theme: "Flustered Protocol Droid",
      emoji: "🤖",
      avatar: "avatars/c3po.png",
    });
  });

  it("accepts avatar-only identity from IDENTITY.md", async () => {
    const root = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-identity-"));
    const workspace = path.join(root, "work");
    await fs.mkdir(workspace, { recursive: true });
    await fs.writeFile(
      path.join(workspace, "IDENTITY.md"),
      "- Avatar: avatars/only.png\n",
      "utf-8",
    );

    await runIdentityCommandFromWorkspace(workspace);

    expect(getWrittenMainIdentity()).toEqual({
      avatar: "avatars/only.png",
    });
  });

  it("accepts avatar-only updates via flags", async () => {
    configMocks.readConfigFileSnapshot.mockResolvedValue({
      ...baseConfigSnapshot,
      config: { agents: { list: [{ id: "main" }] } },
    });

    await agentsSetIdentityCommand(
      { agent: "main", avatar: "https://example.com/avatar.png" },
      runtime,
    );

    expect(getWrittenMainIdentity()).toEqual({
      avatar: "https://example.com/avatar.png",
    });
  });

  it("errors when identity data is missing", async () => {
    const root = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-identity-"));
    const workspace = path.join(root, "work");
    await fs.mkdir(workspace, { recursive: true });

    await runIdentityCommandFromWorkspace(workspace);

    expect(runtime.error).toHaveBeenCalledWith(expect.stringContaining("No identity data found"));
    expect(runtime.exit).toHaveBeenCalledWith(1);
    expect(configMocks.writeConfigFile).not.toHaveBeenCalled();
  });
});
