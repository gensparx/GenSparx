const { spawnSync } = require("node:child_process");
const { mkdtempSync, writeFileSync, mkdirSync, readFileSync } = require("node:fs");
const { tmpdir } = require("node:os");
const { join } = require("node:path");

const rootDir = mkdtempSync(join(tmpdir(), "gs-docker-"));
const script = readFileSync("docker-setup.sh", "utf8");
const scriptPath = join(rootDir, "docker-setup.sh");
writeFileSync(scriptPath, script, { mode: 0o755 });
writeFileSync(join(rootDir, "Dockerfile"), "FROM scratch\n");
writeFileSync(
  join(rootDir, "docker-compose.yml"),
  "services:\n  gensparx-gateway:\n    image: noop\n  gensparx-cli:\n    image: noop\n",
);
const bin = join(rootDir, "bin");
mkdirSync(bin);
const stub =
  "#!/usr/bin/env bash\n" +
  "set -euo pipefail\n" +
  'log="$DOCKER_STUB_LOG"\n' +
  'if [[ "${1:-}" == "compose" && "${2:-}" == "version" ]]; then\n' +
  "  exit 0\n" +
  "fi\n" +
  'if [[ "${1:-}" == "build" ]]; then\n' +
  '  echo "build $*" >>"$log"\n' +
  "  exit 0\n" +
  "fi\n" +
  'if [[ "${1:-}" == "compose" ]]; then\n' +
  '  echo "compose $*" >>"$log"\n' +
  "  exit 0\n" +
  "fi\n" +
  'echo "unknown $*" >>"$log"\n' +
  "exit 0\n";
const logPath = join(rootDir, "docker-stub.log");
writeFileSync(join(bin, "docker"), stub, { mode: 0o755 });
writeFileSync(logPath, "");
const env = {
  ...process.env,
  PATH: `${bin}:${process.env.PATH ?? ""}`,
  DOCKER_STUB_LOG: logPath,
  GENSPARX_GATEWAY_TOKEN: "test-token",
  GENSPARX_CONFIG_DIR: join(rootDir, "config"),
  GENSPARX_WORKSPACE_DIR: join(rootDir, "gensparx"),
};
const res = spawnSync("bash", [scriptPath], { cwd: rootDir, env, encoding: "utf8" });
console.log({ status: res.status });
console.log("stdout:\n", res.stdout);
console.log("stderr:\n", res.stderr);
console.log("log:\n", readFileSync(logPath, "utf8"));
