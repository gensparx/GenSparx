import { html } from "lit";
import { ConnectErrorDetailCodes } from "../../../../src/gateway/protocol/connect-error-details.js";
import { t, i18n, SUPPORTED_LOCALES, type Locale } from "../../i18n/index.ts";
import { buildExternalLinkRel, EXTERNAL_LINK_TARGET } from "../external-link.ts";
import { formatRelativeTimestamp, formatDurationHuman } from "../format.ts";
import type { GatewayHelloOk } from "../gateway.ts";
import { formatNextRun } from "../presenter.ts";
import type { UiSettings } from "../storage.ts";
import { shouldShowPairingHint } from "./overview-hints.ts";

type QuickstartAction = {
  label: string;
  detail: string;
  command: string;
};

export type OverviewProps = {
  connected: boolean;
  hello: GatewayHelloOk | null;
  health: Record<string, unknown> | null;
  settings: UiSettings;
  password: string;
  lastError: string | null;
  lastErrorCode: string | null;
  presenceCount: number;
  sessionsCount: number | null;
  cronEnabled: boolean | null;
  cronNext: number | null;
  lastChannelsRefresh: number | null;
  onSettingsChange: (next: UiSettings) => void;
  onPasswordChange: (next: string) => void;
  onSessionKeyChange: (next: string) => void;
  onConnect: () => void;
  onRefresh: () => void;
};

type HealthSummaryLike = {
  ok?: boolean;
  ts?: number;
  durationMs?: number;
  channels?: Record<string, unknown>;
  channelLabels?: Record<string, string>;
  agents?: Array<{ heartbeat?: { everyMs?: number | null } | null }>;
  sessions?: { count?: number | null };
};

const asRecord = (value: unknown): Record<string, unknown> | null =>
  value && typeof value === "object" ? (value as Record<string, unknown>) : null;

type ChannelFailure = {
  channelId: string;
  label: string;
  error: string;
};

function resolveHealthSummary(health: Record<string, unknown> | null) {
  const summary = health as HealthSummaryLike | null;
  const ok = summary?.ok === true;
  const channels =
    summary?.channels && typeof summary.channels === "object" ? summary.channels : {};
  const channelEntries = Object.values(channels ?? {});
  const channelCount = channelEntries.length;
  const channelLabels =
    summary?.channelLabels && typeof summary.channelLabels === "object"
      ? summary.channelLabels
      : {};
  const failures: ChannelFailure[] = [];
  for (const [channelId, entry] of Object.entries(channels ?? {})) {
    const record = asRecord(entry);
    if (!record) {
      continue;
    }
    const label =
      typeof channelLabels[channelId] === "string" ? channelLabels[channelId] : channelId;
    const probe = asRecord(record.probe);
    if (probe && probe.ok === false) {
      const error = typeof probe.error === "string" ? probe.error : "Probe failed";
      failures.push({ channelId, label, error });
      continue;
    }
    const accounts = asRecord(record.accounts);
    if (!accounts) {
      continue;
    }
    for (const account of Object.values(accounts)) {
      const accountRecord = asRecord(account);
      const accountProbe = asRecord(accountRecord?.probe);
      if (accountProbe?.ok === false) {
        const error = typeof accountProbe.error === "string" ? accountProbe.error : "Probe failed";
        failures.push({ channelId, label, error });
        break;
      }
    }
  }
  const channelFailures = failures.length;
  const agents = Array.isArray(summary?.agents) ? (summary?.agents ?? []) : [];
  const agentCount = agents.length;
  const heartbeatMs =
    typeof agents[0]?.heartbeat?.everyMs === "number" ? agents[0]?.heartbeat?.everyMs : null;
  const sessionCount =
    typeof summary?.sessions?.count === "number" ? summary?.sessions?.count : null;
  const durationMs = typeof summary?.durationMs === "number" ? summary?.durationMs : null;
  const ts = typeof summary?.ts === "number" ? summary?.ts : null;
  return {
    ok,
    channelCount,
    channelFailures,
    failures: failures.slice(0, 3),
    agentCount,
    heartbeatMs,
    sessionCount,
    durationMs,
    ts,
  };
}

