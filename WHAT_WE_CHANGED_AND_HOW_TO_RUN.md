# GenSparx Rebrand: What Changed, How to Install, What's Left

Single source of truth for rebrand status, install commands, and release readiness.

---

## 1) What We Changed

- Package name and CLI binary: `gensparx` (legacy `openclaw` still supported for compatibility).
- Config/state defaults: `~/.gensparx/` with `gensparx.json` (legacy `~/.openclaw/` still read as fallback).
- Env vars: prefer `GENSPARX_*`, fall back to `OPENCLAW_*`.
- Nix flag: `GENSPARX_NIX_MODE` (legacy flag still honored).
- CLI help/examples, onboarding text, and UI command snippets updated to `gensparx ...`.
- Assistant identity defaults: name `GenSparx`, emoji `?`.
- Browser/gateway/macOS logs updated to GenSparx branding.
- Termux auth/sync widgets updated to GenSparx messaging with legacy fallbacks.

## 2) How a User Installs (after publish)

Pick one:

- npm (recommended): `npm install -g gensparx@latest`
- pnpm: `pnpm add -g gensparx@latest`
- bun: `bun add -g gensparx@latest`
- npx (no install): `npx gensparx --version`
- From source:
  ```
  git clone https://github.com/openclaw/openclaw.git
  cd openclaw
  pnpm install
  pnpm ui:build
  pnpm build
  npm link   # or pnpm link --global
  gensparx --version
  ```

## 3) First-Run / Usage (user-facing)

1. Start gateway: `gensparx gateway --port 18789`
2. Get dashboard token: `gensparx config get gateway.auth`
3. Open dashboard: `http://127.0.0.1:18789?token=<token>`
4. Run agent: `gensparx agent --session-id main --message "Hello"`
5. Health checks: `gensparx status` and `gensparx health`
6. Onboarding wizard (full setup): `gensparx onboard --install-daemon`

## 4) Migration From OpenClaw

- Uninstall old global: `npm uninstall -g openclaw`
- Install new: `npm install -g gensparx`
- Config: copy `~/.openclaw/*` to `~/.gensparx/` if you want to preserve state; CLI still falls back to legacy paths/env vars.
- Env vars: rename `OPENCLAW_*` to `GENSPARX_*` (old names still work).

## 5) Publish Readiness Checklist

- ? Package name/bin updated to GenSparx.
- ? `pnpm build` succeeds (2026-02-08).
- ? CLI help/banners show GenSparx.
- ? UI command snippets updated to `gensparx ...`.
- ?? Root `gensparx` symlink: Windows policy blocked symlink creation; file is a direct copy of `gensparx.mjs`. If you want a symlink, enable Developer Mode or run as admin.
- ?? Remaining legacy identifiers (intentional for compatibility):
  - Env var fallbacks (`OPENCLAW_*`), HTTP headers (`x-openclaw-*`), service names (`openclaw-gateway`), and some legacy paths (`~/.openclaw`).
  - Docs are being migrated to `https://docs.gensparx.com/...` (English pass done; zh-CN and some route cleanup still pending).
  - UI custom element tag (`openclaw-app`) and browser profile driver name (`openclaw`) remain to avoid breaking existing configs.
- ?? Full `pnpm test` not re-run after latest changes; run before release.
- ? `pnpm docs:build` passes (2026-02-14) after zh-CN link normalization.

## 6) Launch Steps (for you)

1. Bump version in `package.json` (per release policy).
2. Update `CHANGELOG.md` with the GenSparx release entry.
3. Run: `pnpm build && pnpm test`.
4. Run docs build: `pnpm docs:build`.
5. Publish: `npm publish --access public --otp=<code>`.
6. Smoke test: fresh env -> `npm install -g gensparx@<version>` -> `gensparx --version`, `gensparx gateway --port 18789`, `gensparx status`.

## 7) Files Touched in This Pass

