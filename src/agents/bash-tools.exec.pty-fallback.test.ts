import { afterEach, expect, test, vi } from "vitest";
import { resetProcessRegistryForTests } from "./bash-process-registry.js";
import { createExecTool } from "./bash-tools.exec.js";

vi.mock("@lydell/node-pty", () => ({
  spawn: () => {
    const err = new Error("spawn EBADF");
    (err as NodeJS.ErrnoException).code = "EBADF";
    throw err;
  },
}));

afterEach(() => {
  resetProcessRegistryForTests();
  vi.clearAllMocks();
});

test("exec falls back when PTY spawn fails", async () => {
  vi.doMock("@lydell/node-pty", () => ({
    spawn: () => {
      const err = new Error("spawn EBADF");
      (err as NodeJS.ErrnoException).code = "EBADF";
      throw err;
    },
  }));

  const { createExecTool } = await import("./bash-tools.exec");
  const tool = createExecTool({ allowBackground: false });
  const command = process.platform === "win32" ? "echo ok" : "printf ok";
  const result = await tool.execute("toolcall", {
    command,
    pty: true,
  });

  expect(result.details.status).toBe("completed");
  const text = result.content?.find((item) => item.type === "text")?.text ?? "";
  expect(text).toContain("ok");
  expect(text).toContain("PTY spawn failed");
});
