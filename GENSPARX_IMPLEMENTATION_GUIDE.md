# GenSparx Publishing Readiness - Implementation Priority Guide

## 🎯 BEFORE PUBLISHING - CRITICAL PATH

If you want to publish GenSparx for production, follow this exact order:

---

## PHASE 1: CRITICAL REBRANDING (Must do - 2 hours)

### ✅ TASK 1.1: Rename NPM Package

**File:** `package.json` (line 2)  
**Action:**

```json
// BEFORE
{"name": "openclaw"}

// AFTER
{"name": "gensparx"}
```

**Why:** Users can't install and use the wrong package name

---

### ✅ TASK 1.2: Rename CLI Binary

**File:** `package.json` (lines 8-9)  
**Action:**

```json
// BEFORE
{
  "bin": {
    "openclaw": "openclaw.mjs"
  }
}

// AFTER
{
  "bin": {
    "gensparx": "gensparx.mjs"
  }
}
```

**Also:** Rename the actual file from `openclaw.mjs` → `gensparx.mjs`

**Why:** CLI command must be `gensparx`, not `openclaw`

---

### ✅ TASK 1.3: Update All Environment Variables

**Files:** All files in `src/` and `package.json`

**Pattern:** Replace all instances of `OPENCLAW_` with `GENSPARX_`

**Key Variables:**

```bash
# OLD → NEW
OPENCLAW_GATEWAY_TOKEN → GENSPARX_GATEWAY_TOKEN
OPENCLAW_SKIP_CHANNELS → GENSPARX_SKIP_CHANNELS
OPENCLAW_PROFILE → GENSPARX_PROFILE
OPENCLAW_E2E_MODELS → GENSPARX_E2E_MODELS
OPENCLAW_LIVE_TEST → GENSPARX_LIVE_TEST
OPENCLAW_PROFILE → GENSPARX_PROFILE
CLAWDBOT_SKIP_CHANNELS → GENSPARKBOT_SKIP_CHANNELS
```

**Command to find all:**

```bash
grep -r "OPENCLAW_" src/ package.json scripts/
```

**Why:** Build scripts and runtime depend on these variables

---

### ✅ TASK 1.4: Update Config Directory Paths

**Files:**

- `src/utils.ts` (resolveUserPath function)
- `src/config/config-paths.ts`
- `src/agents/agent-paths.ts`

**Pattern:** Replace `~/.openclaw` → `~/.gensparx`

**Also:**

- `/tmp/openclaw-*` → `/tmp/gensparx-*`
- References to `~/.openclaw/canvas/` → `~/.gensparx/canvas/`
- References to `~/.openclaw/sessions/` → `~/.gensparx/sessions/`

**Why:** Users' data and config go to the correct location

---

### ✅ TASK 1.5: Update App Bundle IDs

#### macOS

**Files:**

- `apps/macos/Sources/OpenClaw/Info.plist`
- `apps/macos/project.yml`

**Change:**

```xml
<!-- BEFORE -->
ai.openclaw.mac

<!-- AFTER -->
ai.gensparx.mac
```

#### iOS

**Files:**

- `apps/ios/Sources/Info.plist`
- `apps/ios/project.yml`

**Change:**

```
ai.openclaw.ios → ai.gensparx.ios
```

#### Android

**Files:**

- `apps/android/app/build.gradle.kts` (line with applicationId)
- `apps/android/app/src/main/AndroidManifest.xml`

**Change:**

```
ai.openclaw.android → ai.gensparx.android
```

**Why:** Apps won't install correctly with wrong bundle IDs, and you need to resubmit to app stores with new IDs

---

## PHASE 2: HIGH PRIORITY (2-3 hours)

### ✅ TASK 2.1: Update Extension Package Names

**Files:** All `extensions/*/package.json` (30+ extensions)

**Pattern:** `@openclaw/*` → `@gensparx/*`

**Example:**

```json
// BEFORE
{
  "name": "@openclaw/slack",
  "description": "OpenClaw Slack channel plugin"
}

// AFTER
{
  "name": "@gensparx/slack",
  "description": "GenSparx Slack channel plugin"
}
```

**Also update:**

- Dependencies in `extensions/*/package.json` that reference other extensions
- Any imports in plugin code

**Why:** Extensions won't load with wrong package names

---

### ✅ TASK 2.2: Update CLI Command Registration

**Files:** `src/cli/**/*.ts` (100+ files)

**What to look for:**

- `.command("openclaw")` → `.command("gensparx")`
- Help text mentioning "openclaw"
- Error messages showing "openclaw" command

**Example:**

```typescript
// BEFORE
program.command("openclaw gateway start");

// AFTER
program.command("gensparx gateway start");
```

**Why:** Users won't know what command to run

---

### ✅ TASK 2.3: Update Script Commands in package.json

**File:** `package.json` (scripts section)

**Replace in all scripts:**

```json
// BEFORE
{
  "gateway:dev": "OPENCLAW_SKIP_CHANNELS=1 node scripts/run-node.mjs",
  "openclaw": "node scripts/run-node.mjs",
  "openclaw:rpc": "node scripts/run-node.mjs agent --mode rpc"
}

// AFTER
{
  "gateway:dev": "GENSPARX_SKIP_CHANNELS=1 node scripts/run-node.mjs",
  "gensparx": "node scripts/run-node.mjs",
  "gensparx:rpc": "node scripts/run-node.mjs agent --mode rpc"
}
```

---

## PHASE 3: MEDIUM PRIORITY (1.5-2 hours)

