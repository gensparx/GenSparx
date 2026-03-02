# GenSparx Rebranding Complete Checklist

**Version: 2026.1.30 → GenSparx Edition**

---

## 📊 EXECUTIVE SUMMARY

| Metric                   | Count                             |
| ------------------------ | --------------------------------- |
| **Total Files Affected** | ~300+                             |
| **Total References**     | ~1,000+                           |
| **Estimated Effort**     | 6-8 hours                         |
| **Priority Levels**      | 4 (Critical → Low)                |
| **Platforms Affected**   | 5 (Web, CLI, macOS, iOS, Android) |

---

## 🚨 CRITICAL PRIORITY (Must do before publishing)

### 1. NPM Package Name & Binaries

**Current:** `openclaw`  
**New:** `gensparx`

| File             | Change                                                      | Impact                         |
| ---------------- | ----------------------------------------------------------- | ------------------------------ |
| `package.json:2` | `"name": "openclaw"` → `"name": "gensparx"`                 | **HIGH** - Breaking change     |
| `package.json:9` | `"openclaw": "openclaw.mjs"` → `"gensparx": "gensparx.mjs"` | **CRITICAL** - CLI entry point |
| `openclaw.mjs`   | Rename to `gensparx.mjs`                                    | **CRITICAL** - Binary file     |

**User Impact:** Users will run `gensparx` instead of `openclaw`

---

### 2. CLI Command Names

**All user-facing commands change**

**Current Examples:**

```bash
openclaw channels status
openclaw gateway start
openclaw agents list
openclaw config get
```

**New Examples:**

```bash
gensparx channels status
gensparx gateway start
gensparx agents list
gensparx config get
```

**Files Affected:**

- `src/cli/main-cli.ts` (50+ references)
- `src/cli/**/*.ts` (100+ files with command registration)
- `src/cli/formatCliCommand()` function that generates help text

**Impact:** BREAKING - All docs, scripts, and user guides need updates

---

### 3. Configuration Directory

**Current:** `~/.openclaw/`  
**New:** `~/.gensparx/`

| Component   | Current                          | New                              |
| ----------- | -------------------------------- | -------------------------------- |
| Config file | `~/.openclaw/openclaw.json`      | `~/.gensparx/gensparx.json`      |
| Workspace   | `~/.openclaw/workspace/`         | `~/.gensparx/workspace/`         |
| Sessions    | `~/.openclaw/agents/*/sessions/` | `~/.gensparx/agents/*/sessions/` |
| Canvas      | `~/.openclaw/canvas/`            | `~/.gensparx/canvas/`            |
| Credentials | `~/.openclaw/credentials/`       | `~/.gensparx/credentials/`       |

**Files:**

- `src/agents/agent-paths.ts` (path resolution)
- `src/utils.ts` (resolveUserPath function)
- `src/config/config-paths.ts`

**Migration Required:** Users need migration script to move config from old to new location

---

### 4. Environment Variables (20+ variables)

**Pattern:** `OPENCLAW_*` → `GENSPARX_*`

**Critical Variables:**

- `OPENCLAW_GATEWAY_TOKEN` → `GENSPARX_GATEWAY_TOKEN`
- `OPENCLAW_SKIP_CHANNELS` → `GENSPARX_SKIP_CHANNELS`
- `OPENCLAW_PROFILE` → `GENSPARX_PROFILE`
- `OPENCLAW_E2E_MODELS` → `GENSPARX_E2E_MODELS`
- `OPENCLAW_LIVE_TEST` → `GENSPARX_LIVE_TEST`

**Files:**

- `src/**/*.ts` (grep: OPENCLAW\_)
- `package.json` (scripts section: ~10 scripts)
- `.env` example files
- Docker files

**Impact:** HIGH - Build scripts and CI/CD pipelines affected

---

### 5. Application Bundle IDs

#### macOS Bundle ID

