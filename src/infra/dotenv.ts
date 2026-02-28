import dotenv from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { resolveConfigDir } from "../utils.js";

export function loadDotEnv(opts?: { quiet?: boolean; cwd?: string }) {
  const quiet = opts?.quiet ?? true;

  // Load from process CWD first (dotenv default), or from an explicit cwd override.
  const cwd = opts?.cwd?.trim();
  if (cwd) {
    dotenv.config({ quiet, path: path.join(cwd, ".env") });
  } else {
    dotenv.config({ quiet });
  }

  // Then load global fallback: ~/.gensparx/.env (or OPENCLAW_STATE_DIR/.env),
  // without overriding any env vars already present.
  const globalEnvPath = path.join(resolveConfigDir(process.env), ".env");
  if (!fs.existsSync(globalEnvPath)) {
    return;
  }

  dotenv.config({ quiet, path: globalEnvPath, override: false });
}
