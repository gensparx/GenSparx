# Future Rebrand Release Roadmap

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
- Add a “Start here” card set on Overview (connect channel, run doctor, open dashboard).
- Highlight gateway status, token, and last error in a tighter top banner.
- Reduce friction for “local-only” users (no channels yet) by surfacing Control UI chat first.

## Phase 3: Rebrand Polish

Goal: remove remaining legacy labels from user-facing surfaces.

Deliverables:
- Re-scan docs/assets and confirm no OpenClaw branding in user-facing text.
- Leave compatibility shims and test fixtures intact unless they block UX.