**Current:** `ai.openclaw.mac`  
**New:** `ai.gensparx.mac`

**Files:**

- `apps/macos/Sources/OpenClaw/Info.plist`
- `apps/macos/Sources/OpenClaw/Resources/Info.plist`
- `apps/macos/project.yml` (xcodegen config)

#### iOS Bundle ID

**Current:** `ai.openclaw.ios`  
**New:** `ai.gensparx.ios`

**Files:**

- `apps/ios/Sources/Info.plist`
- `apps/ios/project.yml`
- `apps/ios/Tests/Info.plist`

#### Android Bundle ID

**Current:** `ai.openclaw.android`  
**New:** `ai.gensparx.android`

**Files:**

- `apps/android/app/build.gradle.kts`
- `apps/android/app/src/main/AndroidManifest.xml`
- Package declaration in Java/Kotlin files

**Impact:** CRITICAL - Requires re-signing apps and new App Store submissions

---

## 🔴 HIGH PRIORITY (Breaks functionality/user experience)

### 6. Extension Packages

**All extensions change from `@openclaw/*` to `@gensparx/*`**

**Files:**

- All `extensions/*/package.json` (30+ extensions)
- `package.json` workspace definition
- Import statements in plugins

**Examples:**

- `@openclaw/slack` → `@gensparx/slack`
- `@openclaw/telegram` → `@gensparx/telegram`
- `@openclaw/discord` → `@gensparx/discord`

---

### 7. Configuration Schema Keys

**Current:** Config keys reference "OpenClaw" in schemas

**Files:**

- `src/config/schema.ts` (configuration schema definitions)
- Channel schemas in `src/*/config.ts`

**Example:**

```json
{
  "type": "object",
  "title": "OpenClaw Configuration"
}
```

Should become:

```json
{
  "type": "object",
  "title": "GenSparx Configuration"
}
```

---

### 8. Documentation (50+ files)

**All docs need CLI examples updated**

**Files:**

- `docs/**/*.md` (200+ references)
- `docs/reference/AGENTS.default.md`
- `docs/start/*.md`
- `docs/cli/**/*.md`
- `docs/gateway/**/*.md`
- README.md examples

**Example Changes:**

```markdown
# OLD

Run: `openclaw gateway start`

# NEW

Run: `gensparx gateway start`
```

---

### 9. Package.json Scripts

**All scripts using `openclaw` command**

**Current:**

```json
{
  "gateway:dev": "OPENCLAW_SKIP_CHANNELS=1 node scripts/run-node.mjs --dev gateway",
  "openclaw": "node scripts/run-node.mjs",
  "openclaw:rpc": "node scripts/run-node.mjs agent --mode rpc --json"
}
```

**New:**

```json
{
  "gateway:dev": "GENSPARX_SKIP_CHANNELS=1 node scripts/run-node.mjs --dev gateway",
  "gensparx": "node scripts/run-node.mjs",
  "gensparx:rpc": "node scripts/run-node.mjs agent --mode rpc --json"
}
```

---

## 🟡 MEDIUM PRIORITY (Quality & Consistency)

### 10. Website & DNS

- Website: `openclaw.ai` → `gensparx.ai`
- DNS records
- Download links
- Social media links

**Files:**

- README.md (multiple references)
- `docs/*.md` (links in docs)

---

### 11. Android App Name & Display Name

**Current:** App shows as "OpenClaw"  
**New:** App shows as "GenSparx"

**Files:**

- `apps/android/app/src/main/res/values/strings.xml`

```xml
<string name="app_name">GenSparx</string>
```

---

### 12. iOS App Name & Display Name

**Current:** `OpenClaw.xcodeproj`, `OpenClaw` scheme  
**New:** `GenSparx.xcodeproj`, `GenSparx` scheme

**Files:**

- Rename `apps/ios/OpenClaw.xcodeproj` → `apps/ios/GenSparx.xcodeproj`
- Update build scripts in `package.json`

