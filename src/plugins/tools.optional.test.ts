import { beforeEach, describe, expect, it, vi } from "vitest";
import { resolvePluginTools } from "./tools.js";

type MockRegistryToolEntry = {
  pluginId: string;
  optional: boolean;
  source: string;
  factory: (ctx: unknown) => unknown;
};

const loadOpenClawPluginsMock = vi.fn();

function makeTempDir() {
  const dir = path.join(os.tmpdir(), `gensparx-plugin-tools-${randomUUID()}`);
  fs.mkdirSync(dir, { recursive: true });
  tempDirs.push(dir);
  return dir;
}

function writePlugin(params: { id: string; body: string }): TempPlugin {
  const dir = makeTempDir();
  const file = path.join(dir, `${params.id}.js`);
  fs.writeFileSync(file, params.body, "utf-8");
  fs.writeFileSync(
    path.join(dir, "gensparx.plugin.json"),
    JSON.stringify(
      {
        id: params.id,
        configSchema: EMPTY_PLUGIN_SCHEMA,
      },
      null,
      2,
    ),
    "utf-8",
  );
  return { dir, file, id: params.id };
}

afterEach(() => {
  for (const dir of tempDirs.splice(0)) {
    try {
      fs.rmSync(dir, { recursive: true, force: true });
    } catch {
      // ignore cleanup failures
    }
  }
});

