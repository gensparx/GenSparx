import path from "node:path";
import { pathToFileURL } from "node:url";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

describe("control UI assets helpers", () => {
  it("resolves repo root from src argv1", async () => {
    const tmp = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-ui-"));
    try {
      await fs.mkdir(path.join(tmp, "ui"), { recursive: true });
      await fs.writeFile(path.join(tmp, "ui", "vite.config.ts"), "export {};\n");
      await fs.writeFile(path.join(tmp, "package.json"), "{}\n");
      await fs.mkdir(path.join(tmp, "src"), { recursive: true });
      await fs.writeFile(path.join(tmp, "src", "index.ts"), "export {};\n");

const state = vi.hoisted(() => ({
  entries: new Map<string, FakeFsEntry>(),
  realpaths: new Map<string, string>(),
}));

const abs = (p: string) => path.resolve(p);

function setFile(p: string, content = "") {
  state.entries.set(abs(p), { kind: "file", content });
}

function setDir(p: string) {
  state.entries.set(abs(p), { kind: "dir" });
}

vi.mock("node:fs", async (importOriginal) => {
  const actual = await importOriginal<typeof import("node:fs")>();
  const pathMod = await import("node:path");
  const absInMock = (p: string) => pathMod.resolve(p);
  const fixturesRoot = `${absInMock("fixtures")}${pathMod.sep}`;
  const isFixturePath = (p: string) => {
    const resolved = absInMock(p);
    return resolved === fixturesRoot.slice(0, -1) || resolved.startsWith(fixturesRoot);
  };
  const readFixtureEntry = (p: string) => state.entries.get(absInMock(p));

  const wrapped = {
    ...actual,
    existsSync: (p: string) =>
      isFixturePath(p) ? state.entries.has(absInMock(p)) : actual.existsSync(p),
    readFileSync: (p: string, encoding?: unknown) => {
      if (!isFixturePath(p)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return actual.readFileSync(p as any, encoding as any) as unknown;
      }
      const entry = readFixtureEntry(p);
      if (entry?.kind === "file") {
        return entry.content;
      }
      throw new Error(`ENOENT: no such file, open '${p}'`);
    },
    statSync: (p: string) => {
      if (!isFixturePath(p)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return actual.statSync(p as any) as unknown;
      }
      const entry = readFixtureEntry(p);
      if (entry?.kind === "file") {
        return { isFile: () => true, isDirectory: () => false };
      }
      if (entry?.kind === "dir") {
        return { isFile: () => false, isDirectory: () => true };
      }
      throw new Error(`ENOENT: no such file or directory, stat '${p}'`);
    },
    realpathSync: (p: string) =>
      isFixturePath(p)
        ? (state.realpaths.get(absInMock(p)) ?? absInMock(p))
        : actual.realpathSync(p),
  };

  return { ...wrapped, default: wrapped };
});

vi.mock("./openclaw-root.js", () => ({
  resolveOpenClawPackageRoot: vi.fn(async () => null),
  resolveOpenClawPackageRootSync: vi.fn(() => null),
}));

let resolveControlUiRepoRoot: typeof import("./control-ui-assets.js").resolveControlUiRepoRoot;
let resolveControlUiDistIndexPath: typeof import("./control-ui-assets.js").resolveControlUiDistIndexPath;
let resolveControlUiDistIndexHealth: typeof import("./control-ui-assets.js").resolveControlUiDistIndexHealth;
let resolveControlUiRootOverrideSync: typeof import("./control-ui-assets.js").resolveControlUiRootOverrideSync;
let resolveControlUiRootSync: typeof import("./control-ui-assets.js").resolveControlUiRootSync;
let openclawRoot: typeof import("./openclaw-root.js");

describe("control UI assets helpers (fs-mocked)", () => {
  beforeAll(async () => {
    ({
      resolveControlUiRepoRoot,
      resolveControlUiDistIndexPath,
      resolveControlUiDistIndexHealth,
      resolveControlUiRootOverrideSync,
      resolveControlUiRootSync,
    } = await import("./control-ui-assets.js"));
    openclawRoot = await import("./openclaw-root.js");
  });

  it("resolves repo root from dist argv1", async () => {
    const tmp = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-ui-"));
    try {
      await fs.mkdir(path.join(tmp, "ui"), { recursive: true });
      await fs.writeFile(path.join(tmp, "ui", "vite.config.ts"), "export {};\n");
      await fs.writeFile(path.join(tmp, "package.json"), "{}\n");
      await fs.mkdir(path.join(tmp, "dist"), { recursive: true });
      await fs.writeFile(path.join(tmp, "dist", "index.js"), "export {};\n");

  it("resolves repo root from src argv1", () => {
    const root = abs("fixtures/ui-src");
    setFile(path.join(root, "ui", "vite.config.ts"), "export {};\n");

    const argv1 = path.join(root, "src", "index.ts");
    expect(resolveControlUiRepoRoot(argv1)).toBe(root);
  });

  it("resolves repo root by traversing up (dist argv1)", () => {
    const root = abs("fixtures/ui-dist");
    setFile(path.join(root, "package.json"), "{}\n");
    setFile(path.join(root, "ui", "vite.config.ts"), "export {};\n");

    const argv1 = path.join(root, "dist", "index.js");
    expect(resolveControlUiRepoRoot(argv1)).toBe(root);
  });

  it("resolves dist control-ui index path for dist argv1", async () => {
    const argv1 = abs(path.join("fixtures", "pkg", "dist", "index.js"));
    const distDir = path.dirname(argv1);
    await expect(resolveControlUiDistIndexPath(argv1)).resolves.toBe(
      path.join(distDir, "control-ui", "index.html"),
    );
  });

  it("resolves control-ui root for dist bundle argv1", async () => {
    const tmp = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-ui-"));
    try {
      await fs.mkdir(path.join(tmp, "dist", "control-ui"), { recursive: true });
      await fs.writeFile(path.join(tmp, "dist", "bundle.js"), "export {};\n");
      await fs.writeFile(path.join(tmp, "dist", "control-ui", "index.html"), "<html></html>\n");

    await expect(resolveControlUiDistIndexPath(abs("fixtures/bin/openclaw"))).resolves.toBe(
      path.join(pkgRoot, "dist", "control-ui", "index.html"),
    );
  });

  it("resolves control-ui root for dist/gateway bundle argv1", async () => {
    const tmp = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-ui-"));
    try {
      await fs.writeFile(path.join(tmp, "package.json"), JSON.stringify({ name: "gensparx" }));
      await fs.mkdir(path.join(tmp, "dist", "gateway"), { recursive: true });
      await fs.mkdir(path.join(tmp, "dist", "control-ui"), { recursive: true });
      await fs.writeFile(path.join(tmp, "dist", "gateway", "control-ui.js"), "export {};\n");
      await fs.writeFile(path.join(tmp, "dist", "control-ui", "index.html"), "<html></html>\n");

    await expect(resolveControlUiDistIndexPath(path.join(root, "openclaw.mjs"))).resolves.toBe(
      path.join(root, "dist", "control-ui", "index.html"),
    );
  });

  it("resolves control-ui root from override directory or index.html", async () => {
    const tmp = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-ui-"));
    try {
      const uiDir = path.join(tmp, "dist", "control-ui");
      await fs.mkdir(uiDir, { recursive: true });
      await fs.writeFile(path.join(uiDir, "index.html"), "<html></html>\n");

    await expect(resolveControlUiDistIndexPath(path.join(root, "index.mjs"))).resolves.toBeNull();
  });

  it("resolves dist control-ui index path from package root argv1", async () => {
    const tmp = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-ui-"));
    try {
      await fs.writeFile(path.join(tmp, "package.json"), JSON.stringify({ name: "gensparx" }));
      await fs.writeFile(path.join(tmp, "gensparx.mjs"), "export {};\n");
      await fs.mkdir(path.join(tmp, "dist", "control-ui"), { recursive: true });
      await fs.writeFile(path.join(tmp, "dist", "control-ui", "index.html"), "<html></html>\n");

      expect(await resolveControlUiDistIndexPath(path.join(tmp, "gensparx.mjs"))).toBe(
        path.join(tmp, "dist", "control-ui", "index.html"),
      );
    } finally {
      await fs.rm(tmp, { recursive: true, force: true });
    }
  });

  it("resolves control-ui root for package entrypoint argv1", async () => {
    const tmp = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-ui-"));
    try {
      await fs.writeFile(path.join(tmp, "package.json"), JSON.stringify({ name: "gensparx" }));
      await fs.writeFile(path.join(tmp, "gensparx.mjs"), "export {};\n");
      await fs.mkdir(path.join(tmp, "dist", "control-ui"), { recursive: true });
      await fs.writeFile(path.join(tmp, "dist", "control-ui", "index.html"), "<html></html>\n");

      expect(resolveControlUiRootSync({ argv1: path.join(tmp, "gensparx.mjs") })).toBe(
        path.join(tmp, "dist", "control-ui"),
      );
    } finally {
      await fs.rm(tmp, { recursive: true, force: true });
    }
  });

  it("resolves dist control-ui index path from .bin argv1", async () => {
    const tmp = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-ui-"));
    try {
      const binDir = path.join(tmp, "node_modules", ".bin");
      const pkgRoot = path.join(tmp, "node_modules", "gensparx");
      await fs.mkdir(binDir, { recursive: true });
      await fs.mkdir(path.join(pkgRoot, "dist", "control-ui"), { recursive: true });
      await fs.writeFile(path.join(binDir, "gensparx"), "#!/usr/bin/env node\n");
      await fs.writeFile(path.join(pkgRoot, "package.json"), JSON.stringify({ name: "gensparx" }));
      await fs.writeFile(path.join(pkgRoot, "dist", "control-ui", "index.html"), "<html></html>\n");

      expect(await resolveControlUiDistIndexPath(path.join(binDir, "gensparx"))).toBe(
        path.join(pkgRoot, "dist", "control-ui", "index.html"),
      );
    } finally {
      await fs.rm(tmp, { recursive: true, force: true });
    }
  });
});
