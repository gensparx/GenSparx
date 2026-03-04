---
title: "Rebrand Name Map"
summary: "Old-to-new naming map with safe-now vs deferred migration status"
read_when:
  - Doing rename work
  - Auditing leftover OpenClaw names
  - Reviewing branding consistency
---

# Rebrand name map

Use this map during Phase 2 rebrand work.

## Product labels

| Old name | New name | Safe now |
| --- | --- | --- |
| OpenClaw | GenSparx | yes |
| openclaw (human-facing docs text) | gensparx | yes |
| clawd bot / clawdbot (human-facing docs text) | GenSparx | yes |

## Runtime contracts

| Legacy key/name | Current action | Safe now |
| --- | --- | --- |
| `OPENCLAW_*` env vars | keep (add `GENSPARX_*` aliases later) | no |
| `CLAWDBOT_*` env vars | keep legacy compatibility | no |
| `~/.openclaw/*` state/config paths | keep until migration tooling exists | no |
| `openclaw` deep-link or protocol tokens | keep until clients migrate | no |
| headers/fields with `openclaw` in wire contracts | keep unless versioned | no |

## Code identifiers

| Identifier pattern | Action | Safe now |
| --- | --- | --- |
| `OpenClawConfig` / `openclaw*` type names | defer broad rename | no |
| User-facing string literals in code | rename to GenSparx | yes |
| Internal comments referencing product name | optional rename if non-contract | yes |

## Rule of thumb

- If users read it directly, rename now.
- If software depends on it, treat as a migration item.

