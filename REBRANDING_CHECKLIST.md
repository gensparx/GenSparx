# OpenClaw → GenSparx Rebranding Checklist

## Complete Mapping of "openclaw" to "gensparx" References

This document provides a comprehensive list of all locations in the codebase where "openclaw" needs to be changed to "gensparx" for a complete rebranding.

---

## 1. PACKAGE & NPM (CRITICAL)

| Category                | Current Value                     | New Value                         | Files Affected                              | Priority     |
| ----------------------- | --------------------------------- | --------------------------------- | ------------------------------------------- | ------------ |
| Root npm package        | `"name": "openclaw"`              | `"name": "gensparx"`              | `package.json`                              | **Critical** |
| npm bin entry           | `"openclaw": "openclaw.mjs"`      | `"gensparx": "gensparx.mjs"`      | `package.json`                              | **Critical** |
| npm bin file            | `openclaw.mjs`                    | `gensparx.mjs`                    | Root dir (rename file)                      | **Critical** |
| npm exports             | `"./cli-entry": "./openclaw.mjs"` | `"./cli-entry": "./gensparx.mjs"` | `package.json`                              | **Critical** |
| Extension packages      | `@openclaw/*`                     | `@gensparx/*`                     | All `extensions/*/package.json` (30+ files) | **Critical** |
| Compat package clawdbot | References to `openclaw`          | References to `gensparx`          | `packages/clawdbot/package.json`            | High         |
| Compat package moltbot  | References to `openclaw`          | References to `gensparx`          | `packages/moltbot/package.json`             | High         |

---

## 2. CLI COMMANDS (CRITICAL)

| Category           | Current Value                  | New Value                      | Files Affected                     | Priority     |
| ------------------ | ------------------------------ | ------------------------------ | ---------------------------------- | ------------ |
| CLI command prefix | `openclaw` (all commands)      | `gensparx`                     | Docs, README, scripts, tests       | **Critical** |
| Examples           | `openclaw onboard`             | `gensparx onboard`             | README.md, all .md docs            | High         |
| Examples           | `openclaw gateway ...`         | `gensparx gateway ...`         | README.md, docs/\*                 | High         |
| Examples           | `openclaw agent ...`           | `gensparx agent ...`           | README.md, docs/\*                 | High         |
| Examples           | `openclaw message send ...`    | `gensparx message send ...`    | README.md, docs/\*                 | High         |
| Examples           | `openclaw doctor`              | `gensparx doctor`              | README.md, docs/\*                 | High         |
| Examples           | `openclaw pairing approve ...` | `gensparx pairing approve ...` | README.md, docs/\*                 | High         |
| Examples           | `openclaw update ...`          | `gensparx update ...`          | README.md, docs/\*                 | High         |
| Examples           | `pnpm openclaw`                | `pnpm gensparx`                | package.json scripts, README, docs | High         |
| Process pattern    | `openclaw.*gateway`            | `gensparx.*gateway`            | `scripts/restart-mac.sh`           | High         |

---

## 3. ENVIRONMENT VARIABLES (CRITICAL)

