import type { AnyAgentTool, GensparxPluginApi } from "gensparx/plugin-sdk/llm-task";
import { createLlmTaskTool } from "./src/llm-task-tool.js";

export default function register(api: GensparxPluginApi) {
  api.registerTool(createLlmTaskTool(api) as unknown as AnyAgentTool, { optional: true });
}
