# Rebrand Work Report

## Scope

- Goal: stabilize post-rebrand repo so core commands pass (`pnpm check`, `pnpm build`, `pnpm test`, `pnpm dev --help`, `node gensparx.mjs --help`).
- Rule: keep Gensparx branding, preserve intentional compatibility shims only.

## Session Log

- Initialized report.
- Baseline: repo has large in-progress rebrand diff.
- Ran `pnpm check`: PASS.
- Ran `pnpm build`: PASS.
- Ran `pnpm test`: PASS.
  - Result: `826 passed | 7 skipped` files, `6776 passed | 93 skipped` tests.
- Ran `pnpm dev --help`: PASS.
- Ran `node gensparx.mjs --help`: PASS.
- No code fixes were required in this run because all requested checks already passed.
- Cleanup batch started:
  - Introduced neutral core modules and converted legacy/openclaw-named modules into compatibility re-export shims.
  - Updated gensparx-facing exports to target core modules instead of legacy module filenames.
  - Updated A2UI JS alias injection to use legacy API global names from compatibility constants (no direct legacy string in `a2ui.ts`).

## Current Health Snapshot

- CLI command entrypoints are working.
- Typecheck/lint/format checks are working.
- Build pipeline is working.
- Test suite is working on this machine.

## Rebrand Trace Snapshot (for next cleanup batch)

- Search scope: `src ui apps docs test` (excluding `node_modules`, `dist`).
- Remaining `openclaw/OpenClaw/OPENCLAW` traces: `105 matches` in `13 files`.
- Main buckets:
  - iOS file list references in `apps/ios/SwiftSources.input.xcfilelist`.
  - A2UI bundle legacy identifiers in `src/canvas-host/a2ui/a2ui.bundle.js`.
  - Compatibility shims and legacy re-exports in `src/compat/*`, `src/infra/*`, `src/agents/*`, `src/config/*`.
  - Shared kit path references in `src/agents/tool-display.ts` and `ui/src/ui/tool-display.ts`.

## Cleanup Batch Files (Current Session)

- Added:
  - `src/infra/core-root.ts`
  - `src/infra/tmp-core-dir.ts`
  - `src/config/types.core.ts`
  - `src/agents/core-tools.ts`
  - `src/agents/core-tools.subagents.test-harness.ts`
  - `src/agents/core-tools.subagents.sessions-spawn.test-harness.ts`
- Updated:
  - `src/infra/openclaw-root.ts`
  - `src/infra/gensparx-root.ts`
  - `src/infra/tmp-openclaw-dir.ts`
  - `src/infra/tmp-gensparx-dir.ts`
  - `src/config/types.ts`
  - `src/config/types.openclaw.ts`
  - `src/config/types.gensparx.ts`
  - `src/agents/openclaw-tools.ts`
  - `src/agents/gensparx-tools.ts`
  - `src/agents/openclaw-tools.subagents.test-harness.ts`
  - `src/agents/gensparx-tools.subagents.test-harness.ts`
  - `src/agents/openclaw-tools.subagents.sessions-spawn.test-harness.ts`
  - `src/agents/gensparx-tools.subagents.sessions-spawn.test-harness.ts`
  - `src/compat/legacy-names.ts`
  - `src/canvas-host/a2ui.ts`

## Next Actions

1. Keep this report updated after every edit batch.
2. Do a targeted non-breaking rebrand cleanup on the remaining 13 trace files.
3. Re-run `pnpm check`, `pnpm build`, `pnpm test`, `pnpm dev --help`, `node gensparx.mjs --help`.
4. Commit each cleanup batch with scoped messages.

## Latest Validation Checkpoint (2026-03-07)

- Ran `pnpm check`: PASS.
- Ran `pnpm build`: PASS.
- Ran `pnpm test`: PASS.
  - Result: `826 passed | 7 skipped` files, `6776 passed | 93 skipped` tests.
- Ran CLI smoke help commands:
  - `node gensparx.mjs --help`: PASS
  - `node gensparx.mjs gateway --help`: PASS
  - `node gensparx.mjs channels --help`: PASS
  - `node gensparx.mjs plugins --help`: PASS
  - `node gensparx.mjs models --help`: PASS
  - `node gensparx.mjs memory --help`: PASS

### Validation Meaning

- The current tree is buildable, lint/type safe, and test-suite clean on this machine.
- Core CLI surfaces are starting correctly.
- This does not prove every external integration end-to-end (for example live channel credentials, network providers, device-specific runtimes); those require live env checks.

## Release + Publish Checkpoint (2026-03-08)

- Local release commit created and pushed:
  - `4d17668857` - `Release: bump version to 1.0.6-gensparx`
- Rebrand/doc/banner commit already on main:
  - `32fe0b3a0e` - `Rebrand: switch links to gensparx.com and sync GENSPARX ASCII banner`
- npm publish status:
  - `gensparx@1.0.6-gensparx` published to `latest`.
  - Dist-tags now show:
    - `latest: 1.0.6-gensparx`
    - `beta: 1.0.4-beta.1`
- Install verification from clean/global context:
  - `npm install -g gensparx@latest` resolves to `1.0.6-gensparx`.
  - `gensparx --version` shows `1.0.6-gensparx`.

## Resume Point (Next Session)