describe("resolvePluginTools optional tools", () => {
  const pluginBody = `
export default { register(api) {
  api.registerTool(
    {
      name: "optional_tool",
      description: "optional tool",
      parameters: { type: "object", properties: {} },
      async execute() {
        return { content: [{ type: "text", text: "ok" }] };
      },
    },
    { optional: true },
  );
} }
`;

  it("skips optional tools without explicit allowlist", () => {
    const plugin = writePlugin({ id: "optional-demo", body: pluginBody });
    const tools = resolvePluginTools({
      context: {
        config: {
          plugins: {
            load: { paths: [plugin.file] },
            allow: [plugin.id],
          },
        },
        workspaceDir: plugin.dir,
      },
    });
    expect(tools).toHaveLength(0);
  });

  it("allows optional tools by name", () => {
    const plugin = writePlugin({ id: "optional-demo", body: pluginBody });
    const tools = resolvePluginTools({
      context: {
        config: {
          plugins: {
            load: { paths: [plugin.file] },
            allow: [plugin.id],
          },
        },
        workspaceDir: plugin.dir,
      },
      toolAllowlist: ["optional_tool"],
    });
    expect(tools.map((tool) => tool.name)).toContain("optional_tool");
  });

  it("allows optional tools via plugin groups", () => {
    const plugin = writePlugin({ id: "optional-demo", body: pluginBody });
    const toolsAll = resolvePluginTools({
      context: {
        config: {
          plugins: {
            load: { paths: [plugin.file] },
            allow: [plugin.id],
          },
        },
        workspaceDir: plugin.dir,
      },
      toolAllowlist: ["group:plugins"],
    });
    expect(toolsAll.map((tool) => tool.name)).toContain("optional_tool");

    const toolsPlugin = resolvePluginTools({
      context: {
        config: {
          plugins: {
            load: { paths: [plugin.file] },
            allow: [plugin.id],
          },
        },
        workspaceDir: plugin.dir,
      },
      toolAllowlist: ["optional-demo"],
    });
    expect(toolsPlugin.map((tool) => tool.name)).toContain("optional_tool");
  });

  it("rejects plugin id collisions with core tool names", () => {
    const plugin = writePlugin({ id: "message", body: pluginBody });
    const tools = resolvePluginTools({
      context: {
        config: {
          plugins: {
            load: { paths: [plugin.file] },
            allow: [plugin.id],
          },
        },
        workspaceDir: plugin.dir,
      },
      existingToolNames: new Set(["message"]),
      toolAllowlist: ["message"],
    });
    expect(tools).toHaveLength(0);
  });

  it("skips conflicting tool names but keeps other tools", () => {
    const plugin = writePlugin({
      id: "multi",
      body: `
export default { register(api) {
  api.registerTool({
    name: "message",
    description: "conflict",
    parameters: { type: "object", properties: {} },
    async execute() {
      return { content: [{ type: "text", text: "nope" }] };
    },
  });
  api.registerTool({
    name: "other_tool",
    description: "ok",
    parameters: { type: "object", properties: {} },
    async execute() {
      return { content: [{ type: "text", text: "ok" }] };
    },
  };
}

function createContext() {
  return {
    config: {
      plugins: {
        enabled: true,
        allow: ["optional-demo", "message", "multi"],
        load: { paths: ["/tmp/plugin.js"] },
      },
    },
    workspaceDir: "/tmp",
  };
}

function setRegistry(entries: MockRegistryToolEntry[]) {
  const registry = {
    tools: entries,
    diagnostics: [] as Array<{
      level: string;
      pluginId: string;
      source: string;
      message: string;
    }>,
  };
  loadOpenClawPluginsMock.mockReturnValue(registry);
  return registry;
}

function setMultiToolRegistry() {
  return setRegistry([
    {
      pluginId: "multi",
      optional: false,
      source: "/tmp/multi.js",
      factory: () => [makeTool("message"), makeTool("other_tool")],
    },
  ]);
}

function resolveWithConflictingCoreName(options?: { suppressNameConflicts?: boolean }) {
  return resolvePluginTools({
    context: createContext() as never,
    existingToolNames: new Set(["message"]),
    ...(options?.suppressNameConflicts ? { suppressNameConflicts: true } : {}),
  });
}

describe("resolvePluginTools optional tools", () => {
  beforeEach(() => {
    loadOpenClawPluginsMock.mockClear();
  });

  it("skips optional tools without explicit allowlist", () => {
    setRegistry([
      {
        pluginId: "optional-demo",
        optional: true,
        source: "/tmp/optional-demo.js",
        factory: () => makeTool("optional_tool"),
      },
    ]);

    const tools = resolvePluginTools({
      context: createContext() as never,
    });

    expect(tools).toHaveLength(0);
  });

  it("allows optional tools by tool name", () => {
    setRegistry([
      {
        pluginId: "optional-demo",
        optional: true,
        source: "/tmp/optional-demo.js",
        factory: () => makeTool("optional_tool"),
      },
    ]);

    const tools = resolvePluginTools({
      context: createContext() as never,
      toolAllowlist: ["optional_tool"],
    });

    expect(tools.map((tool) => tool.name)).toEqual(["optional_tool"]);
  });

  it("allows optional tools via plugin-scoped allowlist entries", () => {
    setRegistry([
      {
        pluginId: "optional-demo",
        optional: true,
        source: "/tmp/optional-demo.js",
        factory: () => makeTool("optional_tool"),
      },
    ]);

    const toolsByPlugin = resolvePluginTools({
      context: createContext() as never,
      toolAllowlist: ["optional-demo"],
    });
    const toolsByGroup = resolvePluginTools({
      context: createContext() as never,
      toolAllowlist: ["group:plugins"],
    });

    expect(toolsByPlugin.map((tool) => tool.name)).toEqual(["optional_tool"]);
    expect(toolsByGroup.map((tool) => tool.name)).toEqual(["optional_tool"]);
  });

  it("rejects plugin id collisions with core tool names", () => {
    const registry = setRegistry([
      {
        pluginId: "message",
        optional: false,
        source: "/tmp/message.js",
        factory: () => makeTool("optional_tool"),
      },
    ]);

    const tools = resolvePluginTools({
      context: createContext() as never,
      existingToolNames: new Set(["message"]),
    });

    expect(tools).toHaveLength(0);
    expect(registry.diagnostics).toHaveLength(1);
    expect(registry.diagnostics[0]?.message).toContain("plugin id conflicts with core tool name");
  });

  it("skips conflicting tool names but keeps other tools", () => {
    const registry = setMultiToolRegistry();
    const tools = resolveWithConflictingCoreName();

    expect(tools.map((tool) => tool.name)).toEqual(["other_tool"]);
    expect(registry.diagnostics).toHaveLength(1);
    expect(registry.diagnostics[0]?.message).toContain("plugin tool name conflict");
  });

  it("suppresses conflict diagnostics when requested", () => {
    const registry = setMultiToolRegistry();
    const tools = resolveWithConflictingCoreName({ suppressNameConflicts: true });

    expect(tools.map((tool) => tool.name)).toEqual(["other_tool"]);
    expect(registry.diagnostics).toHaveLength(0);
  });
});
