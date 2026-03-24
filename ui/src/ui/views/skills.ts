import { html, nothing } from "lit";
import type { SkillMessageMap } from "../controllers/skills.ts";
import { clampText } from "../format.ts";
import type { SkillCatalogEntry, SkillStatusEntry, SkillStatusReport } from "../types.ts";
import { groupSkills } from "./skills-grouping.ts";
import {
  computeSkillMissing,
  computeSkillReasons,
  renderSkillStatusChips,
} from "./skills-shared.ts";

export type SkillsProps = {
  connected: boolean;
  loading: boolean;
  report: SkillStatusReport | null;
  error: string | null;
  filter: string;
  edits: Record<string, string>;
  busyKey: string | null;
  messages: SkillMessageMap;
  catalogLoading: boolean;
  catalogError: string | null;
  catalogEntries: SkillCatalogEntry[];
  catalogQuery: string;
  catalogNextCursor: string | null;
  catalogBaseUrl: string | null;
  catalogBusySlug: string | null;
  catalogMessages: SkillMessageMap;
  onFilterChange: (next: string) => void;
  onRefresh: () => void;
  onCatalogQueryChange: (next: string) => void;
  onCatalogRefresh: () => void;
  onCatalogLoadMore: () => void;
  onCatalogInstall: (slug: string) => void;
  onToggle: (skillKey: string, enabled: boolean) => void;
  onEdit: (skillKey: string, value: string) => void;
  onSaveKey: (skillKey: string) => void;
  onInstall: (skillKey: string, name: string, installId: string) => void;
};

export function renderSkills(props: SkillsProps) {
  const skills = props.report?.skills ?? [];
  const filter = props.filter.trim().toLowerCase();
  const filtered = filter
    ? skills.filter((skill) =>
        [skill.name, skill.description, skill.source].join(" ").toLowerCase().includes(filter),
      )
    : skills;
  const groups = groupSkills(filtered);

  return html`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Skills</div>
          <div class="card-sub">Installed skills and their status.</div>
        </div>
        <button class="btn" ?disabled=${props.loading || !props.connected} @click=${props.onRefresh}>
          ${props.loading ? "Loading…" : "Refresh"}
        </button>
      </div>

      <div class="filters" style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-top: 14px;">
        <a
          class="btn"
          href="https://gensparx.com"
          target="_blank"
          rel="noreferrer"
          title="Browse skills on Gensparx"
        >Browse Skills Store</a>
        <label class="field" style="flex: 1; min-width: 180px;">
          <input
            .value=${props.filter}
            @input=${(e: Event) => props.onFilterChange((e.target as HTMLInputElement).value)}
            placeholder="Search skills"
            autocomplete="off"
            name="skills-filter"
          />
        </label>
        <div class="muted">${filtered.length} shown</div>
      </div>

      ${
        props.error
          ? html`<div class="callout danger" style="margin-top: 12px;">${props.error}</div>`
          : nothing
      }

      ${
        filtered.length === 0
          ? html`
              <div class="muted" style="margin-top: 16px">
                ${
                  !props.connected && !props.report
                    ? "Not connected to gateway."
                    : "No skills found."
                }
              </div>
            `
          : html`
            <div class="agent-skills-groups" style="margin-top: 16px;">
              ${groups.map((group) => {
                const collapsedByDefault = group.id === "workspace" || group.id === "built-in";
                return html`
                  <details class="agent-skills-group" ?open=${!collapsedByDefault}>
                    <summary class="agent-skills-header">
                      <span>${group.label}</span>
                      <span class="muted">${group.skills.length}</span>
                    </summary>
                    <div class="list skills-grid">
                      ${group.skills.map((skill) => renderSkill(skill, props))}
                    </div>
                  </details>
                `;
              })}
            </div>
          `
      }
    </section>

    <section class="card" style="margin-top: 16px;">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Skills Catalog</div>
          <div class="card-sub">
            Browse community skills from the registry.
            ${props.catalogBaseUrl ? html`<span class="muted">(${props.catalogBaseUrl})</span>` : nothing}
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${props.catalogLoading || !props.connected}
          @click=${props.onCatalogRefresh}
        >
          ${props.catalogLoading ? "Loadingâ€¦" : "Refresh"}
        </button>
      </div>

      <div class="filters" style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-top: 14px;">
        <label class="field" style="flex: 1; min-width: 180px;">
          <input
            .value=${props.catalogQuery}
            @input=${(e: Event) => props.onCatalogQueryChange((e.target as HTMLInputElement).value)}
            placeholder="Search catalog"
            autocomplete="off"
            name="skills-catalog-filter"
          />
        </label>
        <button
          class="btn"
          ?disabled=${props.catalogLoading || !props.connected}
          @click=${props.onCatalogRefresh}
        >
          Search
        </button>
        <div class="muted">${props.catalogEntries.length} shown</div>
      </div>

      ${
        props.catalogError
          ? html`<div class="callout danger" style="margin-top: 12px;">${props.catalogError}</div>`
          : nothing
      }

      ${
        props.catalogEntries.length === 0
          ? html`
              <div class="muted" style="margin-top: 16px">
                ${
                  !props.connected
                    ? "Not connected to gateway."
                    : "No catalog results yet. Try searching."
                }
              </div>
            `
          : html`
              <div class="list skills-grid" style="margin-top: 16px;">
                ${props.catalogEntries.map((entry) =>
                  renderCatalogEntry(entry, props.catalogBaseUrl, props),
                )}
              </div>
            `
      }

      ${
        props.catalogNextCursor
          ? html`
              <div class="row" style="justify-content: flex-end; margin-top: 12px;">
                <button
                  class="btn"
                  ?disabled=${props.catalogLoading || !props.connected}
                  @click=${props.onCatalogLoadMore}
                >
                  Load more
                </button>
              </div>
            `
          : nothing
      }
    </section>
  `;
}