| Category                | Current Value                       | New Value                           | Files Affected                                                   | Priority     |
| ----------------------- | ----------------------------------- | ----------------------------------- | ---------------------------------------------------------------- | ------------ |
| Gateway token           | `OPENCLAW_GATEWAY_TOKEN`            | `GENSPARX_GATEWAY_TOKEN`            | Scripts, tests, docs                                             | **Critical** |
| Config path             | `OPENCLAW_CONFIG_PATH`              | `GENSPARX_CONFIG_PATH`              | `test/test-env.ts`, scripts                                      | High         |
| State directory         | `OPENCLAW_STATE_DIR`                | `GENSPARX_STATE_DIR`                | `test/test-env.ts`, scripts                                      | High         |
| Gateway port            | `OPENCLAW_GATEWAY_PORT`             | `GENSPARX_GATEWAY_PORT`             | `test/test-env.ts`                                               | High         |
| Live test flag          | `OPENCLAW_LIVE_TEST`                | `GENSPARX_LIVE_TEST`                | `test/test-env.ts`, `package.json`                               | High         |
| Gateway live test       | `OPENCLAW_LIVE_GATEWAY`             | `GENSPARX_LIVE_GATEWAY`             | `test/test-env.ts`                                               | High         |
| Test fast flag          | `OPENCLAW_TEST_FAST`                | `GENSPARX_TEST_FAST`                | `test/test-env.ts`                                               | High         |
| Bridge enabled          | `OPENCLAW_BRIDGE_ENABLED`           | `GENSPARX_BRIDGE_ENABLED`           | `test/test-env.ts`                                               | High         |
| Bridge host             | `OPENCLAW_BRIDGE_HOST`              | `GENSPARX_BRIDGE_HOST`              | `test/test-env.ts`                                               | High         |
| Bridge port             | `OPENCLAW_BRIDGE_PORT`              | `GENSPARX_BRIDGE_PORT`              | `test/test-env.ts`                                               | High         |
| Canvas host port        | `OPENCLAW_CANVAS_HOST_PORT`         | `GENSPARX_CANVAS_HOST_PORT`         | `test/test-env.ts`                                               | High         |
| Test home               | `OPENCLAW_TEST_HOME`                | `GENSPARX_TEST_HOME`                | `test/test-env.ts`                                               | High         |
| Control UI base         | `OPENCLAW_CONTROL_UI_BASE_PATH`     | `GENSPARX_CONTROL_UI_BASE_PATH`     | `ui/vite.config.ts`, UI files                                    | High         |
| Tmux socket dir         | `OPENCLAW_TMUX_SOCKET_DIR`          | `GENSPARX_TMUX_SOCKET_DIR`          | `skills/tmux/SKILL.md`, script                                   | Medium       |
| Skip channels           | `OPENCLAW_SKIP_CHANNELS`            | `GENSPARX_SKIP_CHANNELS`            | `package.json`, `test/test-env.ts`                               | High         |
| Skip Gmail watcher      | `OPENCLAW_SKIP_GMAIL_WATCHER`       | `GENSPARX_SKIP_GMAIL_WATCHER`       | `test/test-env.ts`                                               | Medium       |
| Skip cron               | `OPENCLAW_SKIP_CRON`                | `GENSPARX_SKIP_CRON`                | `test/test-env.ts`                                               | Medium       |
| Skip canvas host        | `OPENCLAW_SKIP_CANVAS_HOST`         | `GENSPARX_SKIP_CANVAS_HOST`         | `test/test-env.ts`                                               | Medium       |
| E2E models              | `OPENCLAW_E2E_MODELS`               | `GENSPARX_E2E_MODELS`               | `package.json` test scripts                                      | High         |
| Profile env             | `OPENCLAW_PROFILE`                  | `GENSPARX_PROFILE`                  | `package.json`                                                   | Medium       |
| Gateway wait seconds    | `OPENCLAW_GATEWAY_WAIT_SECONDS`     | `GENSPARX_GATEWAY_WAIT_SECONDS`     | `scripts/restart-mac.sh`                                         | Low          |
| Restart log             | `OPENCLAW_RESTART_LOG`              | `GENSPARX_RESTART_LOG`              | `scripts/restart-mac.sh`                                         | Low          |
| App bundle              | `OPENCLAW_APP_BUNDLE`               | `GENSPARX_APP_BUNDLE`               | `scripts/restart-mac.sh`                                         | Medium       |
| Control UI path global  | `__OPENCLAW_CONTROL_UI_BASE_PATH__` | `__GENSPARX_CONTROL_UI_BASE_PATH__` | UI TypeScript files (10+)                                        | High         |
| Assistant name global   | `__OPENCLAW_ASSISTANT_NAME__`       | `__GENSPARX_ASSISTANT_NAME__`       | `ui/src/ui/assistant-identity.ts`                                | Medium       |
| Assistant avatar global | `__OPENCLAW_ASSISTANT_AVATAR__`     | `__GENSPARX_ASSISTANT_AVATAR__`     | `ui/src/ui/assistant-identity.ts`                                | Medium       |
| Wide area domain        | `OPENCLAW_WIDE_AREA_DOMAIN`         | `GENSPARX_WIDE_AREA_DOMAIN`         | `apps/shared/OpenClawKit/Sources/OpenClawKit/BonjourTypes.swift` | Low          |

---

## 4. DIRECTORIES & FILE PATHS (CRITICAL)

