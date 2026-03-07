import type { GensparxPluginApi } from "gensparx/plugin-sdk/signal";
import { emptyPluginConfigSchema } from "gensparx/plugin-sdk/signal";
import { signalPlugin } from "./src/channel.js";
import { setSignalRuntime } from "./src/runtime.js";

const plugin = {
  id: "signal",
  name: "Signal",
  description: "Signal channel plugin",
  configSchema: emptyPluginConfigSchema(),
  register(api: GensparxPluginApi) {
    setSignalRuntime(api.runtime);
    api.registerChannel({ plugin: signalPlugin });
  },
};

export default plugin;
