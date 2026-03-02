const { spawnSync } = require("node:child_process");
const { mkdtempSync, writeFileSync, mkdirSync, readFileSync } = require("node:fs");
const { tmpdir } = require("node:os");
const { join } = require("node:path");

const toWslPath = (p) => `/mnt/${p[0].toLowerCase()}/${p.slice(3).replace(/\\/g, "/")}`;
const shellQuote = (value) => `'${value.replace(/'/g, `'"'"'`)}'`;

function run(withApt) {
  const rootDir = mkdtempSync(join(tmpdir(), "gs-docker-setup-"));
  const script = readFileSync("docker-setup.sh", "utf8");
  writeFileSync(join(rootDir, "docker-setup.sh"), script, { mode: 0o755 });
  writeFileSync(join(rootDir, "Dockerfile"), "FROM scratch\n");
  writeFileSync(
    join(rootDir, "docker-compose.yml"),
    "services:\n  gensparx-gateway:\n    image: noop\n  gensparx-cli:\n    image: noop\n",
  );
  const binDir = join(rootDir, "bin");
  mkdirSync(binDir);
  const stub = [
    "#!/usr/bin/env bash",
    "set -euo pipefail",
    'log="$DOCKER_STUB_LOG"',
    'if [[ "${1:-}" == "compose" && "${2:-}" == "version" ]]; then',
    "  exit 0",
    "fi",
    'if [[ "${1:-}" == "build" ]]; then',
    '  echo "build $*" >>"$log"',
    "  exit 0",
    "fi",
    'if [[ "${1:-}" == "compose" ]]; then',
    '  echo "compose $*" >>"$log"',
    "  exit 0",
    "fi",
    'echo "unknown $*" >>"$log"',
    "exit 0",
  ].join("\n");
  const logPath = join(rootDir, "docker-stub.log");
  writeFileSync(join(binDir, "docker"), stub, { mode: 0o755 });
  writeFileSync(logPath, "");

  const wslRoot = toWslPath(rootDir);
  const wslBin = toWslPath(binDir);
  const parts = [
    `DOCKER_STUB_LOG=${shellQuote(toWslPath(logPath))}`,
    `PATH=${wslBin}:$PATH`,
    `GENSPARX_GATEWAY_TOKEN=${shellQuote("test-token")}`,
    `GENSPARX_CONFIG_DIR=${shellQuote(toWslPath(join(rootDir, "config")))}`,
    `GENSPARX_WORKSPACE_DIR=${shellQuote(toWslPath(join(rootDir, "gensparx")))}`,
  ];
  if (withApt) {
    parts.push(`GENSPARX_DOCKER_APT_PACKAGES=${shellQuote("ffmpeg build-essential")}`);
    parts.push(`GENSPARX_EXTRA_MOUNTS=${shellQuote("")}`);
    parts.push(`GENSPARX_HOME_VOLUME=${shellQuote("")}`);
  }
  const envInline = parts.join(" ");
  const cmd = `cd ${shellQuote(wslRoot)} && ${envInline} ./docker-setup.sh`;
  const res = spawnSync("bash", ["-lc", cmd], { env: process.env, encoding: "utf8" });
  return {
    status: res.status,
    stdout: res.stdout,
    stderr: res.stderr,
    log: readFileSync(logPath, "utf8"),
    cmd,
  };
}

console.log(run(false));
console.log(run(true));