function renderSkill(skill: SkillStatusEntry, props: SkillsProps) {
  const busy = props.busyKey === skill.skillKey;
  const apiKey = props.edits[skill.skillKey] ?? "";
  const message = props.messages[skill.skillKey] ?? null;
  const canInstall = skill.install.length > 0 && skill.missing.bins.length > 0;
  const showBundledBadge = Boolean(skill.bundled && skill.source !== "gensparx-bundled");
  const missing = computeSkillMissing(skill);
  const reasons = computeSkillReasons(skill);
  return html`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">
          ${skill.emoji ? `${skill.emoji} ` : ""}${skill.name}
        </div>
        <div class="list-sub">${clampText(skill.description, 140)}</div>
        ${renderSkillStatusChips({ skill, showBundledBadge })}
        ${
          missing.length > 0
            ? html`
              <div class="muted" style="margin-top: 6px;">
                Missing: ${missing.join(", ")}
              </div>
            `
            : nothing
        }
        ${
          reasons.length > 0
            ? html`
              <div class="muted" style="margin-top: 6px;">
                Reason: ${reasons.join(", ")}
              </div>
            `
            : nothing
        }
      </div>
      <div class="list-meta">
        <div class="row" style="justify-content: flex-end; flex-wrap: wrap;">
          <button
            class="btn"
            ?disabled=${busy}
            @click=${() => props.onToggle(skill.skillKey, skill.disabled)}
          >
            ${skill.disabled ? "Enable" : "Disable"}
          </button>
          ${
            canInstall
              ? html`<button
                class="btn"
                ?disabled=${busy}
                @click=${() => props.onInstall(skill.skillKey, skill.name, skill.install[0].id)}
              >
                ${busy ? "Installing…" : skill.install[0].label}
              </button>`
              : nothing
          }
        </div>
        ${
          message
            ? html`<div
              class="muted"
              style="margin-top: 8px; color: ${
                message.kind === "error"
                  ? "var(--danger-color, #d14343)"
                  : "var(--success-color, #0a7f5a)"
              };"
            >
              ${message.message}
            </div>`
            : nothing
        }
        ${
          skill.primaryEnv
            ? html`
              <div class="field" style="margin-top: 10px;">
                <span>API key</span>
                <input
                  type="password"
                  .value=${apiKey}
                  @input=${(e: Event) =>
                    props.onEdit(skill.skillKey, (e.target as HTMLInputElement).value)}
                />
              </div>
              <button
                class="btn primary"
                style="margin-top: 8px;"
                ?disabled=${busy}
                @click=${() => props.onSaveKey(skill.skillKey)}
              >
                Save key
              </button>
            `
            : nothing
        }
      </div>
    </div>
  `;
}

function renderCatalogEntry(entry: SkillCatalogEntry, baseUrl: string | null, props: SkillsProps) {
  const tags = entry.tags ?? [];
  const busy = props.catalogBusySlug === entry.slug;
  const message = props.catalogMessages[entry.slug] ?? null;
  const detailsUrl = buildCatalogDetailsUrl(baseUrl, entry.slug);
  return html`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${entry.name}</div>
        ${entry.description ? html`<div class="list-sub">${clampText(entry.description, 140)}</div>` : nothing}
        ${
          tags.length > 0
            ? html`<div class="row" style="gap: 6px; flex-wrap: wrap; margin-top: 6px;">
                ${tags.map((tag) => html`<span class="chip">${tag}</span>`)}
              </div>`
            : nothing
        }
      </div>
      <div class="list-meta">
        ${
          detailsUrl
            ? html`<a class="btn" href=${detailsUrl} target="_blank" rel="noreferrer">Details</a>`
            : nothing
        }
        ${
          entry.homepage
            ? html`<a class="btn" href=${entry.homepage} target="_blank" rel="noreferrer">Open</a>`
            : nothing
        }
        <button
          class="btn primary"
          ?disabled=${busy || !props.connected}
          @click=${() => props.onCatalogInstall(entry.slug)}
        >
          ${busy ? "Installingâ€¦" : "Install"}
        </button>
        ${
          message
            ? html`<div
              class="muted"
              style="margin-top: 8px; color: ${
                message.kind === "error"
                  ? "var(--danger-color, #d14343)"
                  : "var(--success-color, #0a7f5a)"
              };"
            >
              ${message.message}
            </div>`
            : nothing
        }
      </div>
    </div>
  `;
}

function buildCatalogDetailsUrl(baseUrl: string | null, slug: string): string | null {
  if (!baseUrl) {
    return null;
  }
  const uiBase = normalizeRegistryUiBase(baseUrl);
  if (!uiBase) {
    return null;
  }
  try {
    return new URL(`skills/${encodeURIComponent(slug)}`, uiBase).toString();
  } catch {
    return null;
  }
}

function normalizeRegistryUiBase(baseUrl: string): string | null {
  try {
    const url = new URL(baseUrl);
    let path = url.pathname;
    if (path.endsWith("/api/v1/") || path.endsWith("/api/v1")) {
      path = path.replace(/\/api\/v1\/?$/, "/");
    }
    if (!path.endsWith("/")) {
      path = `${path}/`;
    }
    url.pathname = path;
    url.search = "";
    url.hash = "";
    return url.toString();
  } catch {
    return null;
  }
}