1. Continue targeted openclaw-trace cleanup in remaining intentional/legacy paths only.
2. Keep compatibility shims where required for old config/plugin/runtime behavior.
3. After each cleanup batch, run:
   - `pnpm check`
   - `pnpm build`
   - `pnpm test`
   - `node gensparx.mjs --help`
4. Commit in small scoped batches and keep this report updated at the end of each batch.

## Session Continuation Checkpoint (2026-03-09)

### What Was Completed

- Ran a full image-asset inventory for logo/rebrand planning.
  - Full-folder raw image count (including dependency/build folders): `579`
  - Project image count (excluding `.git`, `node_modules`, `dist`, build output): `108`
  - Branding-related image candidates: `62`
  - Legacy openclaw-named branding files identified: `6`
- Pushed logo asset update to GitHub:
  - `671c4c4f63` - `Assets: update pixel lobster logo`
- Pushed second logo refinement to GitHub:
  - `5fefe82000` - `Assets: refine pixel lobster logo`

### Git Incident + Recovery (Handled)

- During commit/push flow, git index entered a corrupted state (`index file smaller than expected`), and status briefly showed massive `D/??` churn.
- Performed safe diagnosis first (read-only checks), then index rebuild:
  - `git reset --mixed HEAD`
- Result:
  - Repository index restored to normal.
  - Target commit (`5fefe82000`) pushed successfully.
  - No mass file loss in tracked history.

### Current Release/Distribution Status

- Published npm `latest` is still correct:
  - `gensparx@latest = 1.0.6-gensparx`
- User install path for docs is now focused on:
  - `iwr -useb https://gensparx.com/install.ps1 | iex`

### Immediate Next Task (Requested)

1. Validate production installer flow end-to-end:
   - `iwr -useb https://gensparx.com/install.ps1 | iex`
   - `gensparx --version`
2. If installed version is not expected, fix in website/install repo (`public/install.ps1`) and re-verify.
3. Keep docs command aligned with live installer URL and behavior.

## Installer Rollout Validation (2026-03-09)

### PowerShell Installer (`install.ps1`) Status

- Live command validated:
  - `iwr -useb https://gensparx.com/install.ps1 | iex`
- Observed result:
  - Installer completed successfully.
  - `gensparx --version` reported `1.0.6-gensparx`.
  - `gensparx onboard` launched correctly after install.
- Outcome: Windows one-command install path is operational.

### Bash Installer (`install.sh`) Status

- Live command validated:
  - `curl -fsSL https://gensparx.com/install.sh | bash`
- WSL guard behavior validated:
  - When WSL shell resolved Windows npm (`/mnt/c/...`), installer correctly blocked execution and printed actionable fix guidance.
  - This prevented the previous `EBUSY` copyfile failure mode.
- Post-fix validation:
  - After using Linux-native npm/node in WSL, installer completed successfully.
  - Install output showed package install completion (`added ... packages`).
- Outcome: Linux/macOS installer path is operational, and WSL mixed-environment safety guard works as intended.

### Net Result

- Both documented one-command installers are functional:
  - `iwr -useb https://gensparx.com/install.ps1 | iex`
  - `curl -fsSL https://gensparx.com/install.sh | bash`
- Installer UX is safer in WSL and aligned with published npm latest.

## Release + Publish Checkpoint (2026-03-10)

### What Was Completed

- Release bump to `1.0.7-gensparx` created and pushed to `main`.
- npm publish to `latest` completed successfully.
- Dist-tag verification:
  - `latest: 1.0.7-gensparx`
  - `beta: 1.0.4-beta.1`
- Live version check:
  - `npm view gensparx@latest version` => `1.0.7-gensparx`

### Release Outcome

- Public install path now resolves to the latest release (`1.0.7-gensparx`).
- Rebrand + installer updates from prior sessions are now shipped on `latest`.

## Session Continuation Checkpoint (2026-03-11)

### What Was Completed

- App rebrand directory rename batch committed and pushed:
  - `d16d623f21` - `Rebrand: rename app kit paths and helpers`
- Full test pass after the rename batch:
  - `pnpm test` (low profile) => `826 passed | 7 skipped` files, `6776 passed | 93 skipped` tests.

### Openclaw Trace Scan (excluding legacy constants + generated bundles)

Excluded paths:

- `src/compat/legacy-names.ts` (legacy compatibility constants)
- `src/canvas-host/a2ui/*` (generated A2UI bundle)
- `node_modules`, `dist`, `.git`, `REBRAND_WORK_REPORT.md`

Remaining matches:

- `pnpm-lock.yaml` (dependency graph references `openclaw@2026.3.2`)
- `docs/zh-CN/reference/templates/IDENTITY.md` (generated i18n content; do not edit directly)
- `test/fixtures/hooks-install/*` tar/zip fixtures include `openclaw` in embedded package.json metadata
  - `tar-evil-id.tar`, `tar-hooks.tar`, `tar-reserved-id.tar`, `zip-hooks.zip`

## Next Phase Start Point

1. Continue remaining visual/asset rebranding passes (logos, legacy naming in image assets, cross-platform icon consistency).
2. Keep behavior-only compatibility shims where required, but remove avoidable legacy branding from user-facing assets/text.
3. Validate each rebrand batch with:
   - `pnpm check`
   - `pnpm build`
   - `pnpm test`
   - installer smoke checks on Windows + WSL/Linux.
