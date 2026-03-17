export const PROJECT_NAME = "gensparx" as const;

export const LEGACY_PROJECT_NAMES = ["openclaw", "clawdbot", "moltbot", "moldbot"] as const;

export const MANIFEST_KEY = PROJECT_NAME;

export const LEGACY_MANIFEST_KEYS = LEGACY_PROJECT_NAMES;

export const LEGACY_PLUGIN_MANIFEST_FILENAMES = [
  "openclaw.plugin.json",
  "clawdbot.plugin.json",
  "moltbot.plugin.json",
  "moldbot.plugin.json",
] as const;

export const LEGACY_CANVAS_HANDLER_NAMES = ["gensparxCanvasA2UIAction"] as const;
export const LEGACY_CANVAS_API_GLOBAL_NAMES = ["gensparxA2UI"] as const;

export const MACOS_APP_SOURCES_DIR = "apps/macos/Sources/Gensparx" as const;

export const LEGACY_MACOS_APP_SOURCES_DIRS = ["apps/macos/Sources/GenSparx"] as const;
