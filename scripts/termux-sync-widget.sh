#!/data/data/com.termux/files/usr/bin/bash
# GenSparx OAuth Sync Widget
# Syncs Claude Code tokens to GenSparx on l36 server
# Place in ~/.shortcuts/ on phone for Termux:Widget

termux-toast "Syncing GenSparx auth..."

# Run sync on l36 server
SERVER="${GENSPARX_SERVER:-${OPENCLAW_SERVER:-${CLAWDBOT_SERVER:-l36}}}"
RESULT=$(ssh "$SERVER" 'if [ -x /home/admin/gensparx/scripts/sync-claude-code-auth.sh ]; then /home/admin/gensparx/scripts/sync-claude-code-auth.sh; else /home/admin/openclaw/scripts/sync-claude-code-auth.sh; fi' 2>&1)
EXIT_CODE=$?

if [ $EXIT_CODE -eq 0 ]; then
    # Extract expiry time from output
    EXPIRY=$(echo "$RESULT" | grep "Token expires:" | cut -d: -f2-)

    termux-vibrate -d 100
    termux-toast "GenSparx synced! Expires:${EXPIRY}"

    # Optional: restart gateway service
    ssh "$SERVER" 'systemctl --user restart gensparx-gateway || systemctl --user restart openclaw-gateway' 2>/dev/null
else
    termux-vibrate -d 300
    termux-toast "Sync failed: ${RESULT}"
fi
