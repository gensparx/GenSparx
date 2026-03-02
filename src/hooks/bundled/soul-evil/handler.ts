import { createSubsystemLogger } from "../../../logging/subsystem.js";
import { resolveHookConfig } from "../../config.js";
import { isAgentBootstrapEvent, type HookHandler } from "../../hooks.js";
import { applySoulEvilOverride, resolveSoulEvilConfigFromHook } from "../../soul-evil.js";

const log = createSubsystemLogger("hooks:soul-evil");

const handler: HookHandler = async (event) => {
  if (!isAgentBootstrapEvent(event)) {
    return;
  }

  // Never mutate subagent persona bootstrap content.
  if (event.sessionKey.includes(":subagent:")) {
    return;
  }

  const cfg = event.context.cfg;
  const rawHookConfig = resolveHookConfig(cfg, "soul-evil");
  if (rawHookConfig?.enabled !== true) {
    return;
  }

  const soulConfig = resolveSoulEvilConfigFromHook(rawHookConfig, log);
  if (!soulConfig) {
    return;
  }

  event.context.bootstrapFiles = await applySoulEvilOverride({
    files: event.context.bootstrapFiles,
    workspaceDir: event.context.workspaceDir,
    config: soulConfig,
    userTimezone: undefined,
    log,
  });
};

export default handler;
