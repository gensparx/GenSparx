import { spawn } from "node:child_process";
import path from "node:path";
import process from "node:process";
import { afterEach, describe, expect, it } from "vitest";
import { withEnvAsync } from "../test-utils/env.js";
import { attachChildProcessBridge } from "./child-process-bridge.js";
import { runCommandWithTimeout, shouldSpawnWithShell } from "./exec.js";

const CHILD_READY_TIMEOUT_MS = 4_000;
const CHILD_EXIT_TIMEOUT_MS = 4_000;

function waitForLine(
  stream: NodeJS.ReadableStream,
  timeoutMs = CHILD_READY_TIMEOUT_MS,
): Promise<string> {
  return new Promise((resolve, reject) => {
    let buffer = "";

    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error("timeout waiting for line"));
    }, timeoutMs);

    const onData = (chunk: Buffer | string): void => {
      buffer += chunk.toString();
      const idx = buffer.indexOf("\n");
      if (idx >= 0) {
        const line = buffer.slice(0, idx).trim();
        cleanup();
        resolve(line);
      }
    };

    const onError = (err: unknown): void => {
      cleanup();
      reject(err);
    };

    const cleanup = (): void => {
      clearTimeout(timeout);
      stream.off("data", onData);
      stream.off("error", onError);
    };

    stream.on("data", onData);
    stream.on("error", onError);
  });
}

describe("runCommandWithTimeout", () => {
  it("passes env overrides to child", async () => {
    const result = await runCommandWithTimeout(
      [process.execPath, "-e", 'process.stdout.write(process.env.GENSPARX_TEST_ENV ?? "")'],
      {
        timeoutMs: 5_000,
        env: { GENSPARX_TEST_ENV: "ok" },
      },
    );

    expect(result.code).toBe(0);
    expect(result.stdout).toBe("ok");
  });

  it("merges custom env with process.env", async () => {
    const previous = process.env.GENSPARX_BASE_ENV;
    process.env.GENSPARX_BASE_ENV = "base";
    try {
      const result = await runCommandWithTimeout(
        [
          process.execPath,
          "-e",
          'process.stdout.write((process.env.GENSPARX_BASE_ENV ?? "") + "|" + (process.env.GENSPARX_TEST_ENV ?? ""))',
        ],
        {
          timeoutMs: 5_000,
          env: { GENSPARX_TEST_ENV: "ok" },
        },
      );

      expect(result.code).toBe(0);
      expect(result.stdout).toBe("base|ok");
    } finally {
      if (previous === undefined) {
        delete process.env.GENSPARX_BASE_ENV;
      } else {
        process.env.GENSPARX_BASE_ENV = previous;
      }
    }
  });
});
