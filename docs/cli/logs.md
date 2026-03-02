---
summary: "CLI reference for `gensparx logs` (tail gateway logs via RPC)"
read_when:
  - You need to tail Gateway logs remotely (without SSH)
  - You want JSON log lines for tooling
title: "logs"
---

# `gensparx logs`

Tail Gateway file logs over RPC (works in remote mode).

Related:

- Logging overview: [Logging](/logging)

## Examples

```bash
gensparx logs
gensparx logs --follow
gensparx logs --json
gensparx logs --limit 500
```


