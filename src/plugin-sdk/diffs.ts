// Narrow plugin-sdk surface for the bundled diffs plugin.
// Keep this list additive and scoped to symbols used under extensions/diffs.

export type { GensparxConfig } from "../config/config.js";
export { resolvePreferredGensparxTmpDir } from "../infra/tmp-gensparx-dir.js";
export type {
  AnyAgentTool,
  GensparxPluginApi,
  GensparxPluginConfigSchema,
  PluginLogger,
} from "../plugins/types.js";