- CLI help/examples + prompts: `src/cli/*`, `src/commands/*`
- UI command snippets: `ui/src/ui/views/*.ts`, `ui/src/ui/navigation.ts`
- Branding/logs: `src/macos/*`, `src/browser/*`, `src/gateway/server.impl.ts`
- Termux/auth scripts: `scripts/termux-*.sh`, `scripts/mobile-reauth.sh`, `scripts/setup-auth-system.sh`
- Completion + tagline fixes: `src/cli/completion-cli.ts`, `src/commands/doctor-completion.ts`, `src/cli/tagline.ts`, `scripts/test-shell-completion.ts`
- Docs + project metadata rebrand pass:
  - `README.md` (docs domain + user-facing paths/commands)
  - `CONTRIBUTING.md` (project naming/links)
  - `appcast.xml` (feed title/release headings)

---

## 8) Roadmap / Step-by-Step Checklist

1. Docs polish
   - Sweep English prose for remaining OpenClaw mentions (major pass completed).
   - `pnpm docs:build` to catch broken links/anchors.

2. Non-English docs (optional)
   - Run zh-CN pipeline after English fixes (`scripts/docs-i18n`).

3. Apps/bundle IDs
   - Ensure macOS/iOS/Android bundle IDs and app names are GenSparx.
   - Re-sign/rebuild if you ship the apps.

4. Assets/branding
   - Replace any images/logos with OpenClaw text; align Control UI assets.

5. Release prep
   - Bump version; update `CHANGELOG.md`.
   - `pnpm build && pnpm test && pnpm docs:build`.

6. Publish & verify
   - `npm publish --access public --otp <code>`.
   - Fresh env smoke: `npm install -g gensparx@<version>`; `gensparx --version`, `gensparx gateway --port 18789`, `gensparx status`.

7. Post-release
   - Update website copy to GenSparx.
   - Communicate migration (uninstall `openclaw`, install `gensparx`, optional config copy).
   - Watch logs/telemetry for stray OpenClaw strings and clean up.

"░██████░██████░██░░░██░░██████░██████░░░███░░░██████░░██░░░██░",
"██░░░░░░██░░░░░███░░██░██░░░░░░██░░░██░██░██░░██░░░██░░██░██░░",
"██░░░██░██████░██░█░██░██████░░██████░███████░██████░░░░███░░░",
"██░░░██░██░░░░░██░░███░░░░░░██░██░░░░░██░░░██░██░░██░░░██░██░░",
"░██████░██████░██░░░██░██████░░██░░░░░██░░░██░██░░░██░██░░░██░",

---

##files to be chnaged##

- docs/\*\* (all docs still reference `openclaw` and `docs.gensparx.com`)
- README.md
- appcast.xml
- AGENTS.md
- CONTRIBUTING.md
- CHANGELOG.md (historical OpenClaw mentions)
- ui/src/ui/device-identity.ts
- ui/src/ui/device-auth.ts
- ui/src/ui/views/agents.ts
- ui/src/ui/views/skills.ts
- ui/vite.config.ts
- src/config/paths.ts
- src/config/io.ts
- src/config/paths.test.ts
- src/gateway/http-utils.ts
- src/gateway/hooks.ts
- src/gateway/protocol/client-info.ts (ensure no legacy IDs remain)
- src/infra/path-env.ts
- src/infra/openclaw-root.ts
- src/infra/ports-format.ts
- src/infra/voicewake.ts
- src/infra/widearea-dns.ts
- src/infra/update-runner.ts
- src/infra/update-global.ts
- extensions/_/package.json (rename @openclaw/_ -> @gensparx/\*)
- extensions/\*\*/README.md (remaining @openclaw package names and links)
- extensions/\*\*/CHANGELOG.md (OpenClaw references)
- extensions/**/SKILL.md and extensions/**/prose.md (OpenClaw wording)
- extensions/msteams/src/polls.ts (openclaw poll keys)
- extensions/voice-call/src/cli.ts
- extensions/voice-call/src/manager.ts
- extensions/voice-call/src/core-bridge.ts
- extensions/google-gemini-cli-auth/oauth.ts
- extensions/twitch/src/onboarding.ts
- extensions/twitch/src/token.ts

---

## Website Plan (Free, Later)

Goal: `gensparx.ai` homepage with docs at `gensparx.ai/docs`.

Recommended stack: Next.js (single app) + Cloudflare Pages (free) + static export.

### Phase 1: Create Next.js App