| Category          | Current Value               | New Value                   | Files Affected                                  | Priority     |
| ----------------- | --------------------------- | --------------------------- | ----------------------------------------------- | ------------ |
| Home config dir   | `~/.openclaw/`              | `~/.gensparx/`              | Docs, scripts, all references                   | **Critical** |
| Config file       | `~/.openclaw/openclaw.json` | `~/.gensparx/gensparx.json` | Docs (50+ references), UI code                  | **Critical** |
| Workspace dir     | `~/.openclaw/workspace`     | `~/.gensparx/workspace`     | README.md, docs, config docs                    | High         |
| Credentials dir   | `~/.openclaw/credentials`   | `~/.gensparx/credentials`   | README.md, docs                                 | High         |
| Sessions dir      | `~/.openclaw/sessions/`     | `~/.gensparx/sessions/`     | Docs, agent docs                                | High         |
| Agents dir        | `~/.openclaw/agents/`       | `~/.gensparx/agents/`       | Docs, skills                                    | High         |
| Logs dir          | `~/.openclaw/logs/`         | `~/.gensparx/logs/`         | Hooks documentation                             | High         |
| Tools dir         | `~/.openclaw/tools/`        | `~/.gensparx/tools/`        | Skills documentation                            | Medium       |
| Hooks dir         | `~/.openclaw/hooks/`        | `~/.gensparx/hooks/`        | Hooks documentation                             | Medium       |
| Temp directory    | `/tmp/openclaw-*`           | `/tmp/gensparx-*`           | Test helpers, scripts                           | High         |
| Temp home         | `openclaw-test-home-`       | `gensparx-test-home-`       | `test/test-env.ts`, `test/helpers/temp-home.ts` | High         |
| Source alias path | `openclaw/plugin-sdk`       | `gensparx/plugin-sdk`       | `tsconfig.oxlint.json`, `vitest.config.ts`      | High         |

---

## 5. APP IDENTIFIERS & BUNDLE IDS (CRITICAL - iOS/Android/macOS)

| Category             | Current Value              | New Value                  | Files Affected                                     | Priority     |
| -------------------- | -------------------------- | -------------------------- | -------------------------------------------------- | ------------ |
| macOS bundle ID      | `ai.openclaw.mac`          | `ai.gensparx.mac`          | `apps/macos/Sources/OpenClaw/Resources/Info.plist` | **Critical** |
| macOS deeplink ID    | `ai.openclaw.mac.deeplink` | `ai.gensparx.mac.deeplink` | macOS Info.plist                                   | High         |
| macOS debug bundle   | `ai.openclaw.mac.debug`    | `ai.gensparx.mac.debug`    | `scripts/package-mac-app.sh`                       | High         |
| iOS bundle ID        | `ai.openclaw.ios`          | `ai.gensparx.ios`          | `apps/ios/Sources/Info.plist`                      | **Critical** |
| Android namespace    | `ai.openclaw.android`      | `ai.gensparx.android`      | `apps/android/app/build.gradle.kts`                | **Critical** |
| Android app ID       | `ai.openclaw.android`      | `ai.gensparx.android`      | `apps/android/app/build.gradle.kts`                | **Critical** |
| Bonjour service type | `_openclaw-gw._tcp`        | `_gensparx-gw._tcp`        | Info.plist files, Swift code                       | High         |
| Deeplink scheme      | `openclaw://`              | `gensparx://`              | macOS Info.plist, docs                             | Medium       |

---

## 6. APP NAMES & DISPLAY STRINGS (Critical/High)

| Category           | Current Value             | New Value               | Files Affected                                | Priority     |
| ------------------ | ------------------------- | ----------------------- | --------------------------------------------- | ------------ |
| Product name       | `OpenClaw`                | `GenSparx`              | macOS/iOS/Android Info.plist, manifest        | **Critical** |
| App executable     | `OpenClaw` (executable)   | `GenSparx` (executable) | macOS app bundle structure                    | **Critical** |
| App bundle name    | `OpenClaw.app`            | `GenSparx.app`          | Scripts, docs, build system                   | **Critical** |
| macOS schemes      | `OpenClaw` (Xcode scheme) | `GenSparx`              | `apps/macos/` Xcode project                   | High         |
| iOS schemes        | `OpenClaw` (Xcode scheme) | `GenSparx`              | `apps/ios/` Xcode project                     | High         |
| Android app name   | Varies (displayed name)   | Should match GenSparx   | `apps/android/` manifest                      | High         |
| macOS app icon     | `OpenClaw.icns`           | `GenSparx.icns`         | `scripts/package-mac-app.sh`, macOS Resources | High         |
| macOS process name | `OpenClaw` (process)      | `GenSparx`              | Scripts, launchctl labels                     | High         |
| Tests display name | `OpenClawTests`           | `GenSparxTests`         | iOS test Info.plist                           | Medium       |

