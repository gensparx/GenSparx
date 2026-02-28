---
summary: "Fast channel level troubleshooting with per channel failure signatures and fixes"
read_when:
  - Channel transport says connected but replies fail
  - You need channel specific checks before deep provider docs
title: "Channel Troubleshooting"
---

# Channel troubleshooting

Use this page when a channel connects but behavior is wrong.

## Command ladder

Run these in order first:

```bash
gensparx doctor
gensparx channels status --probe
```

Healthy baseline:

- `Runtime: running`
- `RPC probe: ok`
- Channel probe shows connected/ready

## WhatsApp

### WhatsApp failure signatures

- Logs show `HttpError: Network request for 'sendMessage' failed` or `sendChatAction` → check IPv6 DNS. If `api.telegram.org` resolves to IPv6 first and the host lacks IPv6 egress, force IPv4 or enable IPv6. See [/channels/telegram#troubleshooting](/channels/telegram#troubleshooting).
- Logs show `setMyCommands failed` → check outbound HTTPS and DNS reachability to `api.telegram.org` (common on locked-down VPS or proxies).