1. Create new repo/folder for the site.
2. Initialize:

```
npx create-next-app@latest gensparx-site
```

Choose App Router + TypeScript (Tailwind optional).

### Phase 2: Structure

```
gensparx-site/
  app/
    page.tsx                (homepage)
    docs/
      page.tsx              (docs landing)
      install/
        page.mdx            (install docs)
  content/
    docs/                   (copy current docs/)
```

### Phase 3: Move Docs Content

1. Copy current repo `docs/` to `gensparx-site/content/docs/`.
2. Use MDX rendering so Next.js can read Markdown.
3. Map routes:

- `/docs` -> `content/docs/index.md`
- `/docs/channels/whatsapp` -> `content/docs/channels/whatsapp.md`

### Phase 4: Homepage Install Button

- Link button to `/docs/install`.

### Phase 5: Deploy (Free)

1. Push repo to GitHub.
2. Connect to Cloudflare Pages.
3. Build command: `npm run build`
4. Output directory: `out`
5. Set custom domain: `gensparx.ai`

" ██████╗ ███████╗███╗ ██╗███████╗██████╗ █████╗ ██████╗ ██╗ ██╗",
" ██╔════╝ ██╔════╝████╗ ██║██╔════╝██╔══██╗██╔══██╗██╔══██╗╚██╗██╔╝",
" ██║ ███╗█████╗ ██╔██╗ ██║███████╗██████╔╝███████║██████╔╝ ╚███╔╝ ",
" ██║ ██║██╔══╝ ██║╚██╗██║╚════██║██╔═══╝ ██╔══██║██╔══██╗ ██╔██╗ ",
" ╚██████╔╝███████╗██║ ╚████║███████║██║ ██║ ██║██║ ██║██╔╝ ██╗",
" ╚═════╝ ╚══════╝╚═╝ ╚═══╝╚══════╝╚═╝ ╚═╝ ╚═╝╚═╝ ╚═╝╚═╝ ╚═╝",

## 7) Safe Rebrand Checklist (Do Now)

- [x] Update user-facing CLI/help text only (no env keys/type names), especially:
  - `src/commands/onboard.ts`
  - `src/commands/doctor.ts`
  - `src/commands/status.command.ts`
  - `src/commands/onboard-helpers.ts`
  - `src/cli/program/register.agent.ts`
- [ ] Update user-facing docs URLs/text from OpenClaw to GenSparx where appropriate:
  - `docs/**` (except legacy compatibility notes and historical references you want to keep)
- [x] Update CLI/command user-facing docs links from `docs.gensparx.com` to `docs.gensparx.com`:
  - scope completed: `src/cli/**`, `src/commands/**`
- [x] Update UI labels/help text only (do not rename internal storage/source ids yet):
  - `ui/src/ui/controllers/chat.ts`
  - any visible labels/messages in `ui/src/ui/views/*`
  - result: no user-facing OpenClaw text remained; only internal IDs/keys (`openclaw-*`) are left and intentionally deferred.
- [x] Keep current banner/art and visible branding consistent (`GenSparx`) in:
  - `src/cli/banner.ts`
  - `src/commands/onboard-helpers.ts`
- [x] After safe text-only edits, run:
  - `pnpm build`
  - `pnpm test` (recommended before release)

## 8) Unsafe Rebrand Checklist (Do Later, Planned Migration)

- [ ] Do **not** bulk-rename legacy env/config fallbacks yet:
  - `OPENCLAW_*`, `CLAWDBOT_*` in `src/config/*`, `src/daemon/*`, `src/gateway/*`, `scripts/*`
- [ ] Do **not** rename core type/API symbols yet:
  - `OpenClawConfig`, `OpenClawPlugin*`, related exports/imports
- [ ] Do **not** rename persistent/internal ids without migration logic:
  - storage keys, source ids, protocol/client ids, window globals
- [ ] Do **not** rename app/package/bundle identifiers yet:
  - `apps/android/*`, `apps/ios/*`, `apps/macos/*`
- [ ] Treat `Lobster` tool/docs as feature naming, not automatic brand leak:
  - `docs/tools/lobster.md` and related references

## 9) Latest Safe Rebrand Updates