---

## 7. SOURCE CODE IDENTIFIERS (High/Medium)

| Category             | Current Value                      | New Value                      | Files Affected                            | Priority |
| -------------------- | ---------------------------------- | ------------------------------ | ----------------------------------------- | -------- |
| Swift module         | `OpenClawKit`                      | `GenSparxKit`                  | Entire `apps/shared/OpenClawKit/`         | High     |
| Swift class name     | `OpenClawApp`                      | `GenSparxApp`                  | UI TypeScript + Swift (20+ files)         | High     |
| Swift custom element | `<openclaw-app>`                   | `<gensparx-app>`               | `ui/index.html`, TypeScript files         | High     |
| Web component class  | `OpenClawApp`                      | `GenSparxApp`                  | `ui/src/ui/app.ts`                        | High     |
| Config type          | `OpenClawConfig`                   | `GenSparxConfig`               | TypeScript type definitions               | Medium   |
| Chat payload types   | `OpenClawChatHistoryPayload`, etc. | `GenSparxChat*`                | TypeScript definitions                    | Medium   |
| Protocol types       | `OpenClawProtocol`                 | `GenSparxProtocol`             | Swift & TypeScript protocol defs          | Medium   |
| Web storage keys     | `openclaw.control.settings.v1`     | `gensparx.control.settings.v1` | `ui/src/ui/storage.ts`, device-auth, etc. | High     |
| Storage key device   | `openclaw-device-identity-v1`      | `gensparx-device-identity-v1`  | `ui/src/ui/device-identity.ts`            | Medium   |

---

## 8. CONFIGURATION & SCHEMA (High/Medium)

| Category           | Current Value                         | New Value                                | Files Affected                  | Priority |
| ------------------ | ------------------------------------- | ---------------------------------------- | ------------------------------- | -------- |
| Config key prefix  | `agent`, `gateway`, etc.              | (keys stay same but config file renames) | Docs examples                   | Medium   |
| Extension metadata | `"openclaw": { ... }` in package.json | `"gensparx": { ... }`                    | All `extensions/*/package.json` | High     |
| Hook metadata      | `"openclaw": { ... }` in HOOK.md      | `"gensparx": { ... }`                    | `src/hooks/bundled/*/HOOK.md`   | High     |
| Skill metadata     | `"openclaw": { ... }` in SKILL.md     | `"gensparx": { ... }`                    | `skills/*/SKILL.md` (40+ files) | High     |
| Client name        | `"openclaw-control-ui"`               | `"gensparx-control-ui"`                  | `ui/src/ui/app-gateway.ts`      | Medium   |
| Log filename       | `openclaw-logs-*`                     | `gensparx-logs-*`                        | `ui/src/ui/app-scroll.ts`       | Low      |

---

## 9. WEBSITE & DOMAINS (High/Medium)

| Category           | Current Value                       | New Value                           | Files Affected               | Priority |
| ------------------ | ----------------------------------- | ----------------------------------- | ---------------------------- | -------- |
| Website            | `https://openclaw.ai`               | `https://gensparx.ai`               | README.md, docs (100+ links) | High     |
| Docs domain        | `https://docs.openclaw.ai`          | `https://docs.gensparx.ai`          | README.md, docs (150+ links) | High     |
| GitHub repo        | `github.com/openclaw/openclaw`      | `github.com/gensparx/gensparx`      | README.md, badges, docs      | High     |
| GitHub org         | `openclaw`                          | `gensparx`                          | GitHub references            | High     |
| DeepWiki           | `deepwiki.com/openclaw/openclaw`    | `deepwiki.com/gensparx/gensparx`    | README.md                    | Medium   |
| Nix repo           | `nix-clawdbot` (related)            | Update if needed                    | Related package              | Low      |
| Sparkle feed URL   | `openclaw/openclaw/.../appcast.xml` | `gensparx/gensparx/.../appcast.xml` | `scripts/package-mac-app.sh` | High     |
| Star history chart | `openclaw/openclaw`                 | `gensparx/gensparx`                 | README.md badge              | Medium   |

