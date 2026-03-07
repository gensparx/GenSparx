---
summary: "CLI reference for `gensparx devices` (device pairing + token rotation/revocation)"
read_when:
  - You are approving device pairing requests
  - You need to rotate or revoke device tokens
title: "devices"
---

# `gensparx devices`

Manage device pairing requests and device-scoped tokens.

## Commands

### `gensparx devices list`

List pending pairing requests and paired devices.

```
gensparx devices list
gensparx devices list --json
```

### `gensparx devices remove <deviceId>`

Remove one paired device entry.

```
gensparx devices remove <deviceId>
gensparx devices remove <deviceId> --json
```

### `gensparx devices clear --yes [--pending]`

Clear paired devices in bulk.

```
gensparx devices clear --yes
gensparx devices clear --yes --pending
gensparx devices clear --yes --pending --json
```

### `gensparx devices approve [requestId] [--latest]`

Approve a pending device pairing request. If `requestId` is omitted, Gensparx
automatically approves the most recent pending request.

```
gensparx devices approve
gensparx devices approve <requestId>
gensparx devices approve --latest
```

### `gensparx devices reject <requestId>`

Reject a pending device pairing request.

```
gensparx devices reject <requestId>
```

### `gensparx devices rotate --device <id> --role <role> [--scope <scope...>]`

Rotate a device token for a specific role (optionally updating scopes).

```
gensparx devices rotate --device <deviceId> --role operator --scope operator.read --scope operator.write
```

### `gensparx devices revoke --device <id> --role <role>`

Revoke a device token for a specific role.

```
gensparx devices revoke --device <deviceId> --role node
```

## Common options

- `--url <url>`: Gateway WebSocket URL (defaults to `gateway.remote.url` when configured).
- `--token <token>`: Gateway token (if required).
- `--password <password>`: Gateway password (password auth).
- `--timeout <ms>`: RPC timeout.
- `--json`: JSON output (recommended for scripting).

Note: when you set `--url`, the CLI does not fall back to config or environment credentials.
Pass `--token` or `--password` explicitly. Missing explicit credentials is an error.

## Notes

- Token rotation returns a new token (sensitive). Treat it like a secret.
- These commands require `operator.pairing` (or `operator.admin`) scope.
- `devices clear` is intentionally gated by `--yes`.
- If pairing scope is unavailable on local loopback (and no explicit `--url` is passed), list/approve can use a local pairing fallback.
