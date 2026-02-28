import type { GenSparxPluginApi } from "../../src/plugins/types.js";
import { createLlmTaskTool } from "./src/llm-task-tool.js";

export default function register(api: GenSparxPluginApi) {
  api.registerTool(createLlmTaskTool(api), { optional: true });
}
