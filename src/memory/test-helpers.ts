import { createRequire } from "node:module";

type BetterSqlite3Like = new (filename: string) => {
  prepare: (sql: string) => { run: () => void };
  close: () => void;
};

type DescribeLike = {
  (...args: unknown[]): unknown;
  skip: (...args: unknown[]) => unknown;
};

/**
 * Detect whether SQLite FTS5 is available in the current better-sqlite3 build.
 */
export function hasFts5(): boolean {
  try {
    const require = createRequire(import.meta.url);
    const Database = require("better-sqlite3") as BetterSqlite3Like;
    const db = new Database(":memory:");
    db.prepare("CREATE VIRTUAL TABLE temp.ftstest USING fts5(content);").run();
    db.close();
    return true;
  } catch {
    return false;
  }
}

/**
 * Helper for tests: returns describe.skip when FTS5 is missing, otherwise describe.
 */
export const describeIfFts5 = <T extends DescribeLike>(baseDescribe: T): T =>
  hasFts5() ? baseDescribe : (baseDescribe.skip as T);
