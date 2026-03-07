import type { ChannelPlugin, GensparxPluginApi } from "gensparx/plugin-sdk/telegram";
import { emptyPluginConfigSchema } from "gensparx/plugin-sdk/telegram";
import { telegramPlugin } from "./src/channel.js";
import { setTelegramRuntime } from "./src/runtime.js";

const plugin = {
  id: "telegram",
  name: "Telegram",
  description: "Telegram channel plugin",
  configSchema: emptyPluginConfigSchema(),
  register(api: GensparxPluginApi) {
    setTelegramRuntime(api.runtime);
    api.registerChannel({ plugin: telegramPlugin as ChannelPlugin });
  },
};

export default plugin;
