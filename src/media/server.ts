import type { Server } from "node:http";
import express, { type Express } from "express";
import fs from "node:fs/promises";
import path from "node:path";
import { danger } from "../globals.js";
import { defaultRuntime, type RuntimeEnv } from "../runtime.js";
import { detectMime } from "./mime.js";
import { cleanOldMedia, getMediaDir, MEDIA_MAX_BYTES } from "./store.js";

const DEFAULT_TTL_MS = 2 * 60 * 1000;
const MAX_MEDIA_ID_CHARS = 200;
const MAX_MEDIA_BYTES = MEDIA_MAX_BYTES;

const isValidMediaId = (id: string) => {
  if (!id) {
    return false;
  }
  if (id.length > MAX_MEDIA_ID_CHARS) {
    return false;
  }
  if (id === "." || id === "..") {
    return false;
  }
  // Only allow simple filenames to avoid traversal/whitespace surprises.
  return /^[A-Za-z0-9._-]+$/.test(id);
};

export function attachMediaRoutes(
  app: Express,
  ttlMs = DEFAULT_TTL_MS,
  _runtime: RuntimeEnv = defaultRuntime,
) {
  const mediaDir = getMediaDir();

  app.get("/media/:id", async (req, res) => {
    const id = req.params.id;
    if (!isValidMediaId(id)) {
      res.status(400).send("invalid path");
      return;
    }
    try {
      const rootReal = await fs.realpath(mediaDir);
      const rootWithSep = rootReal.endsWith(path.sep) ? rootReal : `${rootReal}${path.sep}`;
      const resolved = path.resolve(rootWithSep, id);
      let realPath: string;
      try {
        realPath = await fs.realpath(resolved);
      } catch {
        res.status(404).send("not found");
        return;
      }
      if (!realPath.startsWith(rootWithSep)) {
        res.status(400).send("invalid path");
        return;
      }
      const stat = await fs.stat(realPath);
      if (!stat.isFile()) {
        res.status(400).send("invalid path");
        return;
      }
      if (stat.size > MAX_MEDIA_BYTES) {
        res.status(413).send("too large");
        return;
      }
      if (Date.now() - stat.mtimeMs > ttlMs) {
        await fs.rm(realPath).catch(() => {});
        res.status(410).send("expired");
        return;
      }
      const data = await fs.readFile(realPath);
      const mime = await detectMime({ buffer: data, filePath: realPath });
      if (mime) {
        res.type(mime);
      }
      res.send(data);
      // best-effort single-use cleanup after response ends
      res.on("finish", () => {
        setTimeout(() => {
          fs.rm(realPath).catch(() => {});
        }, 50);
      });
    } catch {
      res.status(404).send("not found");
    }
  });

  // periodic cleanup
  setInterval(() => {
    void cleanOldMedia(ttlMs);
  }, ttlMs).unref();
}

export async function startMediaServer(
  port: number,
  ttlMs = DEFAULT_TTL_MS,
  runtime: RuntimeEnv = defaultRuntime,
): Promise<Server> {
  const app = express();
  attachMediaRoutes(app, ttlMs, runtime);
  return await new Promise((resolve, reject) => {
    const server = app.listen(port);
    server.once("listening", () => resolve(server));
    server.once("error", (err) => {
      runtime.error(danger(`Media server failed: ${String(err)}`));
      reject(err);
    });
  });
}