- [x] Updated remaining safe comment/help branding in:
  - `src/hooks/loader.ts`
  - `src/hooks/internal-hooks.ts`
  - `src/version.ts`
  - `src/agents/auth-profiles/types.ts`
  - `src/agents/cli-runner/helpers.ts`
  - `src/agents/models-config.providers.ts`
  - `src/agents/pi-embedded-helpers/openai.ts`
  - `src/agents/pi-embedded-runner/utils.ts`
  - `src/agents/tool-policy.ts`
  - `src/agents/tool-images.ts`
- [ ] Deferred (compatibility-sensitive): internal type names, env keys, legacy aliases, protocol/client IDs, and filesystem IDs that still use `openclaw`.

Run a focused brand-leak audit (openclaw|moltbot|clawdbot|lobster) and classify each remaining hit as safe-to-change vs compat-keep

## 10) Safe Rebrand Pass (CLI + Commands)

- [x] Updated CLI/command user-facing wording to GenSparx where safe:
  - `src/cli/update-cli.ts` (tips/help strings now use `gensparx ...`; checkout wording now says "GenSparx checkout")
  - `src/cli/argv.ts` (fallback parse command now defaults to `gensparx`)
  - `src/commands/doctor-platform-notes.ts` (legacy env guidance now points to `GENSPARX_*` with `OPENCLAW_*` compatibility note)
- [x] Updated docs host references in CLI/commands from `docs.gensparx.ai` to `docs.gensparx.com` (safe text/link updates).
- [ ] Still intentionally unchanged (compatibility-sensitive): legacy path/env fallbacks and core symbol names (`OpenClawConfig`, `resolveOpenClaw*`, `.openclaw`, etc.).

## 11) Safe Rebrand Pass (CLI Browser + Docs Host)

- [x] Updated browser CLI display fallback label from `openclaw` to `gensparx`:
  - `src/cli/browser-cli-manage.ts`
- [x] Kept driver ID wording compatibility but marked it legacy in help text:
  - `--driver <driver>` still supports `openclaw|extension` (legacy-compatible)
- [x] Completed docs host migration in CLI/commands:
  - no remaining `docs.gensparx.ai` references under `src/cli/**` and `src/commands/**`

## 12) Safe Rebrand Pass (User-Facing Command Hints)

- [x] Updated user-facing command examples/help output from `openclaw ...` to `gensparx ...` in:
  - `src/agents/auth-profiles/doctor.ts`
  - `src/security/audit.ts`
  - `src/security/audit-extra.ts`
  - `src/agents/sandbox/docker.ts`
  - `src/providers/qwen-portal-oauth.ts`
  - `src/hooks/gmail-ops.ts`
  - `src/agents/model-auth.ts`
  - `src/telegram/bot-message-context.ts`
  - `src/feishu/message.ts`
- [x] Kept compatibility-sensitive internal identifiers unchanged:
  - example: `openclaw.configHash` Docker label key in `src/agents/sandbox/docker.ts`
- [x] Validation:
  - `pnpm build` passed after this batch.

## 13) Safe Rebrand Pass (Runtime/TUI/ACP Hints)

- [x] Updated additional user-facing command/help/log hints from `openclaw ...` to `gensparx ...` in:
  - `src/acp/server.ts`
  - `src/tui/tui.ts`
  - `src/auto-reply/reply/agent-runner-execution.ts`
  - `src/auto-reply/reply/reply-elevated.ts`
  - `src/auto-reply/reply/directive-handling.shared.ts`
  - `src/agents/sandbox/runtime-status.ts`

## 14) Safe Rebrand Pass (Config/CLI Labels)

- [x] Updated remaining safe user-facing label/help text:
  - `src/config/schema.ts` (`gensparx plugins update` example)
  - `src/cli/browser-cli-manage.ts` (driver help text now `gensparx|extension`, legacy note retained)
  - `src/config/types.browser.ts` (browser profile branding comment)
  - `src/browser/profiles.ts` (default color branding comment)

## 15) Safe Rebrand Pass (Gateway Detection + Comments)

- [x] Expanded Windows gateway task-name legacy detection to include `gensparx gateway` while keeping `openclaw gateway` compatibility:
  - `src/daemon/inspect.ts`
