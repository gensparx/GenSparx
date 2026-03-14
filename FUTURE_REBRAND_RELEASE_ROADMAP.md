# Future Rebrand Release Roadmap

## Product Snapshot (Current Capabilities)

GenSparx is a self-hosted, always-on AI assistant that connects to messaging channels and local tools via a gateway. It can run on a personal machine or VPS, handle chat across channels, and execute approved actions. Users bring their own model/API keys, and the system can be configured for safe, controlled automation with auditability.

## What We Already Completed (Summary)

- Install + onboarding flows aligned with docs and verified on Windows + bash + WSL.
- Control UI first-run behavior: default to Chat for local-only users and auto-open Chat on first run.
- Overview UI improvements: “Start here” actions, gateway status, and health summaries.
- Health summary now surfaces channel failures with direct operator hints.
- UI differentiation pass: topbar branding, overview hero layout, nav sidebar styling, config sidebar styling, and chat layout polish.
- Rebrand polish scan: no remaining legacy branding in user-facing docs/assets (excluding legacy shims and generated bundles).

## Phase 1: Onboarding and Install Experience

Goal: new user goes from install to first chat in under 5 minutes.

Deliverables:

- Align docs home quick start with the recommended installers (done).
- Add a concise quickstart checklist in `docs/start/getting-started.md`.
- Add a CLI nudge after `gensparx onboard` completes that points to `gensparx dashboard`.
- Verify end-to-end path on Windows (PowerShell), macOS/Linux (bash), and WSL.
- Control UI defaults to Chat when there are no configured channels (done).

## Phase 2: Control UI First-Run UX

Goal: first login shows clear next steps without overwhelming settings.

Deliverables:

- Add a "Start here" card set on Overview (connect channel, run doctor, open dashboard). (done)
- Highlight gateway status, token, and last error in a tighter top banner. (done)
- Reduce friction for "local-only" users (no channels yet) by surfacing Control UI chat first. (done)

## Phase 3: Rebrand Polish

Goal: remove remaining legacy labels from user-facing surfaces.

Deliverables:

- Re-scan docs/assets and confirm no legacy branding in user-facing text. (done)
- Leave compatibility shims and test fixtures intact unless they block UX.

## Phase 4: 24/7 Messaging Employee Experience (New Focus)

Goal: make GenSparx feel like a reliable, always-on messaging employee.

Deliverables:

- Always-on status block in the dashboard (running/idle/error).
- Clear “safe reply” controls (allowlist + approvals).
- Operator-focused logs and action history with “why” context.
- One-click pause/resume for the assistant.

## Phase 5: Ops-Grade Console

Goal: make reliability, approvals, and logs the product’s signature.

Deliverables:

- Logs view: clear timeline + filters + error highlighting.
- Approvals view: action gating with fast approve/deny flows.
- Health + status: unified system status panel for operators.

## Phase 6: Skills Strategy (Post-Polish)

Goal: curate skills that support the messaging employee role.

Deliverables:

- Decide the first “core job” (messaging support) and limit skill set to it.
- Add onboarding presets for that job.
- Validate skill licensing before bundling.

## Phase 7: Monetization Prep (After 3 Months)

Goal: prepare for subscriptions once payment tooling is available.

Deliverables:

- Define paid tier features (team controls, audit export, policy packs).
- Draft activation flow (license key or token).
- Keep core free until payments are ready.
