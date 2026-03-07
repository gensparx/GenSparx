// Narrow plugin-sdk surface for the bundled llm-task plugin.
// Keep this list additive and scoped to symbols used under extensions/llm-task.

export { resolvePreferredGensparxTmpDir } from "../infra/tmp-gensparx-dir.js";
export type { AnyAgentTool, GensparxPluginApi } from "../plugins/types.js";
