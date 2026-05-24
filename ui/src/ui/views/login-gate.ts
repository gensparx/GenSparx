import { html } from "lit";
import { t } from "../../i18n/index.ts";
import { renderThemeToggle } from "../app-render.helpers.ts";
import type { AppViewState } from "../app-view-state.ts";
import { icons } from "../icons.ts";
import { normalizeBasePath } from "../navigation.ts";
import { agentLogoUrl } from "./agents-utils.ts";

export function renderLoginGate(state: AppViewState) {
  const basePath = normalizeBasePath(state.basePath ?? "");
  const faviconSrc = agentLogoUrl(basePath);
  const gatewayUrl = state.settings.gatewayUrl.trim() || "ws://127.0.0.1:18789";
  const onboarding = state.onboarding;
  const eyebrow = onboarding ? "Onboarding" : "Gateway control";
  const title = onboarding
    ? "Finish the Gensparx setup in one screen."
    : "Run Gensparx with less setup friction.";
  const panelTitle = onboarding ? "Complete first connection" : "Connect to your gateway";
  const panelSub = onboarding
    ? "Use the gateway address and secret generated during setup, then land directly in the dashboard."
    : "Use the same address and secret you generated from the CLI or desktop dashboard.";

  return html`
    <div class="login-gate">
      <div class="login-gate__theme">${renderThemeToggle(state)}</div>
      <div class="login-gate__card">
        <div class="login-gate__layout">
          <section class="login-gate__intro">
            <div class="login-gate__header">
              <img class="login-gate__logo" src=${faviconSrc} alt="Gensparx" />
              <div class="login-gate__eyebrow">${eyebrow}</div>
              <div class="login-gate__title">${title}</div>
              <div class="login-gate__sub">${t("login.subtitle")}</div>
            </div>
            <div class="login-gate__status">
              <span class="login-gate__status-pill">
                <span class="statusDot warn"></span>
                Gateway not connected
              </span>
              <code>${gatewayUrl}</code>
            </div>
            <div class="login-gate__highlights">
              <div class="login-gate__highlight">
                <span class="login-gate__highlight-icon">${icons.zap}</span>
                <div>
                  <strong>Fast first connect</strong>
                  <span>Paste the gateway URL, token, and optional password once.</span>
                </div>
              </div>
              <div class="login-gate__highlight">
                <span class="login-gate__highlight-icon">${icons.monitor}</span>
                <div>
                  <strong>Everything in one place</strong>
                  <span>Overview, sessions, skills, nodes, and config live in the same control UI.</span>
                </div>
              </div>
              <div class="login-gate__highlight">
                <span class="login-gate__highlight-icon">${icons.book}</span>
                <div>
                  <strong>Docs only for real features</strong>
                  <span>The help links below point to the exact dashboard and gateway flows you can use today.</span>
                </div>
              </div>
            </div>
            <div class="login-gate__help">
              <div class="login-gate__help-title">${t("overview.connection.title")}</div>
              <ol class="login-gate__steps">
                <li>${t("overview.connection.step1")}<code>gensparx gateway run</code></li>
                <li>${t("overview.connection.step2")}<code>gensparx dashboard --no-open</code></li>
                <li>${t("overview.connection.step3")}</li>
              </ol>
              <div class="login-gate__docs">
                <a
                  class="session-link"
                  href="https://docs.gensparx.com/web/dashboard"
                  target="_blank"
                  rel="noreferrer"
                >${t("overview.connection.docsLink")}</a>
              </div>
            </div>
          </section>

          <section class="login-gate__connect-panel">
            <div class="login-gate__panel-title">${panelTitle}</div>
            <div class="login-gate__panel-sub">${panelSub}</div>
            <div class="login-gate__form">
              <label class="field">
                <span>${t("overview.access.wsUrl")}</span>
                <input
                  .value=${state.settings.gatewayUrl}
                  @input=${(e: Event) => {
                    const v = (e.target as HTMLInputElement).value;
                    state.applySettings({ ...state.settings, gatewayUrl: v });
                  }}
                  placeholder="ws://127.0.0.1:18789"
                />
              </label>
              <label class="field">
                <span>${t("overview.access.token")}</span>
                <div class="login-gate__secret-row">
                  <input
                    type=${state.loginShowGatewayToken ? "text" : "password"}
                    autocomplete="off"
                    spellcheck="false"
                    .value=${state.settings.token}
                    @input=${(e: Event) => {
                      const v = (e.target as HTMLInputElement).value;
                      state.applySettings({ ...state.settings, token: v });
                    }}
                    placeholder="GENSPARX_GATEWAY_TOKEN (${t("login.passwordPlaceholder")})"
                    @keydown=${(e: KeyboardEvent) => {
                      if (e.key === "Enter") {
                        state.connect();
                      }
                    }}
                  />
                  <button
                    type="button"
                    class="btn btn--icon ${state.loginShowGatewayToken ? "active" : ""}"
                    title=${state.loginShowGatewayToken ? "Hide token" : "Show token"}
                    aria-label="Toggle token visibility"
                    aria-pressed=${state.loginShowGatewayToken}
                    @click=${() => {
                      state.loginShowGatewayToken = !state.loginShowGatewayToken;
                    }}
                  >
                    ${state.loginShowGatewayToken ? icons.eye : icons.eyeOff}
                  </button>
                </div>
              </label>
              <label class="field">
                <span>${t("overview.access.password")}</span>
                <div class="login-gate__secret-row">
                  <input
                    type=${state.loginShowGatewayPassword ? "text" : "password"}
                    autocomplete="off"
                    spellcheck="false"
                    .value=${state.password}
                    @input=${(e: Event) => {
                      const v = (e.target as HTMLInputElement).value;
                      state.password = v;
                    }}
                    placeholder="${t("login.passwordPlaceholder")}"
                    @keydown=${(e: KeyboardEvent) => {
                      if (e.key === "Enter") {
                        state.connect();
                      }
                    }}
                  />
                  <button
                    type="button"
                    class="btn btn--icon ${state.loginShowGatewayPassword ? "active" : ""}"
                    title=${state.loginShowGatewayPassword ? "Hide password" : "Show password"}
                    aria-label="Toggle password visibility"
                    aria-pressed=${state.loginShowGatewayPassword}
                    @click=${() => {
                      state.loginShowGatewayPassword = !state.loginShowGatewayPassword;
                    }}
                  >
                    ${state.loginShowGatewayPassword ? icons.eye : icons.eyeOff}
                  </button>
                </div>
              </label>
              <button
                class="btn primary login-gate__connect"
                @click=${() => state.connect()}
              >
                ${t("common.connect")}
              </button>
            </div>
            ${
              state.lastError
                ? html`<div class="callout danger" style="margin-top: 14px;">
                    <div>${state.lastError}</div>
                  </div>`
                : ""
            }
          </section>
        </div>
      </div>
    </div>
  `;
}