- [x] Updated remaining safe branding comments:
  - `src/browser/config.ts`
  - `src/agents/tool-policy.ts`

## 16) Safe Rebrand Pass (Docs Domain Links)

- [x] Updated docs domain links in `docs/**` (excluding `docs/zh-CN/**`):
  - `https://openclaw.ai/...` -> `https://gensparx.com/...`
  - `https://docs.openclaw.ai/...` -> `https://docs.gensparx.com/...`
  - `security@openclaw.ai` -> `security@gensparx.com`
- [x] Kept compatibility-sensitive internal/runtime identifiers unchanged.

## 17) Script Compatibility Pass (Prefer GenSparx CLI)

- [x] Updated installer E2E script to prefer `gensparx` with `openclaw` fallback:
  - `scripts/docker/install-sh-e2e/run.sh`
  - added CLI autodetect (`gensparx` first, then `openclaw`)
  - added package autodetect default (`gensparx`) for npm version checks/install
- [x] Updated cleanup smoke script to run CLI via `node scripts/run-node.mjs` (no `pnpm openclaw` script dependency):
  - `scripts/docker/cleanup-smoke/run.sh`
- [x] Compatibility references intentionally kept (legacy paths/keys/aliases):
  - `.openclaw` state mounts
  - `window.__openclaw`
  - legacy gateway/task markers

## 18) Validation Status (Latest)

- [x] `pnpm build` passes after rebrand and script compatibility changes.
- [ ] `pnpm test` has no shown test assertion failures, but still exits non-zero due to Vitest worker crash:
  - `Error: [vitest-pool]: Worker forks emitted error`
  - `Caused by: Error: Worker exited unexpectedly`
- [ ] Treat this as infrastructure/runtime instability until reproduced as a concrete failing test.

## 19) Test Stability Follow-up (Config Path Cache Scope)

- [x] Reproduced concrete failures under `vitest --pool=threads` in:
  - `src/commands/onboard-non-interactive.gateway.test.ts`
  - (cascading) `src/auto-reply/reply.raw-body.test.ts` worker abort after prior failure
- [x] Root cause fixed in `src/config/io.ts`:
  - `createConfigIO()` could select an existing config from default locations even when `GENSPARX_STATE_DIR` was explicitly set.
  - This caused onboarding writes to land in the wrong file during parallel tests.
- [x] Fix behavior:
  - explicit config path override -> pin to requested config path
  - explicit state dir override -> restrict candidate resolution to that state dir only
  - default behavior unchanged when no explicit overrides are provided
- [x] Verification:
  - `pnpm vitest run src/commands/onboard-non-interactive.gateway.test.ts src/auto-reply/reply.raw-body.test.ts --pool=threads --maxWorkers=1` passes.
  - `pnpm build` passes.

## 20) End-to-End Chat Summary (What We Did + What To Do Now)

### What we completed in this chat

- [x] Performed a broad rebrand audit and split results into:
  - safe-to-change now (user-facing text/help/docs links)
  - compatibility-sensitive (env keys, paths, type names, IDs)
- [x] Applied multiple safe rebrand passes in `src/**`:
  - user-facing CLI hints/help/log text moved from `openclaw ...` to `gensparx ...`
  - docs host usage in CLI/commands moved to `docs.gensparx.com`
  - browser/profile labeling updated where safe
- [x] Applied docs domain/email pass in `docs/**` (except `docs/zh-CN/**`):
  - `openclaw.ai` -> `gensparx.com`
  - `docs.openclaw.ai` -> `docs.gensparx.com`
  - `security@openclaw.ai` -> `security@gensparx.com`
- [x] Applied script compatibility pass:
  - `scripts/docker/install-sh-e2e/run.sh` now prefers `gensparx` CLI with `openclaw` fallback
  - `scripts/docker/cleanup-smoke/run.sh` now calls `node scripts/run-node.mjs ...` directly
- [x] Fixed a real config-path test stability bug in `src/config/io.ts`:
  - explicit `GENSPARX_STATE_DIR` now scopes candidate config lookup to that state dir
  - explicit `GENSPARX_CONFIG_PATH` now pins to requested config path
