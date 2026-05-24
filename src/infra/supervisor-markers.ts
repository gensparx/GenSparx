import {
  GATEWAY_LAUNCH_AGENT_LABEL,
  GATEWAY_SERVICE_KIND,
  resolveGatewayLaunchAgentLabel,
} from "../daemon/constants.js";

export type RespawnSupervisor = "launchd" | "systemd" | "schtasks";

const SUPERVISOR_HINTS = {
  launchd: ["GENSPARX_LAUNCHD_LABEL"],
  systemd: ["GENSPARX_SYSTEMD_UNIT", "INVOCATION_ID", "SYSTEMD_EXEC_PID", "JOURNAL_STREAM"],
  schtasks: ["GENSPARX_SERVICE_MARKER"],
} as const;

export const SUPERVISOR_HINT_ENV_VARS = [
  "LAUNCH_JOB_LABEL",
  "LAUNCH_JOB_NAME",
  "XPC_SERVICE_NAME",
  ...SUPERVISOR_HINTS.launchd,
  ...SUPERVISOR_HINTS.systemd,
  ...SUPERVISOR_HINTS.schtasks,
] as const;

function hasAnyHint(env: NodeJS.ProcessEnv, keys: readonly string[]): boolean {
  return keys.some((key) => {
    const value = env[key];
    return typeof value === "string" && value.trim().length > 0;
  });
}

function isCurrentGatewayLaunchdJob(env: NodeJS.ProcessEnv): boolean {
  const expectedLabel = resolveGatewayLaunchAgentLabel(env.GENSPARX_PROFILE);
  if (
    [env.LAUNCH_JOB_LABEL, env.LAUNCH_JOB_NAME].some((value) => value?.trim() === expectedLabel)
  ) {
    return true;
  }
  return env.XPC_SERVICE_NAME?.trim() === GATEWAY_LAUNCH_AGENT_LABEL;
}

export function detectRespawnSupervisor(
  env: NodeJS.ProcessEnv = process.env,
  platform: NodeJS.Platform = process.platform,
): RespawnSupervisor | null {
  if (platform === "darwin") {
    return hasAnyHint(env, SUPERVISOR_HINTS.launchd) || isCurrentGatewayLaunchdJob(env)
      ? "launchd"
      : null;
  }
  if (platform === "linux") {
    return hasAnyHint(env, SUPERVISOR_HINTS.systemd) ? "systemd" : null;
  }
  if (platform === "win32") {
    const marker = env.GENSPARX_SERVICE_MARKER?.trim();
    return marker && marker === GATEWAY_SERVICE_KIND ? "schtasks" : null;
  }
  return null;
}

export function hasSupervisorHint(env: NodeJS.ProcessEnv = process.env): boolean {
  return detectRespawnSupervisor(env) !== null;
}
