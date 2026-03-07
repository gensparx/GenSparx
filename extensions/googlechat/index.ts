import type { GensparxPluginApi } from "gensparx/plugin-sdk/googlechat";
import { emptyPluginConfigSchema } from "gensparx/plugin-sdk/googlechat";
import { googlechatDock, googlechatPlugin } from "./src/channel.js";
import { setGoogleChatRuntime } from "./src/runtime.js";

const plugin = {
  id: "googlechat",
  name: "Google Chat",
  description: "gensparx Google Chat channel plugin",
  configSchema: emptyPluginConfigSchema(),
  register(api: GensparxPluginApi) {
    setGoogleChatRuntime(api.runtime);
    api.registerChannel({ plugin: googlechatPlugin, dock: googlechatDock });
  },
};

export default plugin;
