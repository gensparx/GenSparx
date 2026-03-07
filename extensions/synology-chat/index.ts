import type { GensparxPluginApi } from "gensparx/plugin-sdk/synology-chat";
import { emptyPluginConfigSchema } from "gensparx/plugin-sdk/synology-chat";
import { createSynologyChatPlugin } from "./src/channel.js";
import { setSynologyRuntime } from "./src/runtime.js";

const plugin = {
  id: "synology-chat",
  name: "Synology Chat",
  description: "Native Synology Chat channel plugin for Gensparx",
  configSchema: emptyPluginConfigSchema(),
  register(api: GensparxPluginApi) {
    setSynologyRuntime(api.runtime);
    api.registerChannel({ plugin: createSynologyChatPlugin() });
  },
};

export default plugin;
