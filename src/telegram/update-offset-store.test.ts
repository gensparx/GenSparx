import fs from "node:fs/promises";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { withStateDirEnv } from "../test-helpers/state-dir-env.js";
import {
  deleteTelegramUpdateOffset,
  readTelegramUpdateOffset,
  writeTelegramUpdateOffset,
} from "./update-offset-store.js";

async function withTempStateDir<T>(fn: (dir: string) => Promise<T>) {
  const previous = process.env.GENSPARX_STATE_DIR;
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "gensparx-telegram-"));
  process.env.GENSPARX_STATE_DIR = dir;
  try {
    return await fn(dir);
  } finally {
    if (previous === undefined) {
      delete process.env.GENSPARX_STATE_DIR;
    } else {
      process.env.GENSPARX_STATE_DIR = previous;
    }
    await fs.rm(dir, { recursive: true, force: true });
  }
}

      await deleteTelegramUpdateOffset({ accountId: "default" });
      expect(await readTelegramUpdateOffset({ accountId: "default" })).toBeNull();
    });
  });

  it("does not throw when the offset file does not exist", async () => {
    await withStateDirEnv("openclaw-tg-offset-", async () => {
      await expect(deleteTelegramUpdateOffset({ accountId: "nonexistent" })).resolves.not.toThrow();
    });
  });

  it("only removes the targeted account offset, leaving others intact", async () => {
    await withStateDirEnv("openclaw-tg-offset-", async () => {
      await writeTelegramUpdateOffset({ accountId: "default", updateId: 100 });
      await writeTelegramUpdateOffset({ accountId: "alerts", updateId: 200 });

      await deleteTelegramUpdateOffset({ accountId: "default" });

      expect(await readTelegramUpdateOffset({ accountId: "default" })).toBeNull();
      expect(await readTelegramUpdateOffset({ accountId: "alerts" })).toBe(200);
    });
  });

  it("returns null when stored offset was written by a different bot token", async () => {
    await withStateDirEnv("openclaw-tg-offset-", async () => {
      await writeTelegramUpdateOffset({
        accountId: "default",
        updateId: 321,
        botToken: "111111:token-a",
      });

      expect(
        await readTelegramUpdateOffset({
          accountId: "default",
          botToken: "222222:token-b",
        }),
      ).toBeNull();
      expect(
        await readTelegramUpdateOffset({
          accountId: "default",
          botToken: "111111:token-a",
        }),
      ).toBe(321);
    });
  });

  it("treats legacy offset records without bot identity as stale when token is provided", async () => {
    await withStateDirEnv("openclaw-tg-offset-", async ({ stateDir }) => {
      const legacyPath = path.join(stateDir, "telegram", "update-offset-default.json");
      await fs.mkdir(path.dirname(legacyPath), { recursive: true });
      await fs.writeFile(
        legacyPath,
        `${JSON.stringify({ version: 1, lastUpdateId: 777 }, null, 2)}\n`,
        "utf-8",
      );

      expect(
        await readTelegramUpdateOffset({
          accountId: "default",
          botToken: "333333:token-c",
        }),
      ).toBeNull();
    });
  });
});
