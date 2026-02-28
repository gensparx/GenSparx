import path from "node:path";

export const DEFAULT_CLI_NAME = "gensparx";

const CANONICAL_CLI_NAMES = new Set(["gensparx", "openclaw"]);
const CLI_PREFIX_RE = /^(?:((?:pnpm|npm|bunx|npx)\s+))?(gensparx|openclaw)\b/;

function normalizeBase(name: string): string {
  // drop common script extensions so `gensparx.mjs` and `openclaw.mjs` resolve correctly
  return name.replace(/\.(?:m?js)$/i, "");
}

export function resolveCliName(argv: string[] = process.argv): string {
  const argv1 = argv[1];
  if (!argv1) {
    return DEFAULT_CLI_NAME;
  }
  const base = normalizeBase(path.basename(argv1).trim());
  if (CANONICAL_CLI_NAMES.has(base)) {
    return base;
  }
  return DEFAULT_CLI_NAME;
}

export function replaceCliName(command: string, cliName = resolveCliName()): string {
  if (!command.trim()) {
    return command;
  }
  if (!CLI_PREFIX_RE.test(command)) {
    return command;
  }
  return command.replace(CLI_PREFIX_RE, (_match, runner: string | undefined) => {
    return `${runner ?? ""}${cliName}`;
  });
}
