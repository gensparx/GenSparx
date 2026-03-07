#!/usr/bin/env node
import { spawn } from "node:child_process";

const args = process.argv.slice(2);
const forwarded = args.length > 0 ? args : ["--help"];

const child = spawn(process.execPath, ["scripts/run-node.mjs", ...forwarded], {
  stdio: "inherit",
  env: process.env,
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.exit(1);
  }
  process.exit(code ?? 1);
});
