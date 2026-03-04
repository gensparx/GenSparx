---
title: "Rebrand Compatibility Policy"
summary: "GenSparx rebrand rules for safe changes vs legacy compatibility boundaries"
read_when:
  - Planning rebrand work
  - Reviewing rename PRs
  - Deciding whether an OpenClaw/Moltbot/ClawdBot name can be changed
---

# Rebrand compatibility policy

This project is rebranding user-facing surfaces to **GenSparx** while preserving runtime compatibility for existing users and installed systems.

## Objective

- User-facing surfaces should say `GenSparx`.
- Legacy runtime contracts remain valid until a planned breaking migration.

## Safe-to-change now

Change these immediately when found:

- CLI help text, status text, prompts, headings, and examples
- UI labels and human-readable product names
- README/docs marketing copy and site text
- Notification titles/body text shown to end users

## Keep for compatibility (do not mass-replace)

Do not bulk-rename these without a dedicated migration plan:

- Env vars: `OPENCLAW_*`, `CLAWDBOT_*`
- Config keys and schema fields already used by existing installs
- Persistent paths/state filenames consumed by deployed systems
- Protocol keys, headers, wire payload fields, and deep-link schemes
- Type names/internal code identifiers where rename has wide coupling

## Migration policy

When a compatibility-bound name must be changed:

1. Add a backward-compatible reader/alias first.
2. Add tests for old and new formats.
3. Ship alias support in at least one stable release.
4. Remove legacy path only in a scheduled breaking release.

## PR checklist for rebrand changes

- Scope is explicit: user-facing only vs compatibility-layer migration
- No blind global find/replace across runtime contracts
- Tests updated only where behavior intentionally changed
- Release notes include user-visible wording changes

