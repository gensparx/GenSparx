#!/usr/bin/env node
import { spawn } from "node:child_process";
import process from "node:process";
import { pathToFileURL } from "node:url";
import { runNodeWatchedPaths } from "./run-node.mjs";

const WATCH_NODE_RUNNER = "scripts/run-node.mjs";

const buildWatchArgs = (args) => [
  ...runNodeWatchedPaths.flatMap((watchPath) => ["--watch-path", watchPath]),
  "--watch-preserve-output",
  WATCH_NODE_RUNNER,
  ...args,
];

export async function runWatchMain(params = {}) {
  const deps = {
    spawn: params.spawn ?? spawn,
    process: params.process ?? process,
    cwd: params.cwd ?? process.cwd(),
    args: params.args ?? process.argv.slice(2),
    env: params.env ? { ...params.env } : { ...process.env },
    now: params.now ?? Date.now,
  };

  const childEnv = { ...deps.env };
  const watchSession = `${deps.now()}-${deps.process.pid}`;
  childEnv.OPENCLAW_WATCH_MODE = "1";
  childEnv.OPENCLAW_WATCH_SESSION = watchSession;
  if (deps.args.length > 0) {
    childEnv.OPENCLAW_WATCH_COMMAND = deps.args.join(" ");
  }

  const watchProcess = deps.spawn(deps.process.execPath, buildWatchArgs(deps.args), {
    cwd: deps.cwd,
    env: childEnv,
    stdio: "inherit",
  });

  let settled = false;
  let onSigInt;
  let onSigTerm;

  const settle = (resolve, code) => {
    if (settled) {
      return;
    }
    settled = true;
    if (onSigInt) {
      deps.process.off("SIGINT", onSigInt);
    }
    if (onSigTerm) {
      deps.process.off("SIGTERM", onSigTerm);
    }
    resolve(code);
  };

  return await new Promise((resolve) => {
    onSigInt = () => {
      if (typeof watchProcess.kill === "function") {
        watchProcess.kill("SIGTERM");
      }
      settle(resolve, 130);
    };
    onSigTerm = () => {
      if (typeof watchProcess.kill === "function") {
        watchProcess.kill("SIGTERM");
      }
      settle(resolve, 143);
    };

    deps.process.on("SIGINT", onSigInt);
    deps.process.on("SIGTERM", onSigTerm);

    watchProcess.on("exit", (code, signal) => {
      if (signal) {
        settle(resolve, 1);
        return;
      }
      settle(resolve, code ?? 1);
    });
  });
}

const isMainModule = (() => {
  const entry = process.argv[1];
  if (!entry) {
    return false;
  }
  try {
    return import.meta.url === pathToFileURL(entry).href;
  } catch {
    return false;
  }
})();

if (isMainModule) {
  runWatchMain()
    .then((code) => {
      process.exitCode = code;
    })
    .catch((error) => {
      console.error(error);
      process.exitCode = 1;
    });
}
