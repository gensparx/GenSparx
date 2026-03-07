#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const hashFile = path.join(rootDir, "src", "canvas-host", "a2ui", ".bundle.hash");
const outputFile = path.join(rootDir, "src", "canvas-host", "a2ui", "a2ui.bundle.js");
const a2uiRendererDir = path.join(rootDir, "vendor", "a2ui", "renderers", "lit");
const a2uiAppDir = path.join(rootDir, "apps", "shared", "GensparxKit", "Tools", "CanvasA2UI");

const inputPaths = [
  path.join(rootDir, "package.json"),
  path.join(rootDir, "pnpm-lock.yaml"),
  a2uiRendererDir,
  a2uiAppDir,
];

function fail(message) {
  console.error(message);
  console.error("A2UI bundling failed. Re-run with: pnpm canvas:a2ui:bundle");
  console.error("If this persists, verify pnpm deps and try again.");
  process.exit(1);
}

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: rootDir,
    stdio: "inherit",
    shell: process.platform === "win32",
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

async function walk(entryPath, files) {
  const stat = await fs.stat(entryPath);
  if (stat.isDirectory()) {
    const entries = await fs.readdir(entryPath);
    for (const entry of entries) {
      await walk(path.join(entryPath, entry), files);
    }
    return;
  }
  files.push(entryPath);
}

function normalize(p) {
  return p.split(path.sep).join("/");
}

async function computeHash(paths) {
  const files = [];
  for (const inputPath of paths) {
    await walk(inputPath, files);
  }
  files.sort((a, b) => normalize(a).localeCompare(normalize(b)));
  const hash = createHash("sha256");
  for (const filePath of files) {
    hash.update(normalize(path.relative(rootDir, filePath)));
    hash.update("\0");
    hash.update(await fs.readFile(filePath));
    hash.update("\0");
  }
  return hash.digest("hex");
}

async function main() {
  if (!existsSync(a2uiRendererDir) || !existsSync(a2uiAppDir)) {
    if (existsSync(outputFile)) {
      console.log("A2UI sources missing; keeping prebuilt bundle.");
      return;
    }
    fail(`A2UI sources missing and no prebuilt bundle found at: ${outputFile}`);
  }

  const currentHash = await computeHash(inputPaths);
  if (existsSync(hashFile) && existsSync(outputFile)) {
    const previousHash = (await fs.readFile(hashFile, "utf8")).trim();
    if (previousHash === currentHash) {
      console.log("A2UI bundle up to date; skipping.");
      return;
    }
  }

  run("pnpm", [
    "-s",
    "exec",
    "tsc",
    "-p",
    path.join("vendor", "a2ui", "renderers", "lit", "tsconfig.json"),
  ]);
  run("pnpm", [
    "-s",
    "dlx",
    "rolldown",
    "-c",
    path.join("apps", "shared", "GensparxKit", "Tools", "CanvasA2UI", "rolldown.config.mjs"),
  ]);
  await fs.writeFile(hashFile, `${currentHash}\n`, "utf8");
}

main().catch((error) => {
  fail(String(error));
});