---

## 10. DOCUMENTATION (100+ files)

| Category                | Current Value                | New Value                     | Files Affected                  | Priority     |
| ----------------------- | ---------------------------- | ----------------------------- | ------------------------------- | ------------ |
| Product references      | "OpenClaw" in text           | "GenSparx" in text            | All `docs/` markdown files      | High         |
| CLI references          | `openclaw <command>`         | `gensparx <command>`          | All `docs/` markdown files      | High         |
| Config path examples    | `~/.openclaw/`               | `~/.gensparx/`                | All `docs/` markdown files      | High         |
| Workspace path examples | `~/.openclaw/workspace`      | `~/.gensparx/workspace`       | Docs (setup, config guides)     | High         |
| README                  | All product references       | GenSparx brand                | README.md (500+ lines affected) | **Critical** |
| Getting started         | All paths and commands       | Updated                       | `docs/start/`                   | High         |
| Installation guides     | All commands, paths          | Updated                       | `docs/install/`                 | High         |
| Platform guides         | macOS/iOS/Android setup docs | Updated bundle IDs, app names | `docs/platforms/`               | High         |
| Gateway docs            | Gateway references           | Updated                       | `docs/gateway/`                 | High         |
| Channels docs           | Channel setup docs           | Updated                       | `docs/channels/`                | Medium       |
| API docs                | Client references            | Updated                       | `docs/`                         | Medium       |

---

## 11. BUILD & PACKAGING SCRIPTS (High)

| Category        | Current Value           | New Value                       | Files Affected                          | Priority |
| --------------- | ----------------------- | ------------------------------- | --------------------------------------- | -------- |
| App bundle path | `dist/OpenClaw.app`     | `dist/GenSparx.app`             | `scripts/package-mac-app.sh`            | High     |
| App binary name | `OpenClaw` (executable) | `GenSparx`                      | `scripts/package-mac-app.sh`            | High     |
| Icon file       | `OpenClaw.icns`         | `GenSparx.icns`                 | `scripts/package-mac-app.sh`, Resources | High     |
| APK filename    | `openclaw-*.apk`        | `gensparx-*.apk`                | `apps/android/app/build.gradle.kts`     | High     |
| Mac schema name | `OpenClaw`              | `GenSparx`                      | `apps/macos/` (Xcode build)             | High     |
| Mac project     | `OpenClaw.xcodeproj`    | `GenSparx.xcodeproj` (optional) | Optional rename                         | Low      |
| iOS schema name | `OpenClaw`              | `GenSparx`                      | `apps/ios/` (Xcode build)               | High     |
| iOS project     | `OpenClaw.xcodeproj`    | `GenSparx.xcodeproj` (optional) | Optional rename                         | Low      |

---

## 12. SYSTEM INTEGRATION (macOS/Linux) (Medium)

| Category           | Current Value              | New Value                  | Files Affected                           | Priority |
| ------------------ | -------------------------- | -------------------------- | ---------------------------------------- | -------- |
| LaunchAgent label  | `ai.openclaw.mac`          | `ai.gensparx.mac`          | LaunchAgent plist path, scripts          | High     |
| systemd service    | `openclaw` (if exists)     | `gensparx`                 | Scripts, system integration              | Medium   |
| Process monitoring | `openclaw` process pattern | `gensparx` process pattern | `scripts/restart-mac.sh`, system scripts | High     |
| Binary symlink     | `/usr/local/bin/openclaw`  | `/usr/local/bin/gensparx`  | Install scripts                          | High     |

---

## 13. TESTING (Medium/High)

| Category              | Current Value     | New Value         | Files Affected                      | Priority |
| --------------------- | ----------------- | ----------------- | ----------------------------------- | -------- |
| Temp directories      | `openclaw-*`      | `gensparx-*`      | Test setup helpers                  | High     |
| Config paths in tests | `~/.openclaw`     | `~/.gensparx`     | `test/test-env.ts`, `test/helpers/` | High     |
| Env variable handling | All `OPENCLAW_*`  | All `GENSPARX_*`  | `test/test-env.ts`                  | High     |
| Test output filenames | `openclaw-logs-*` | `gensparx-logs-*` | UI tests                            | Low      |