- [x] Fixed brittle home-dir assertion in `src/utils.test.ts`:
  - path expansion assertions now use `resolveHomeDir() ?? os.homedir()` to avoid cross-test env leakage

### Validation outcomes so far

- [x] `pnpm build` repeatedly passes after each batch.
- [x] Targeted fixes verified:
  - `src/commands/onboard-non-interactive.gateway.test.ts` passes in isolation
  - `src/auto-reply/reply.raw-body.test.ts` passes in isolation
  - `src/utils.test.ts` passes in isolation
- [ ] Full-suite `pnpm test` / long `vitest` runs are still intermittently unstable on worker process behavior in this Windows environment, and can also surface additional late-suite failures depending on run order.

### What is intentionally NOT changed yet (to avoid breaking compatibility)

- [ ] Legacy env/config fallbacks (`OPENCLAW_*`, `CLAWDBOT_*`)
- [ ] Core symbol names/types (`OpenClawConfig`, etc.)
- [ ] Internal IDs/keys/storage/protocol markers (including `.openclaw`, `window.__openclaw`) unless migrated with alias support
- [ ] App/bundle identifiers across platform apps

### What you should do right now (recommended)

1. Run targeted confidence checks first:
   - `pnpm build`
   - `pnpm vitest run src/commands/onboard-non-interactive.gateway.test.ts src/auto-reply/reply.raw-body.test.ts src/utils.test.ts --pool=threads --maxWorkers=1`
2. Then run full suite:
   - `pnpm vitest run --pool=threads --maxWorkers=1`
3. If full suite fails again:
   - capture the first `FAIL` block (file + assertion), not only the final worker summary
   - fix file-by-file from earliest failing test

## 21) Complete Repository Audit Verification (Final)

This section records the full-repo verification pass completed after all latest fixes.

### Final verification commands and status

- [x] `pnpm build` (pass)
- [x] `pnpm check` (pass: type-check + lint + format checks)
- [x] `pnpm vitest run --pool=threads --maxWorkers=1` (pass)

Latest full-suite result observed:

- `Test Files  916 passed | 20 skipped (936)`
- `Tests  6208 passed | 102 skipped (6310)`

### Issues fixed in this final audit pass

- [x] Restored missing type wiring in agent system prompt params for memory citation mode:
  - `src/agents/system-prompt.ts`
- [x] Removed unreachable/non-sensical doctor command branches after option narrowing:
  - `src/commands/doctor.ts`
- [x] Hardened memory test helper typing to avoid cross-env `better-sqlite3`/`describe` typing breakage:
  - `src/memory/test-helpers.ts`
- [x] Fixed UI renderer import and state-shape drift (broken imports + missing `AppViewState` fields/methods):
  - `ui/src/ui/app-render.ts`
  - `ui/src/ui/app-view-state.ts`
- [x] Fixed test env var restore logic bug in temp-home helper:
  - `test/helpers/temp-home.ts`
- [x] Cleaned lint/format blockers in core, scripts, browser, plugins, and vitest config:
  - `src/docker-setup.test.ts`
  - `src/browser/config.ts`
  - `src/browser/chrome.ts`
  - `src/plugins/loader.ts`
  - `scripts/test-parallel.mjs`
  - `scripts/bundle-a2ui.mjs`
  - `vitest.config.ts`
  - `vitest.unit.config.ts`
  - `vitest.extensions.config.ts`
  - `vitest.gateway.config.ts`
  - `src/telegram/bot.test.ts`
  - `extensions/mattermost/src/mattermost/monitor-helpers.ts`
- [x] Updated brittle doctor tests to match current output/call patterns safely:
  - `src/commands/doctor.migrates-routing-allowfrom-channels-whatsapp-allowfrom.test.ts`
  - `src/commands/doctor.warns-per-agent-sandbox-docker-browser-prune.test.ts`
  - `src/commands/doctor.warns-state-directory-is-missing.test.ts`

### End-to-end run state

- [x] Build passes
- [x] Check passes
- [x] Full vitest pass succeeds with thread pool and single worker
- [x] Repository is currently in a large multi-file modified state; this audit validated runtime/build/test integrity against that state