export function renderOverview(props: OverviewProps) {
  const snapshot = props.hello?.snapshot as
    | {
        uptimeMs?: number;
        policy?: { tickIntervalMs?: number };
        authMode?: "none" | "token" | "password" | "trusted-proxy";
      }
    | undefined;
  const uptime = snapshot?.uptimeMs ? formatDurationHuman(snapshot.uptimeMs) : t("common.na");
  const tick = snapshot?.policy?.tickIntervalMs
    ? `${snapshot.policy.tickIntervalMs}ms`
    : t("common.na");
  const authMode = snapshot?.authMode;
  const isTrustedProxy = authMode === "trusted-proxy";
  const isConnected = props.connected;
  const isOffline = !isConnected;
  const hasError = Boolean(props.lastError);
  const statusTone = hasError ? "danger" : isOffline ? "warn" : "ok";
  const hasToken = Boolean(props.settings.token.trim());
  const hasPassword = Boolean(props.password.trim());
  const needsAuthHint = isOffline && !isTrustedProxy && !hasToken && !hasPassword;

  const pairingHint = (() => {
    if (!shouldShowPairingHint(props.connected, props.lastError, props.lastErrorCode)) {
      return null;
    }
    return html`
      <div class="muted" style="margin-top: 8px">
        ${t("overview.pairing.hint")}
        <div style="margin-top: 6px">
          <span class="mono">gensparx devices list</span><br />
          <span class="mono">gensparx devices approve &lt;requestId&gt;</span>
        </div>
        <div style="margin-top: 6px; font-size: 12px;">
          ${t("overview.pairing.mobileHint")}
        </div>
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.gensparx.com/web/control-ui#device-pairing-first-connection"
            target=${EXTERNAL_LINK_TARGET}
            rel=${buildExternalLinkRel()}
            title="Device pairing docs (opens in new tab)"
            >Docs: Device pairing</a
          >
        </div>
      </div>
    `;
  })();

  const authHint = (() => {
    if (props.connected || !props.lastError) {
      return null;
    }
    const lower = props.lastError.toLowerCase();
    const authRequiredCodes = new Set<string>([
      ConnectErrorDetailCodes.AUTH_REQUIRED,
      ConnectErrorDetailCodes.AUTH_TOKEN_MISSING,
      ConnectErrorDetailCodes.AUTH_PASSWORD_MISSING,
      ConnectErrorDetailCodes.AUTH_TOKEN_NOT_CONFIGURED,
      ConnectErrorDetailCodes.AUTH_PASSWORD_NOT_CONFIGURED,
    ]);
    const authFailureCodes = new Set<string>([
      ...authRequiredCodes,
      ConnectErrorDetailCodes.AUTH_UNAUTHORIZED,
      ConnectErrorDetailCodes.AUTH_TOKEN_MISMATCH,
      ConnectErrorDetailCodes.AUTH_PASSWORD_MISMATCH,
      ConnectErrorDetailCodes.AUTH_DEVICE_TOKEN_MISMATCH,
      ConnectErrorDetailCodes.AUTH_RATE_LIMITED,
      ConnectErrorDetailCodes.AUTH_TAILSCALE_IDENTITY_MISSING,
      ConnectErrorDetailCodes.AUTH_TAILSCALE_PROXY_MISSING,
      ConnectErrorDetailCodes.AUTH_TAILSCALE_WHOIS_FAILED,
      ConnectErrorDetailCodes.AUTH_TAILSCALE_IDENTITY_MISMATCH,
    ]);
    const authFailed = props.lastErrorCode
      ? authFailureCodes.has(props.lastErrorCode)
      : lower.includes("unauthorized") || lower.includes("connect failed");
    if (!authFailed) {
      return null;
    }
    const hasToken = Boolean(props.settings.token.trim());
    const hasPassword = Boolean(props.password.trim());
    const isAuthRequired = props.lastErrorCode
      ? authRequiredCodes.has(props.lastErrorCode)
      : !hasToken && !hasPassword;
    if (isAuthRequired) {
      return html`
        <div class="muted" style="margin-top: 8px">
          ${t("overview.auth.required")}
          <div style="margin-top: 6px">
            <span class="mono">gensparx dashboard --no-open</span> → tokenized URL<br />
            <span class="mono">gensparx doctor --generate-gateway-token</span> → set token
          </div>
          <div style="margin-top: 6px">
            <a
              class="session-link"
              href="https://docs.gensparx.com/web/dashboard"
              target=${EXTERNAL_LINK_TARGET}
              rel=${buildExternalLinkRel()}
              title="Control UI auth docs (opens in new tab)"
              >Docs: Control UI auth</a
            >
          </div>
        </div>
      `;
    }
    return html`
      <div class="muted" style="margin-top: 8px">
        ${t("overview.auth.failed", { command: "gensparx dashboard --no-open" })}
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.gensparx.com/web/dashboard"
            target=${EXTERNAL_LINK_TARGET}
            rel=${buildExternalLinkRel()}
            title="Control UI auth docs (opens in new tab)"
            >Docs: Control UI auth</a
          >
        </div>
      </div>
    `;
  })();

  const insecureContextHint = (() => {
    if (props.connected || !props.lastError) {
      return null;
    }
    const isSecureContext = typeof window !== "undefined" ? window.isSecureContext : true;
    if (isSecureContext) {
      return null;
    }
    const lower = props.lastError.toLowerCase();
    const insecureContextCode =
      props.lastErrorCode === ConnectErrorDetailCodes.CONTROL_UI_DEVICE_IDENTITY_REQUIRED ||
      props.lastErrorCode === ConnectErrorDetailCodes.DEVICE_IDENTITY_REQUIRED;
    if (
      !insecureContextCode &&
      !lower.includes("secure context") &&
      !lower.includes("device identity required")
    ) {
      return null;
    }
    return html`
      <div class="muted" style="margin-top: 8px">
        ${t("overview.insecure.hint", { url: "http://127.0.0.1:18789" })}
        <div style="margin-top: 6px">
          ${t("overview.insecure.stayHttp", { config: "gateway.controlUi.allowInsecureAuth: true" })}
        </div>
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.gensparx.com/gateway/tailscale"
            target=${EXTERNAL_LINK_TARGET}
            rel=${buildExternalLinkRel()}
            title="Tailscale Serve docs (opens in new tab)"
            >Docs: Tailscale Serve</a
          >
          <span class="muted"> · </span>
          <a
            class="session-link"
            href="https://docs.gensparx.com/web/control-ui#insecure-http"
            target=${EXTERNAL_LINK_TARGET}
            rel=${buildExternalLinkRel()}
            title="Insecure HTTP docs (opens in new tab)"
            >Docs: Insecure HTTP</a
          >
        </div>
      </div>
    `;
  })();

  const currentLocale = i18n.getLocale();
  const showQuickstart = props.connected && !props.lastError;
  const healthSummary = resolveHealthSummary(props.health);
  const heroTimestamp = props.lastChannelsRefresh ?? healthSummary.ts ?? null;
  const heroUpdated =
    heroTimestamp != null ? formatRelativeTimestamp(heroTimestamp) : t("common.na");
  const quickstartActions: QuickstartAction[] = [
    {
      label: "Open the Control UI",
      detail: "Run the dashboard for chat + config.",
      command: "gensparx dashboard",
    },
    {
      label: "Verify the Gateway",
      detail: "Check the gateway status locally.",
      command: "gensparx gateway status",
    },
    {
      label: "Connect a channel",
      detail: "Start WhatsApp pairing (optional).",
      command: "gensparx channels login",
    },
  ];

  return html`
    <section class="card overview-hero" style="margin-bottom: 18px;">
      <div class="overview-hero__header">
        <div>
          <div class="card-title">Gateway status</div>
          <div class="card-sub">Snapshot of connection health and next action.</div>
        </div>
        <div class="overview-hero__meta">
          <div class="hero-chip ${statusTone}">
            ${isConnected ? t("common.ok") : t("common.offline")}
          </div>
          <div class="hero-meta">Updated ${heroUpdated}</div>
        </div>
      </div>
      <div class="overview-hero__grid">
        <div class="callout ${statusTone === "danger" ? "danger" : statusTone === "warn" ? "warn" : ""}">
          <div>
            Status: <span class="mono">${isConnected ? t("common.ok") : t("common.offline")}</span>
          </div>
          ${hasError ? html`<div style="margin-top: 6px;">${props.lastError}</div>` : ""}
          ${
            needsAuthHint
              ? html`
                  <div class="muted" style="margin-top: 6px">
                    Missing token/password. Generate one with
                    <span class="mono">gensparx doctor --generate-gateway-token</span>.
                  </div>
                `
              : ""
          }
          <div class="muted" style="margin-top: 6px;">
            <span class="mono">gensparx gateway status</span> | <span class="mono">gensparx dashboard</span>
          </div>
        </div>
        <div class="overview-hero__actions">
          <div class="hero-action">
            <div class="hero-action__title">Run diagnostics</div>
            <div class="muted">Scan config + security checks.</div>
            <div class="mono" style="margin-top: 8px;">gensparx doctor</div>
          </div>
          <div class="hero-action">
            <div class="hero-action__title">Inspect channels</div>
            <div class="muted">Probe channel connectivity now.</div>
            <div class="mono" style="margin-top: 8px;">gensparx channels status --probe</div>
          </div>
        </div>
      </div>
    </section>

    <section class="grid grid-cols-2">
      <div class="card overview-access">
        <div class="card-title">${t("overview.access.title")}</div>
        <div class="card-sub">${t("overview.access.subtitle")}</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>${t("overview.access.wsUrl")}</span>
            <input
              .value=${props.settings.gatewayUrl}
              @input=${(e: Event) => {
                const v = (e.target as HTMLInputElement).value;
                props.onSettingsChange({ ...props.settings, gatewayUrl: v });
              }}
              placeholder="ws://100.x.y.z:18789"
            />
          </label>
          ${
            isTrustedProxy
              ? ""
              : html`
                <label class="field">
                  <span>${t("overview.access.token")}</span>
                  <input
                    .value=${props.settings.token}
                    @input=${(e: Event) => {
                      const v = (e.target as HTMLInputElement).value;
                      props.onSettingsChange({ ...props.settings, token: v });
                    }}
                    placeholder="GENSPARX_GATEWAY_TOKEN"
                  />
                </label>
                <label class="field">
                  <span>${t("overview.access.password")}</span>
                  <input
                    type="password"
                    .value=${props.password}
                    @input=${(e: Event) => {
                      const v = (e.target as HTMLInputElement).value;
                      props.onPasswordChange(v);
                    }}
                    placeholder="system or shared password"
                  />
                </label>
              `
          }
          <label class="field">
            <span>${t("overview.access.sessionKey")}</span>
            <input
              .value=${props.settings.sessionKey}
              @input=${(e: Event) => {
                const v = (e.target as HTMLInputElement).value;
                props.onSessionKeyChange(v);
              }}
            />
          </label>
          <label class="field">
            <span>${t("overview.access.language")}</span>
            <select
              .value=${currentLocale}
              @change=${(e: Event) => {
                const v = (e.target as HTMLSelectElement).value as Locale;
                void i18n.setLocale(v);
                props.onSettingsChange({ ...props.settings, locale: v });
              }}
            >
              ${SUPPORTED_LOCALES.map((loc) => {
                const key = loc.replace(/-([a-zA-Z])/g, (_, c) => c.toUpperCase());
                return html`<option value=${loc}>${t(`languages.${key}`)}</option>`;
              })}
            </select>
          </label>
        </div>
        <div class="row" style="margin-top: 14px;">
          <button class="btn" @click=${() => props.onConnect()}>${t("common.connect")}</button>
          <button class="btn" @click=${() => props.onRefresh()}>${t("common.refresh")}</button>
          <span class="muted">${
            isTrustedProxy ? t("overview.access.trustedProxy") : t("overview.access.connectHint")
          }</span>
        </div>
      </div>

      <div class="card overview-snapshot">
        <div class="card-title">${t("overview.snapshot.title")}</div>
        <div class="card-sub">${t("overview.snapshot.subtitle")}</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">${t("overview.snapshot.status")}</div>
            <div class="stat-value ${props.connected ? "ok" : "warn"}">
              ${props.connected ? t("common.ok") : t("common.offline")}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">${t("overview.snapshot.uptime")}</div>
            <div class="stat-value">${uptime}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${t("overview.snapshot.tickInterval")}</div>
            <div class="stat-value">${tick}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${t("overview.snapshot.lastChannelsRefresh")}</div>
            <div class="stat-value">
              ${props.lastChannelsRefresh ? formatRelativeTimestamp(props.lastChannelsRefresh) : t("common.na")}
            </div>
          </div>
        </div>
        ${
          props.lastError
            ? html`<div class="callout danger" style="margin-top: 14px;">
              <div>${props.lastError}</div>
              ${pairingHint ?? ""}
              ${authHint ?? ""}
              ${insecureContextHint ?? ""}
            </div>`
            : html`
                <div class="callout" style="margin-top: 14px">
                  ${t("overview.snapshot.channelsHint")}
                </div>
              `
        }
      </div>
    </section>

    <section class="grid grid-cols-3" style="margin-top: 18px;">
      <div class="card stat-card">
        <div class="stat-label">${t("overview.stats.instances")}</div>
        <div class="stat-value">${props.presenceCount}</div>
        <div class="muted">${t("overview.stats.instancesHint")}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${t("overview.stats.sessions")}</div>
        <div class="stat-value">${props.sessionsCount ?? t("common.na")}</div>
        <div class="muted">${t("overview.stats.sessionsHint")}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${t("overview.stats.cron")}</div>
        <div class="stat-value">
          ${props.cronEnabled == null ? t("common.na") : props.cronEnabled ? t("common.enabled") : t("common.disabled")}
        </div>
        <div class="muted">${t("overview.stats.cronNext", { time: formatNextRun(props.cronNext) })}</div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">Health summary</div>
      <div class="card-sub">Live gateway health snapshot and key counts.</div>
      <div class="stat-grid" style="margin-top: 16px;">
        <div class="stat">
          <div class="stat-label">Gateway</div>
          <div class="stat-value ${healthSummary.ok ? "ok" : "warn"}">
            ${healthSummary.ok ? t("common.ok") : t("common.na")}
          </div>
          <div class="muted">
            ${healthSummary.durationMs != null ? formatDurationHuman(healthSummary.durationMs) : t("common.na")} ·
            ${healthSummary.ts != null ? formatRelativeTimestamp(healthSummary.ts) : t("common.na")}
          </div>
        </div>
        <div class="stat">
          <div class="stat-label">Channels</div>
          <div class="stat-value ${healthSummary.channelFailures > 0 ? "warn" : "ok"}">
            ${healthSummary.channelCount || 0}
          </div>
          <div class="muted">
            ${
              healthSummary.channelFailures > 0
                ? `${healthSummary.channelFailures} failed`
                : "No probe failures"
            }
          </div>
        </div>
        <div class="stat">
          <div class="stat-label">Agents</div>
          <div class="stat-value">${healthSummary.agentCount || 0}</div>
          <div class="muted">
            ${
              healthSummary.heartbeatMs != null
                ? `Heartbeat ${formatDurationHuman(healthSummary.heartbeatMs)}`
                : "Heartbeat n/a"
            }
          </div>
        </div>
        <div class="stat">
          <div class="stat-label">Sessions</div>
          <div class="stat-value">${healthSummary.sessionCount ?? t("common.na")}</div>
          <div class="muted">Stored conversations</div>
        </div>
      </div>
      ${
        healthSummary.failures.length > 0
          ? html`
              <div class="callout warn" style="margin-top: 16px;">
                <div class="card-title" style="font-size: 14px;">Top channel failures</div>
                <div class="card-sub" style="margin-top: 4px;">
                  Fix the channels below or run <span class="mono">gensparx channels status --probe</span>.
                </div>
                <div class="list" style="margin-top: 12px;">
                  ${healthSummary.failures.map(
                    (failure) => html`
                      <div class="list-item">
                        <div class="list-main">
                          <div class="list-title">${failure.label}</div>
                          <div class="list-sub">${failure.error}</div>
                        </div>
                        <div class="list-meta">
                          <span class="mono">gensparx channels login</span>
                        </div>
                      </div>
                    `,
                  )}
                </div>
              </div>
            `
          : ""
      }
    </section>

    ${
      showQuickstart
        ? html`
            <section class="card" style="margin-top: 18px;">
              <div class="card-title">Start here</div>
              <div class="card-sub">Next steps for a fresh install.</div>
              <div class="note-grid" style="margin-top: 14px;">
                ${quickstartActions.map(
                  (action) => html`
                    <div>
                      <div class="note-title">${action.label}</div>
                      <div class="muted">${action.detail}</div>
                      <div class="mono" style="margin-top: 8px;">${action.command}</div>
                    </div>
                  `,
                )}
              </div>
            </section>
          `
        : ""
    }

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${t("overview.notes.title")}</div>
      <div class="card-sub">${t("overview.notes.subtitle")}</div>
      <div class="note-grid" style="margin-top: 14px;">
        <div>
          <div class="note-title">${t("overview.notes.tailscaleTitle")}</div>
          <div class="muted">
            ${t("overview.notes.tailscaleText")}
          </div>
        </div>
        <div>
          <div class="note-title">${t("overview.notes.sessionTitle")}</div>
          <div class="muted">${t("overview.notes.sessionText")}</div>
        </div>
        <div>
          <div class="note-title">${t("overview.notes.cronTitle")}</div>
          <div class="muted">${t("overview.notes.cronText")}</div>
        </div>
      </div>
    </section>
  `;
}