---

### 13. macOS App Name

**Current:** "OpenClaw" in file system and app menus  
**New:** "GenSparx"

**Files:**

- Rename `dist/OpenClaw.app` → `dist/GenSparx.app`
- `apps/macos/Sources/OpenClaw/` (directory name can stay, but internal references)

---

## 🟢 LOW PRIORITY (Nice to have)

### 14. Code Comments & String References

- Comments mentioning "OpenClaw" → "GenSparx"
- Error messages
- Log prefixes
- Help text

**Impact:** Low - Doesn't affect functionality

---

## ✅ VALIDATION CHECKLIST

After making changes, verify:

- [ ] `gensparx --version` works
- [ ] `gensparx help` displays correct command name
- [ ] `gensparx gateway start --allow-unconfigured` works
- [ ] Config created at `~/.gensparx/` (not `~/.openclaw/`)
- [ ] All environment variables use `GENSPARX_*` prefix
- [ ] iOS app builds with new bundle ID
- [ ] Android app builds with new bundle ID
- [ ] macOS app builds and runs
- [ ] Web UI loads at `http://127.0.0.1:19001`
- [ ] All CLI examples in docs reference `gensparx` command
- [ ] Extensions load with new `@gensparx/*` names
- [ ] Tests pass with new environment variables
- [ ] No "openclaw" references in user-facing messages

---

## 📋 IMPLEMENTATION ORDER

**Phase 1 - Critical (Do First)**

1. Rename package: `openclaw` → `gensparx`
2. Update CLI binary: `openclaw.mjs` → `gensparx.mjs`
3. Update all environment variables
4. Update config directory paths
5. Update app bundle IDs

**Phase 2 - High (Do Second)** 6. Update extension packages `@openclaw/*` → `@gensparx/*` 7. Update configuration schema 8. Update all CLI commands in source 9. Update all scripts and build commands

**Phase 3 - Medium (Do Third)** 10. Update documentation (50+ files) 11. Update package.json scripts 12. Update app names in manifests

**Phase 4 - Low (Polish)** 13. Update website references 14. Update code comments 15. Clean up any remaining references

---

## 🔗 RELATED FILES

**Key Configuration Files:**

- `src/config/config-paths.ts` - Config directory resolution
- `src/utils.ts` - Utility path functions
- `src/cli/main-cli.ts` - Main CLI entry point
- `package.json` - Package metadata
- `apps/macos/project.yml` - macOS build config
- `apps/ios/project.yml` - iOS build config
- `apps/android/app/build.gradle.kts` - Android build config

---

## 🚀 ESTIMATED TIMELINE

| Phase                    | Files | Time          |
| ------------------------ | ----- | ------------- |
| Phase 1 (Critical)       | 10-15 | 1.5-2 hours   |
| Phase 2 (High)           | 50-75 | 2-3 hours     |
| Phase 3 (Medium)         | 50+   | 1.5-2 hours   |
| Phase 4 (Low)            | 100+  | 1-1.5 hours   |
| **Testing & Validation** | All   | 1-2 hours     |
| **TOTAL**                | 300+  | **6-8 hours** |

---

## ⚠️ MIGRATION NOTES

When users upgrade from OpenClaw to GenSparx:

1. Old config at `~/.openclaw/` will not be found
2. Provide migration script or documentation
3. Consider backwards compatibility layer

**Recommended:** Create migration guide for users:

```bash
# Migration script
mkdir -p ~/.gensparx
cp -r ~/.openclaw/* ~/.gensparx/
# Update config references in ~/.gensparx/gensparx.json
```

---

## 📝 NOTES

- **No breaking API changes** - just naming convention
- **Mobile app resubmission required** - will need app store reapproval
- **User documentation extensive** - affects 200+ doc pages
- **Environment scripts affected** - CI/CD pipelines need updates
- **Consider deprecation period** - support old `openclaw` command as alias?
