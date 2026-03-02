---
summary: "CLI reference for `gensparx reset` (reset local state/config)"
read_when:
  - You want to wipe local state while keeping the CLI installed
  - You want a dry-run of what would be removed
title: "reset"
---

# `gensparx reset`

Reset local config/state (keeps the CLI installed).

```bash
gensparx reset
gensparx reset --dry-run
gensparx reset --scope config+creds+sessions --yes --non-interactive
```