### ✅ TASK 3.1: Update All Documentation (50+ files)

**Primary docs to update:**

- `docs/**/*.md` (all examples showing `openclaw` command)
- `README.md`
- `CONTRIBUTING.md`
- `docs/cli/**/*.md` (CLI reference)
- `docs/gateway/**/*.md` (gateway docs)
- `docs/start/**/*.md` (quick start guides)

**Find & Replace Pattern:**

```
openclaw → gensparx
OpenClaw → GenSparx
```

**Be careful not to replace:**

- GitHub repo names (openclaw/openclaw should stay if referencing original)
- Historical notes
- Credits/acknowledgments

**Why:** Users follow docs and will be confused by wrong command names

---

### ✅ TASK 3.2: Update Configuration Schema

**File:** `src/config/schema.ts`

**Replace:**

```typescript
// BEFORE
title: "OpenClaw Configuration";
description: "OpenClaw Gateway Configuration";

// AFTER
title: "GenSparx Configuration";
description: "GenSparx Gateway Configuration";
```

---

### ✅ TASK 3.3: Update Workspace Templates

**Files:** `docs/reference/templates/*.md`

**Update:**

- `AGENTS.md` template
- `SOUL.md` template
- Any references to "OpenClaw workspace"

---

## PHASE 4: LOW PRIORITY (Polish - 1 hour)

### ✅ TASK 4.1: Update App Display Names

**Files:**

- `apps/android/app/src/main/res/values/strings.xml`
- iOS schemes naming
- macOS app menu references

---

### ✅ TASK 4.2: Update Code Comments

Replace comments mentioning "OpenClaw" with "GenSparx"

---

## 🧪 VALIDATION AFTER CHANGES

Run these tests to verify everything works:

```bash
# 1. Test binary name works
gensparx --version
# Should show: GenSparx 2026.1.30

# 2. Test CLI help
gensparx help
# Should show "gensparx" in command names, not "openclaw"

# 3. Test gateway startup
GENSPARX_GATEWAY_TOKEN="devtoken" \
  node scripts/run-node.mjs --dev gateway --bind loopback --allow-unconfigured
# Should start without errors

# 4. Test config directory
ls ~/.gensparx/
# Should have gensparx.json (not openclaw.json)

# 5. Test npm package name
npm view gensparx version
# Should work if published

# 6. Test extensions load
pnpm install
# Should install with @gensparx/* packages

# 7. Test TypeScript compilation
pnpm build
# Should compile without errors
```

---

## 📊 EFFORT BREAKDOWN

| Phase                  | Tasks      | Time          | Files      |
| ---------------------- | ---------- | ------------- | ---------- |
| **Phase 1** (Critical) | 5 tasks    | 2 hrs         | 15 files   |
| **Phase 2** (High)     | 3 tasks    | 2.5 hrs       | 75 files   |
| **Phase 3** (Medium)   | 3 tasks    | 2 hrs         | 50+ files  |
| **Phase 4** (Low)      | 2 tasks    | 1 hr          | 100+ files |
| **Testing**            | Validation | 1.5 hrs       | -          |
| **TOTAL**              | 13 tasks   | **8-9 hours** | 300+       |

---

## 🚀 PUBLISHING CHECKLIST

Before publishing to npm:

- [ ] All Phase 1 tasks complete
- [ ] All Phase 2 tasks complete
- [ ] Phase 3 and 4 mostly complete
- [ ] TypeScript compilation passes: `pnpm build`
- [ ] All tests pass: `pnpm test`
- [ ] CLI works: `gensparx --version`
- [ ] Config created at `~/.gensparx/`
- [ ] All env variables use `GENSPARX_*` prefix
- [ ] Documentation updated
- [ ] CHANGELOG updated
- [ ] Version bumped in package.json
- [ ] Git commit with message: "rebrand: rename openclaw to gensparx"
- [ ] Git tag: `v2026.1.30-gensparx` (or similar)
- [ ] npm publish: `npm publish --access public`

---

## 📝 SAMPLE CHANGELOG ENTRY

````markdown
## [2026.2.x] - GenSparx Edition

### Changed

- **BREAKING**: Renamed package from `openclaw` to `gensparx`
- **BREAKING**: CLI command changed from `openclaw` to `gensparx`
- **BREAKING**: Config directory moved from `~/.openclaw/` to `~/.gensparx/`
- **BREAKING**: Environment variables renamed from `OPENCLAW_*` to `GENSPARX_*`
- Updated app bundle IDs (macOS, iOS, Android)
- Updated all extension package names to `@gensparx/*`
- Updated all documentation with new command names

### Migration

Users upgrading from OpenClaw should:

```bash
mkdir -p ~/.gensparx
cp -r ~/.openclaw/* ~/.gensparx/
# Update any config files if needed
```
````

### New

- Professional system prompt identifying as "GenSparx"
- Updated brand assets and logos
- Full rebranding across all platforms

```

---

## ⚠️ IMPORTANT NOTES

1. **Mobile Apps Need Resubmission**
   - App Store (iOS)
   - Google Play (Android)
   - This can take 1-2 weeks for approval

2. **Users Need Migration**
   - Provide instructions to move config
   - Or create auto-migration script

3. **Backwards Compatibility?**
   - Consider supporting both `openclaw` and `gensparx` commands
   - Or create deprecation period

4. **Search & Replace Carefully**
   - Don't accidentally rename the GitHub repo
   - Don't change credits/acknowledgments
   - Keep test data references consistent

```
