import type { GensparxPluginApi } from "gensparx/plugin-sdk/nextcloud-talk";
import { emptyPluginConfigSchema } from "gensparx/plugin-sdk/nextcloud-talk";
import { nextcloudTalkPlugin } from "./src/channel.js";
import { setNextcloudTalkRuntime } from "./src/runtime.js";

const plugin = {
  id: "nextcloud-talk",
  name: "Nextcloud Talk",
  description: "Nextcloud Talk channel plugin",
  configSchema: emptyPluginConfigSchema(),
  register(api: GensparxPluginApi) {
    setNextcloudTalkRuntime(api.runtime);
    api.registerChannel({ plugin: nextcloudTalkPlugin });
  },
};

export default plugin;