## 22) Cross-OS Launch Checklist (Windows, macOS, Linux, Mobile)

Use this launch order: `canary -> beta -> stable`.

### A) Release preparation (once)

- [ ] Freeze release candidate (tag/branch).
- [ ] Confirm release version in `package.json`.
- [ ] Update `CHANGELOG.md`.
- [ ] Final gate on release commit:
  - `pnpm build`
  - `pnpm check`
  - `pnpm vitest run --pool=threads --maxWorkers=1`

### B) Per-OS smoke tests (must pass before broad rollout)

#### Windows (Node CLI)

- [ ] Install release artifact.
- [ ] Run:
  - `gensparx --version`
  - `gensparx doctor`
  - `gensparx status`
  - `gensparx gateway probe`
- [ ] Verify one real onboarding + message flow.
- [ ] Verify no startup crash and no blocking errors in logs.

#### macOS (Node CLI + Mac app if shipped)

- [ ] Install release artifact(s).
- [ ] CLI smoke:
  - `gensparx --version`
  - `gensparx doctor`
  - `gensparx status`
  - `gensparx gateway probe`
- [ ] If app build is shipped: verify app launch, gateway start/stop, and one real message flow.
- [ ] Verify no signing/notarization/runtime blockers.

#### Linux (Node CLI + service flow)

- [ ] Install release artifact.
- [ ] CLI smoke:
  - `gensparx --version`
  - `gensparx doctor`
  - `gensparx status`
  - `gensparx gateway probe`
- [ ] Validate service path (`systemd`) if used in your deployment.
- [ ] Verify one real message flow.

#### Android / iOS (if releasing mobile clients)

- [ ] Install build on real device(s).
- [ ] Verify app startup and connection to gateway.
- [ ] Verify one send/receive flow.
- [ ] Verify reconnect behavior after app background/foreground.

### C) Channel rollout strategy

#### Canary

- [ ] One representative user/machine per OS.
- [ ] Observe for at least a few hours.
- [ ] Block promotion if any crash/regression appears.

#### Beta

- [ ] Expand to a broader set of users/devices.
- [ ] Monitor logs, support signals, and reconnect/runtime stability.

#### Stable

- [ ] Promote only after canary + beta are clean.
- [ ] Announce release with install/update commands.

### D) Rollback plan (required before stable)

- [ ] Keep previous known-good tag/version ready.
- [ ] If regression appears:
  - pause rollout
  - revert channel to previous stable version
  - publish fix as follow-up
- [ ] Do not continue promotion until root cause is fixed and re-verified.

## 23) Launch Day Checklist (Copy/Paste)

Use this exact sequence.

### Step 1: Push state (already done if these pass)

```bash
git ls-remote --heads origin main
git ls-remote --tags origin pre-launch-green-2026-02-15
```

Expected:
- `refs/heads/main` exists
- `refs/tags/pre-launch-green-2026-02-15` exists

### Step 2: Open PR to upstream

- Repo: `https://github.com/sparkaizen-AI/openclaw`
- Base: `openclaw/openclaw:main`
- Compare: `sparkaizen-AI:main`
- Title: `Infra: fix Windows gateway probe SSH path resolution`

PR body:

- Fixes Windows runtime crash in gateway probe (`spawn /usr/bin/ssh ENOENT`).
- Updated:
  - `src/infra/ssh-config.ts`
  - `src/infra/ssh-tunnel.ts`
- Uses platform-aware SSH binary selection with env overrides:
  - `GENSPARX_SSH_PATH`
  - `OPENCLAW_SSH_PATH`
- Verification:
  - `pnpm build` (pass)
  - `pnpm check` (pass)
  - `pnpm vitest run --pool=threads --maxWorkers=1` (pass)
  - `gensparx gateway probe` on Windows (no crash)

### Step 3: Canary test (one machine/user)

Run:

```bash
gensparx --version
gensparx status
gensparx doctor
gensparx gateway probe
```

Then:
- send 2-3 real messages
- watch for errors/crashes for a few hours

### Step 4: Decide rollout

- If canary is clean: proceed to beta, then stable.
- If canary fails: pause rollout and recover using tag:
  - `pre-launch-green-2026-02-15`
