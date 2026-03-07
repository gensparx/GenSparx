import type { GensparxPluginApi } from "gensparx/plugin-sdk/whatsapp";
import { emptyPluginConfigSchema } from "gensparx/plugin-sdk/whatsapp";
import { whatsappPlugin } from "./src/channel.js";
import { setWhatsAppRuntime } from "./src/runtime.js";

const plugin = {
  id: "whatsapp",
  name: "WhatsApp",
  description: "WhatsApp channel plugin",
  configSchema: emptyPluginConfigSchema(),
  register(api: GensparxPluginApi) {
    setWhatsAppRuntime(api.runtime);
    api.registerChannel({ plugin: whatsappPlugin });
  },
};

export default plugin;
