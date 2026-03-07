import type {
  AnyAgentTool,
  GensparxPluginApi,
  GensparxPluginToolFactory,
} from "gensparx/plugin-sdk/lobster";
import { createLobsterTool } from "./src/lobster-tool.js";

export default function register(api: GensparxPluginApi) {
  api.registerTool(
    ((ctx) => {
      if (ctx.sandboxed) {
        return null;
      }
      return createLobsterTool(api) as AnyAgentTool;
    }) as GensparxPluginToolFactory,
    { optional: true },
  );
}