---

## 14. MISCELLANEOUS (Medium/Low)

| Category           | Current Value                         | New Value             | Files Affected            | Priority |
| ------------------ | ------------------------------------- | --------------------- | ------------------------- | -------- |
| Download prefix    | `openclaw-`                           | `gensparx-`           | Log export, download code | Low      |
| Socket filenames   | `openclaw.sock`                       | `gensparx.sock`       | tmux skill documentation  | Low      |
| Tmux session name  | `openclaw-python`                     | `gensparx-python`     | `skills/tmux/SKILL.md`    | Low      |
| GitHub issue links | GitHub links with `openclaw/openclaw` | Update repo reference | Code comments             | Medium   |
| Error messages     | "OpenClaw" in user-facing messages    | "GenSparx"            | Source code               | Medium   |

---

## SUMMARY BY PRIORITY

### **CRITICAL (Cannot function without these changes)**

1. NPM package name: `openclaw` → `gensparx`
2. NPM binary entry: `openclaw` command → `gensparx` command
3. Environment variable `OPENCLAW_GATEWAY_TOKEN` → `GENSPARX_GATEWAY_TOKEN`
4. Config directory `~/.openclaw/` → `~/.gensparx/`
5. macOS bundle ID: `ai.openclaw.mac` → `ai.gensparx.mac`
6. iOS bundle ID: `ai.openclaw.ios` → `ai.gensparx.ios`
7. Android namespace: `ai.openclaw.android` → `ai.gensparx.android`
8. All CLI examples in README and docs

### **HIGH (Breaks functionality or user experience)**

1. All environment variables (20+)
2. Temp directory patterns
3. Web storage keys and local storage
4. Extension package names (@openclaw/_ → @gensparx/_)
5. All documentation paths and commands
6. macOS/iOS app names and scheme names
7. All website/domain references

### **MEDIUM (Important for consistency)**

1. Source code identifiers (type names, class names)
2. Metadata in extension/hook/skill definitions
3. System integration labels and service names
4. Build script references

### **LOW (Nice to have for consistency)**

1. Log filenames
2. Socket names
3. Various internal string constants

---

## ESTIMATED SCOPE

- **Total files affected**: ~300+
- **Total references**: ~1,000+ occurrences
- **Time estimate**: 6-8 hours for a complete, careful rebrand
- **Risk level**: Medium-High (bundle IDs and CLI commands are critical)
- **Testing requirement**: Full e2e testing on all platforms (macOS, iOS, Android, Web)

---

## SAFE SEARCH & REPLACE PATTERNS

For automated replacement, use these patterns with caution:

1. **Package names**: `@openclaw/` → `@gensparx/` (in package.json files)
2. **Environment variables**: `OPENCLAW_` → `GENSPARX_` (with word boundaries)
3. **File paths**: `~/.openclaw` → `~/.gensparx` (preserve escaping)
4. **Bundle IDs**: `ai.openclaw.` → `ai.gensparx.` (preserve suffixes)
5. **CLI commands**: `openclaw ` → `gensparx ` (preserve word boundaries)
6. **Documentation links**: `openclaw.ai` → `gensparx.ai` (whole domain)
7. **GitHub references**: `github.com/openclaw/openclaw` → `github.com/gensparx/gensparx`

---

## VALIDATION CHECKLIST

After rebranding:

- [ ] CLI binary runs as `gensparx` command
- [ ] `~/.gensparx/` directory is created on first run
- [ ] All environment variables use `GENSPARX_` prefix
- [ ] macOS app bundle is named `GenSparx.app` with correct bundle ID
- [ ] iOS app has correct bundle ID and displays as "GenSparx"
- [ ] Android app has correct package name and displays as "GenSparx"
- [ ] All documentation links resolve correctly
- [ ] npm package `gensparx` installs and works
- [ ] All extensions use `@gensparx/*` naming
- [ ] Tests pass with new environment variable names
- [ ] Web UI displays correct branding
- [ ] LaunchAgent uses correct label (`ai.gensparx.mac`)
