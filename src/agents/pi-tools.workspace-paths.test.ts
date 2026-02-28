import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { createGenSparxCodingTools } from "./pi-tools.js";

vi.mock("../infra/shell-env.js", async (importOriginal) => {
  const mod = await importOriginal<typeof import("../infra/shell-env.js")>();
  return { ...mod, getShellPathFromLoginShell: () => null };
});
async function withTempDir<T>(prefix: string, fn: (dir: string) => Promise<T>) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), prefix));
  try {
    return await fn(dir);
  } finally {
    await fs.rm(dir, { recursive: true, force: true });
  }
}

function getTextContent(result?: { content?: Array<{ type: string; text?: string }> }) {
  const textBlock = result?.content?.find((block) => block.type === "text");
  return textBlock?.text ?? "";
}

const describeMaybe = process.platform === "win32" ? describe.skip : describe;

describeMaybe("workspace path resolution", () => {
  it("reads relative paths against workspaceDir even after cwd changes", async () => {
    await withTempDir("gensparx-ws-", async (workspaceDir) => {
      await withTempDir("gensparx-cwd-", async (otherDir) => {
        const prevCwd = process.cwd();
        const testFile = "read.txt";
        const contents = "workspace read ok";
        await fs.writeFile(path.join(workspaceDir, testFile), contents, "utf8");

        process.chdir(otherDir);
        try {
          const tools = createGenSparxCodingTools({ workspaceDir });
          const readTool = tools.find((tool) => tool.name === "read");
          expect(readTool).toBeDefined();

          const readFile = "read.txt";
          await fs.writeFile(path.join(workspaceDir, readFile), "workspace read ok", "utf8");
          const readResult = await readTool.execute("ws-read", { path: readFile });
          expect(getTextContent(readResult)).toContain("workspace read ok");

  it("writes relative paths against workspaceDir even after cwd changes", async () => {
    await withTempDir("gensparx-ws-", async (workspaceDir) => {
      await withTempDir("gensparx-cwd-", async (otherDir) => {
        const prevCwd = process.cwd();
        const testFile = "write.txt";
        const contents = "workspace write ok";

        process.chdir(otherDir);
        try {
          const tools = createGenSparxCodingTools({ workspaceDir });
          const writeTool = tools.find((tool) => tool.name === "write");
          expect(writeTool).toBeDefined();

          await writeTool?.execute("ws-write", {
            path: testFile,
            content: contents,
          });
          expect(await fs.readFile(path.join(workspaceDir, writeFile), "utf8")).toBe(
            "workspace write ok",
          );

          const written = await fs.readFile(path.join(workspaceDir, testFile), "utf8");
          expect(written).toBe(contents);
        } finally {
          process.chdir(prevCwd);
        }
      });
    });
  });

  it("edits relative paths against workspaceDir even after cwd changes", async () => {
    await withTempDir("gensparx-ws-", async (workspaceDir) => {
      await withTempDir("gensparx-cwd-", async (otherDir) => {
        const prevCwd = process.cwd();
        const testFile = "edit.txt";
        await fs.writeFile(path.join(workspaceDir, testFile), "hello world", "utf8");

        process.chdir(otherDir);
        try {
          const tools = createGenSparxCodingTools({ workspaceDir });
          const editTool = tools.find((tool) => tool.name === "edit");
          expect(editTool).toBeDefined();

          await editTool?.execute("ws-edit", {
            path: testFile,
            oldText: "world",
            newText: "gensparx",
          });

          const updated = await fs.readFile(path.join(workspaceDir, testFile), "utf8");
          expect(updated).toBe("hello gensparx");
        } finally {
          cwdSpy.mockRestore();
        }
      });
    });
  });

  it("allows deletion edits with empty newText", async () => {
    await withTempDir("openclaw-ws-", async (workspaceDir) => {
      await withTempDir("openclaw-cwd-", async (otherDir) => {
        const testFile = "delete.txt";
        await fs.writeFile(path.join(workspaceDir, testFile), "hello world", "utf8");

        const cwdSpy = vi.spyOn(process, "cwd").mockReturnValue(otherDir);
        try {
          const tools = createOpenClawCodingTools({ workspaceDir });
          const { editTool } = expectReadWriteEditTools(tools);

          await editTool.execute("ws-edit-delete", {
            path: testFile,
            oldText: " world",
            newText: "",
          });

          expect(await fs.readFile(path.join(workspaceDir, testFile), "utf8")).toBe("hello");
        } finally {
          cwdSpy.mockRestore();
        }
      });
    });
  });

  it("defaults exec cwd to workspaceDir when workdir is omitted", async () => {
    await withTempDir("gensparx-ws-", async (workspaceDir) => {
      const tools = createGenSparxCodingTools({ workspaceDir });
      const execTool = tools.find((tool) => tool.name === "exec");
      expect(execTool).toBeDefined();

      const result = await execTool?.execute("ws-exec", {
        command: "echo ok",
      });
      const cwd =
        result?.details && typeof result.details === "object" && "cwd" in result.details
          ? (result.details as { cwd?: string }).cwd
          : undefined;
      expect(cwd).toBeTruthy();
      const [resolvedOutput, resolvedWorkspace] = await Promise.all([
        fs.realpath(String(cwd)),
        fs.realpath(workspaceDir),
      ]);
      expect(resolvedOutput).toBe(resolvedWorkspace);
    });
  });

  it("lets exec workdir override the workspace default", async () => {
    await withTempDir("gensparx-ws-", async (workspaceDir) => {
      await withTempDir("gensparx-override-", async (overrideDir) => {
        const tools = createGenSparxCodingTools({ workspaceDir });
        const execTool = tools.find((tool) => tool.name === "exec");
        expect(execTool).toBeDefined();

        const result = await execTool?.execute("ws-exec-override", {
          command: "echo ok",
          workdir: overrideDir,
        });
        const cwd =
          result?.details && typeof result.details === "object" && "cwd" in result.details
            ? (result.details as { cwd?: string }).cwd
            : undefined;
        expect(cwd).toBeTruthy();
        const [resolvedOutput, resolvedOverride] = await Promise.all([
          fs.realpath(String(cwd)),
          fs.realpath(overrideDir),
        ]);
        expect(resolvedOutput).toBe(resolvedOverride);
      });
    });
  });

  it("rejects @-prefixed absolute paths outside workspace when workspaceOnly is enabled", async () => {
    await withTempDir("openclaw-ws-", async (workspaceDir) => {
      const cfg: OpenClawConfig = { tools: { fs: { workspaceOnly: true } } };
      const tools = createOpenClawCodingTools({ workspaceDir, config: cfg });
      const { readTool } = expectReadWriteEditTools(tools);

      const outsideAbsolute = path.resolve(path.parse(workspaceDir).root, "outside-openclaw.txt");
      await expect(
        readTool.execute("ws-read-at-prefix", { path: `@${outsideAbsolute}` }),
      ).rejects.toThrow(/Path escapes sandbox root/i);
    });
  });

  it("rejects hardlinked file aliases when workspaceOnly is enabled", async () => {
    if (process.platform === "win32") {
      return;
    }
    await withTempDir("openclaw-ws-", async (workspaceDir) => {
      const cfg: OpenClawConfig = { tools: { fs: { workspaceOnly: true } } };
      const tools = createOpenClawCodingTools({ workspaceDir, config: cfg });
      const { readTool, writeTool } = expectReadWriteEditTools(tools);
      const outsidePath = path.join(
        path.dirname(workspaceDir),
        `outside-hardlink-${process.pid}-${Date.now()}.txt`,
      );
      const hardlinkPath = path.join(workspaceDir, "linked.txt");
      await fs.writeFile(outsidePath, "top-secret", "utf8");
      try {
        try {
          await fs.link(outsidePath, hardlinkPath);
        } catch (err) {
          if ((err as NodeJS.ErrnoException).code === "EXDEV") {
            return;
          }
          throw err;
        }
        await expect(readTool.execute("ws-read-hardlink", { path: "linked.txt" })).rejects.toThrow(
          /hardlink|sandbox/i,
        );
        await expect(
          writeTool.execute("ws-write-hardlink", {
            path: "linked.txt",
            content: "pwned",
          }),
        ).rejects.toThrow(/hardlink|sandbox/i);
        expect(await fs.readFile(outsidePath, "utf8")).toBe("top-secret");
      } finally {
        await fs.rm(hardlinkPath, { force: true });
        await fs.rm(outsidePath, { force: true });
      }
    });
  });
});

describeMaybe("sandboxed workspace paths", () => {
  it("uses sandbox workspace for relative read/write/edit", async () => {
    await withTempDir("gensparx-sandbox-", async (sandboxDir) => {
      await withTempDir("gensparx-workspace-", async (workspaceDir) => {
        const sandbox = {
          enabled: true,
          sessionKey: "sandbox:test",
          workspaceDir: sandboxDir,
          agentWorkspaceDir: workspaceDir,
          workspaceAccess: "rw",
          containerName: "gensparx-sbx-test",
          containerWorkdir: "/workspace",
          docker: {
            image: "gensparx-sandbox:bookworm-slim",
            containerPrefix: "gensparx-sbx-",
            workdir: "/workspace",
            readOnlyRoot: true,
            tmpfs: [],
            network: "none",
            user: "1000:1000",
            capDrop: ["ALL"],
            env: { LANG: "C.UTF-8" },
          },
          tools: { allow: [], deny: [] },
        });

        const testFile = "sandbox.txt";
        await fs.writeFile(path.join(sandboxDir, testFile), "sandbox read", "utf8");
        await fs.writeFile(path.join(workspaceDir, testFile), "workspace read", "utf8");

        const tools = createGenSparxCodingTools({ workspaceDir, sandbox });
        const readTool = tools.find((tool) => tool.name === "read");
        const writeTool = tools.find((tool) => tool.name === "write");
        const editTool = tools.find((tool) => tool.name === "edit");

        expect(readTool).toBeDefined();
        expect(writeTool).toBeDefined();
        expect(editTool).toBeDefined();

        const result = await readTool?.execute("sbx-read", { path: testFile });
        expect(getTextContent(result)).toContain("sandbox read");

        await writeTool?.execute("sbx-write", {
          path: "new.txt",
          content: "sandbox write",
        });
        const written = await fs.readFile(path.join(sandboxDir, "new.txt"), "utf8");
        expect(written).toBe("sandbox write");

        await editTool?.execute("sbx-edit", {
          path: "new.txt",
          oldText: "write",
          newText: "edit",
        });
        const edited = await fs.readFile(path.join(sandboxDir, "new.txt"), "utf8");
        expect(edited).toBe("sandbox edit");
      });
    });
  });
});
