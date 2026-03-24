import { randomUUID } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import type { ReadableStream as NodeReadableStream } from "node:stream/web";
import {
  listAgentIds,
  resolveAgentWorkspaceDir,
  resolveDefaultAgentId,
} from "../../agents/agent-scope.js";
import { extractArchive } from "../../agents/skills-install-extract.js";
import { formatInstallFailureMessage } from "../../agents/skills-install-output.js";
import { installSkill } from "../../agents/skills-install.js";
import { buildWorkspaceSkillStatus } from "../../agents/skills-status.js";
import { loadWorkspaceSkillEntries, type SkillEntry } from "../../agents/skills.js";
import { listAgentWorkspaceDirs } from "../../agents/workspace-dirs.js";
import type { GensparxConfig } from "../../config/config.js";
import { loadConfig, writeConfigFile } from "../../config/config.js";
import { assertCanonicalPathWithinBase } from "../../infra/install-safe-path.js";
import { fetchWithSsrFGuard } from "../../infra/net/fetch-guard.js";
import { getRemoteSkillEligibility } from "../../infra/skills-remote.js";
import { normalizeAgentId } from "../../routing/session-key.js";
import { ensureDir } from "../../utils.js";
import { normalizeSecretInput } from "../../utils/normalize-secret-input.js";
import {
  ErrorCodes,
  errorShape,
  formatValidationErrors,
  validateSkillsBinsParams,
  validateSkillsCatalogParams,
  validateSkillsCatalogInstallParams,
  validateSkillsInstallParams,
  validateSkillsStatusParams,
  validateSkillsUpdateParams,
} from "../protocol/index.js";
import type { GatewayRequestHandlers } from "./types.js";

function collectSkillBins(entries: SkillEntry[]): string[] {
  const bins = new Set<string>();
  for (const entry of entries) {
    const required = entry.metadata?.requires?.bins ?? [];
    const anyBins = entry.metadata?.requires?.anyBins ?? [];
    const install = entry.metadata?.install ?? [];
    for (const bin of required) {
      const trimmed = bin.trim();
      if (trimmed) {
        bins.add(trimmed);
      }
    }
    for (const bin of anyBins) {
      const trimmed = bin.trim();
      if (trimmed) {
        bins.add(trimmed);
      }
    }
    for (const spec of install) {
      const specBins = spec?.bins ?? [];
      for (const bin of specBins) {
        const trimmed = String(bin).trim();
        if (trimmed) {
          bins.add(trimmed);
        }
      }
    }
  }
  return [...bins].toSorted();
}

const DEFAULT_SKILLS_REGISTRY_BASE_URL = "https://clawhub.ai/api/v1/";
const DEFAULT_SKILLS_REGISTRY_TIMEOUT_MS = 10_000;

type SkillsCatalogEntry = {
  slug: string;
  name: string;
  description?: string;
  author?: string;
  license?: string;
  homepage?: string;
  source?: string;
  tags?: string[];
  updatedAt?: string;
};

type RegistryArchiveFetchResult = {
  response: Response;
  release: () => Promise<void>;
  filename: string;
};

function asString(value: unknown): string | undefined {
  if (typeof value !== "string") {
    return undefined;
  }
  const trimmed = value.trim();
  return trimmed ? trimmed : undefined;
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }
  const result: string[] = [];
  for (const entry of value) {
    const str = asString(entry);
    if (str) {
      result.push(str);
    }
  }
  return result;
}

function normalizeRegistryBaseUrl(raw: string): string {
  const parsed = new URL(raw);
  if (!parsed.pathname.endsWith("/")) {
    parsed.pathname = `${parsed.pathname}/`;
  }
  return parsed.toString();
}

function resolveSkillsRegistryConfig(cfg: GensparxConfig): {
  enabled: boolean;
  baseUrl: string;
  allowlist: string[];
  timeoutMs: number;
  allowInstall: boolean;
} {
  const registry = cfg.skills?.registry ?? {};
  const baseUrlRaw = asString(registry.baseUrl) ?? DEFAULT_SKILLS_REGISTRY_BASE_URL;
  let baseUrl: string;
  try {
    baseUrl = normalizeRegistryBaseUrl(baseUrlRaw);
  } catch {
    baseUrl = DEFAULT_SKILLS_REGISTRY_BASE_URL;
  }
  const hostname = new URL(baseUrl).hostname;
  const allowlistEntries = (registry.allowlist ?? []).map((entry) => entry.trim()).filter(Boolean);
  const allowlist = [...new Set([hostname, ...allowlistEntries])];
  const timeoutMs =
    typeof registry.timeoutMs === "number" && Number.isFinite(registry.timeoutMs)
      ? Math.max(1000, Math.floor(registry.timeoutMs))
      : DEFAULT_SKILLS_REGISTRY_TIMEOUT_MS;
  return {
    enabled: registry.enabled !== false,
    baseUrl,
    allowlist,
    timeoutMs,
    allowInstall: registry.allowInstall !== false,
  };
}

function sanitizeSkillDirName(raw: string): string {
  const trimmed = raw.trim().toLowerCase();
  return trimmed
    .replace(/[^a-z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function isNodeReadableStream(value: unknown): value is NodeJS.ReadableStream {
  return Boolean(value && typeof (value as NodeJS.ReadableStream).pipe === "function");
}

function resolveArchiveType(params: {
  filename: string;
  contentType: string;
}): "zip" | "tar.gz" | "tar.bz2" | undefined {
  const type = params.contentType.toLowerCase();
  if (type.includes("zip")) {
    return "zip";
  }
  if (type.includes("tar") || type.includes("gzip") || type.includes("x-gzip")) {
    return "tar.gz";
  }
  if (type.includes("bzip2")) {
    return "tar.bz2";
  }
  const lower = params.filename.toLowerCase();
  if (lower.endsWith(".zip")) {
    return "zip";
  }
  if (lower.endsWith(".tar.gz") || lower.endsWith(".tgz")) {
    return "tar.gz";
  }
  if (lower.endsWith(".tar.bz2") || lower.endsWith(".tbz2")) {
    return "tar.bz2";
  }
  return undefined;
}

function extractFilenameFromHeaders(headers: Headers, fallback: string): string {
  const contentDisposition = headers.get("content-disposition") ?? "";
  const match = contentDisposition.match(/filename\\*?=(?:UTF-8''|")?([^";\\s]+)/i);
  if (match?.[1]) {
    return decodeURIComponent(match[1].replace(/"/g, "")) || fallback;
  }
  return fallback;
}

async function fetchRegistryArchive(params: {
  baseUrl: string;
  allowlist: string[];
  timeoutMs: number;
  slug: string;
}): Promise<RegistryArchiveFetchResult | null> {
  const candidates: Array<{ url: URL; init?: RequestInit }> = [];
  candidates.push({
    url: new URL(`skills/${encodeURIComponent(params.slug)}/download`, params.baseUrl),
  });
  const downloadUrl = new URL("download", params.baseUrl);
  downloadUrl.searchParams.set("slug", params.slug);
  candidates.push({ url: downloadUrl });
  candidates.push({
    url: new URL("download", params.baseUrl),
    init: {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ slug: params.slug }),
    },
  });

  for (const candidate of candidates) {
    const { response, release } = await fetchWithSsrFGuard({
      url: candidate.url.toString(),
      init: candidate.init,
      timeoutMs: params.timeoutMs,
      policy: { hostnameAllowlist: params.allowlist },
      auditContext: "skills.catalog.install",
    });
    if (!response.ok) {
      await release();
      continue;
    }

    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
      try {
        const payload = (await response.json()) as Record<string, unknown>;
        const urlValue =
          asString(payload?.url) ??
          asString(payload?.downloadUrl) ??
          asString(payload?.archiveUrl) ??
          asString(payload?.fileUrl);
        if (urlValue) {
          await release();
          const follow = await fetchWithSsrFGuard({
            url: urlValue,
            timeoutMs: params.timeoutMs,
            policy: { hostnameAllowlist: params.allowlist },
            auditContext: "skills.catalog.install",
          });
          const filename = extractFilenameFromHeaders(
            follow.response.headers,
            `${params.slug}.zip`,
          );
          return { response: follow.response, release: follow.release, filename };
        }
      } catch {
        // fall through
      }
      await release();
      continue;
    }

    const filename = extractFilenameFromHeaders(response.headers, `${params.slug}.zip`);
    return { response, release, filename };
  }
  return null;
}

async function downloadArchive(params: {
  response: Response;
  release: () => Promise<void>;
  targetDir: string;
  timeoutMs: number;
  filename: string;
}): Promise<{ archivePath: string; archiveType?: string; bytes: number }> {
  const stagingDir = path.join(params.targetDir, ".gensparx-catalog-staging");
  await ensureDir(stagingDir);
  await assertCanonicalPathWithinBase({
    baseDir: params.targetDir,
    candidatePath: stagingDir,
    boundaryLabel: "skill directory",
  });
  const tempPath = path.join(stagingDir, `${randomUUID()}.tmp`);
  try {
    const file = fs.createWriteStream(tempPath);
    const body = params.response.body as unknown;
    if (!body) {
      throw new Error("Download response missing body");
    }
    const readable = isNodeReadableStream(body)
      ? body
      : Readable.fromWeb(body as NodeReadableStream);
    await pipeline(readable, file);
    const archivePath = path.join(params.targetDir, params.filename);
    await fs.promises.rename(tempPath, archivePath);
    const stat = await fs.promises.stat(archivePath);
    const archiveType = resolveArchiveType({
      filename: params.filename,
      contentType: params.response.headers.get("content-type") ?? "",
    });
    return { archivePath, archiveType, bytes: stat.size };
  } finally {
    await fs.promises.rm(tempPath, { force: true }).catch(() => undefined);
    await params.release();
  }
}

async function promoteNestedSkillDir(params: {
  targetDir: string;
  skillFilePath: string;
}): Promise<void> {
  if (fs.existsSync(params.skillFilePath)) {
    return;
  }
  const entries = await fs.promises.readdir(params.targetDir, { withFileTypes: true });
  const candidates = entries.filter(
    (entry) =>
      entry.isDirectory() &&
      entry.name !== ".gensparx-catalog-staging" &&
      entry.name !== "." &&
      entry.name !== "..",
  );
  if (candidates.length !== 1) {
    return;
  }
  const nestedDir = path.join(params.targetDir, candidates[0].name);
  const nestedSkill = path.join(nestedDir, "SKILL.md");
  if (!fs.existsSync(nestedSkill)) {
    return;
  }
  const nestedEntries = await fs.promises.readdir(nestedDir, { withFileTypes: true });
  for (const entry of nestedEntries) {
    const from = path.join(nestedDir, entry.name);
    const to = path.join(params.targetDir, entry.name);
    if (fs.existsSync(to)) {
      continue;
    }
    await fs.promises.rename(from, to);
  }
  await fs.promises.rmdir(nestedDir).catch(() => undefined);
}
async function fetchRegistrySkillFile(params: {
  baseUrl: string;
  allowlist: string[];
  timeoutMs: number;
  slug: string;
}): Promise<string> {
  const url = new URL(`skills/${encodeURIComponent(params.slug)}/file`, params.baseUrl);
  url.searchParams.set("path", "SKILL.md");
  const { response, release } = await fetchWithSsrFGuard({
    url: url.toString(),
    timeoutMs: params.timeoutMs,
    policy: { hostnameAllowlist: params.allowlist },
    auditContext: "skills.catalog.install",
  });
  try {
    if (!response.ok) {
      throw new Error(`Download failed (${response.status} ${response.statusText})`);
    }
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
      const payload = (await response.json()) as Record<string, unknown>;
      const content =
        asString(payload?.content) ??
        asString(payload?.file) ??
        asString(payload?.data) ??
        asString(payload?.text);
      if (!content) {
        throw new Error("Download response missing content");
      }
      return content;
    }
    return await response.text();
  } finally {
    await release();
  }
}

function normalizeCatalogEntry(entry: unknown): SkillsCatalogEntry | null {
  if (!entry || typeof entry !== "object") {
    return null;
  }
  const record = entry as Record<string, unknown>;
  const slug =
    asString(record.slug) ?? asString(record.id) ?? asString(record.name) ?? asString(record.key);
  if (!slug) {
    return null;
  }
  const name = asString(record.name) ?? slug;
  const description =
    asString(record.description) ?? asString(record.summary) ?? asString(record.tagline);
  const author = asString(record.author) ?? asString(record.owner) ?? asString(record.publisher);
  const license = asString(record.license);
  const homepage =
    asString(record.homepage) ??
    asString(record.url) ??
    asString(record.link) ??
    asString(record.repo);
  const updatedAt =
    asString(record.updatedAt) ?? asString(record.updated_at) ?? asString(record.lastUpdated);
  const tags = asStringArray(record.tags ?? record.categories ?? record.keywords);
  const next: SkillsCatalogEntry = {
    slug,
    name,
    source: "clawhub",
  };
  if (description) {
    next.description = description;
  }
  if (author) {
    next.author = author;
  }
  if (license) {
    next.license = license;
  }
  if (homepage) {
    next.homepage = homepage;
  }
  if (updatedAt) {
    next.updatedAt = updatedAt;
  }
  if (tags.length > 0) {
    next.tags = tags;
  }
  return next;
}

function extractCatalogEntries(payload: unknown): {
  entries: SkillsCatalogEntry[];
  nextCursor?: string;
} {
  if (!payload) {
    return { entries: [] };
  }
  const record = typeof payload === "object" ? (payload as Record<string, unknown>) : null;
  const list =
    (Array.isArray(payload) ? payload : null) ??
    (record && Array.isArray(record.skills) ? record.skills : null) ??
    (record && Array.isArray(record.data) ? record.data : null) ??
    (record && Array.isArray(record.results) ? record.results : null) ??
    [];
  const entries: SkillsCatalogEntry[] = [];
  const seen = new Set<string>();
  for (const item of list) {
    const normalized = normalizeCatalogEntry(item);
    if (!normalized) {
      continue;
    }
    if (seen.has(normalized.slug)) {
      continue;
    }
    seen.add(normalized.slug);
    entries.push(normalized);
  }
  let nextCursor: string | undefined;
  if (record) {
    nextCursor =
      asString(record.nextCursor) ??
      asString(record.next) ??
      asString(record.cursor) ??
      (record.cursor && typeof record.cursor === "object"
        ? asString((record.cursor as Record<string, unknown>).next)
        : undefined);
  }
  return { entries, nextCursor };
}

function formatFetchError(err: unknown): string {
  if (err instanceof Error) {
    return err.message;
  }
  return String(err);
}

export const skillsHandlers: GatewayRequestHandlers = {
  "skills.status": ({ params, respond }) => {
    if (!validateSkillsStatusParams(params)) {
      respond(
        false,
        undefined,
        errorShape(
          ErrorCodes.INVALID_REQUEST,
          `invalid skills.status params: ${formatValidationErrors(validateSkillsStatusParams.errors)}`,
        ),
      );
      return;
    }
    const cfg = loadConfig();
    const agentIdRaw = typeof params?.agentId === "string" ? params.agentId.trim() : "";
    const agentId = agentIdRaw ? normalizeAgentId(agentIdRaw) : resolveDefaultAgentId(cfg);
    if (agentIdRaw) {
      const knownAgents = listAgentIds(cfg);
      if (!knownAgents.includes(agentId)) {
        respond(
          false,
          undefined,
          errorShape(ErrorCodes.INVALID_REQUEST, `unknown agent id "${agentIdRaw}"`),
        );
        return;
      }
    }
    const workspaceDir = resolveAgentWorkspaceDir(cfg, agentId);
    const report = buildWorkspaceSkillStatus(workspaceDir, {
      config: cfg,
      eligibility: { remote: getRemoteSkillEligibility() },
    });
    respond(true, report, undefined);
  },
  "skills.bins": ({ params, respond }) => {
    if (!validateSkillsBinsParams(params)) {
      respond(
        false,
        undefined,
        errorShape(
          ErrorCodes.INVALID_REQUEST,
          `invalid skills.bins params: ${formatValidationErrors(validateSkillsBinsParams.errors)}`,
        ),
      );
      return;
    }
    const cfg = loadConfig();
    const workspaceDirs = listAgentWorkspaceDirs(cfg);
    const bins = new Set<string>();
    for (const workspaceDir of workspaceDirs) {
      const entries = loadWorkspaceSkillEntries(workspaceDir, { config: cfg });
      for (const bin of collectSkillBins(entries)) {
        bins.add(bin);
      }
    }
    respond(true, { bins: [...bins].toSorted() }, undefined);
  },
  "skills.catalog": async ({ params, respond }) => {
    if (!validateSkillsCatalogParams(params)) {
      respond(
        false,
        undefined,
        errorShape(
          ErrorCodes.INVALID_REQUEST,
          `invalid skills.catalog params: ${formatValidationErrors(
            validateSkillsCatalogParams.errors,
          )}`,
        ),
      );
      return;
    }
    const cfg = loadConfig();
    const registry = resolveSkillsRegistryConfig(cfg);
    if (!registry.enabled) {
      respond(true, { baseUrl: registry.baseUrl, entries: [] }, undefined);
      return;
    }
    const query = typeof params?.query === "string" ? params.query.trim() : "";
    const cursor = typeof params?.cursor === "string" ? params.cursor.trim() : "";
    const limit =
      typeof params?.limit === "number" && Number.isFinite(params.limit) ? params.limit : undefined;
    const endpoint = new URL(query ? "search" : "skills", registry.baseUrl);
    if (query) {
      endpoint.searchParams.set("q", query);
    }
    if (cursor) {
      endpoint.searchParams.set("cursor", cursor);
    }
    if (limit) {
      endpoint.searchParams.set("limit", String(limit));
    }
    try {
      const { response, release } = await fetchWithSsrFGuard({
        url: endpoint.toString(),
        timeoutMs: registry.timeoutMs,
        policy: { hostnameAllowlist: registry.allowlist },
        auditContext: "skills.catalog",
      });
      try {
        if (!response.ok) {
          const body = await response.text().catch(() => "");
          const suffix = body ? `: ${body.slice(0, 200)}` : "";
          respond(
            false,
            undefined,
            errorShape(
              ErrorCodes.UNAVAILABLE,
              `skills catalog unavailable (HTTP ${response.status})${suffix}`,
            ),
          );
          return;
        }
        const payload = await response.json().catch(() => null);
        const { entries, nextCursor } = extractCatalogEntries(payload);
        respond(true, { baseUrl: registry.baseUrl, entries, nextCursor }, undefined);
      } finally {
        await release();
      }
    } catch (err) {
      respond(
        false,
        undefined,
        errorShape(ErrorCodes.UNAVAILABLE, `skills catalog unavailable: ${formatFetchError(err)}`),
      );
    }
  },
  "skills.catalog.install": async ({ params, respond }) => {
    if (!validateSkillsCatalogInstallParams(params)) {
      respond(
        false,
        undefined,
        errorShape(
          ErrorCodes.INVALID_REQUEST,
          `invalid skills.catalog.install params: ${formatValidationErrors(
            validateSkillsCatalogInstallParams.errors,
          )}`,
        ),
      );
      return;
    }
    const cfg = loadConfig();
    const registry = resolveSkillsRegistryConfig(cfg);
    if (!registry.enabled || !registry.allowInstall) {
      respond(
        false,
        undefined,
        errorShape(
          ErrorCodes.UNAVAILABLE,
          "skills catalog install disabled by config (skills.registry.allowInstall)",
        ),
      );
      return;
    }
    const agentIdRaw = typeof params?.agentId === "string" ? params.agentId.trim() : "";
    const agentId = agentIdRaw ? normalizeAgentId(agentIdRaw) : resolveDefaultAgentId(cfg);
    if (agentIdRaw) {
      const knownAgents = listAgentIds(cfg);
      if (!knownAgents.includes(agentId)) {
        respond(
          false,
          undefined,
          errorShape(ErrorCodes.INVALID_REQUEST, `unknown agent id "${agentIdRaw}"`),
        );
        return;
      }
    }
    const slugRaw = typeof params?.slug === "string" ? params.slug : "";
    const slug = sanitizeSkillDirName(slugRaw);
    if (!slug) {
      respond(false, undefined, errorShape(ErrorCodes.INVALID_REQUEST, "invalid skill slug"));
      return;
    }
    const workspaceDir = resolveAgentWorkspaceDir(cfg, agentId);
    const skillsDir = path.join(workspaceDir, "skills");
    const targetDir = path.join(skillsDir, slug);
    const skillFilePath = path.join(targetDir, "SKILL.md");
    try {
      if (fs.existsSync(skillFilePath)) {
        respond(
          false,
          undefined,
          errorShape(ErrorCodes.INVALID_REQUEST, `skill already installed: ${slug}`),
        );
        return;
      }
      await ensureDir(targetDir);
      const archive = await fetchRegistryArchive({
        baseUrl: registry.baseUrl,
        allowlist: registry.allowlist,
        timeoutMs: registry.timeoutMs,
        slug,
      });
      if (archive) {
        const downloaded = await downloadArchive({
          response: archive.response,
          release: archive.release,
          targetDir,
          timeoutMs: registry.timeoutMs,
          filename: archive.filename,
        });
        if (!downloaded.archiveType) {
          throw new Error("Unknown archive type");
        }
        const extractResult = await extractArchive({
          archivePath: downloaded.archivePath,
          archiveType: downloaded.archiveType,
          targetDir,
          timeoutMs: registry.timeoutMs,
        });
        await fs.promises.rm(downloaded.archivePath, { force: true }).catch(() => undefined);
        if (extractResult.code !== 0) {
          throw new Error(formatInstallFailureMessage(extractResult));
        }
        await promoteNestedSkillDir({ targetDir, skillFilePath });
        if (!fs.existsSync(skillFilePath)) {
          throw new Error("Installed archive missing SKILL.md");
        }
      } else {
        const content = await fetchRegistrySkillFile({
          baseUrl: registry.baseUrl,
          allowlist: registry.allowlist,
          timeoutMs: registry.timeoutMs,
          slug,
        });
        await fs.promises.writeFile(skillFilePath, content, "utf8");
      }
      respond(true, { ok: true, slug, path: targetDir }, undefined);
    } catch (err) {
      respond(
        false,
        undefined,
        errorShape(
          ErrorCodes.UNAVAILABLE,
          `skills catalog install failed: ${formatFetchError(err)}`,
        ),
      );
    }
  },
  "skills.install": async ({ params, respond }) => {
    if (!validateSkillsInstallParams(params)) {
      respond(
        false,
        undefined,
        errorShape(
          ErrorCodes.INVALID_REQUEST,
          `invalid skills.install params: ${formatValidationErrors(validateSkillsInstallParams.errors)}`,
        ),
      );
      return;
    }
    const p = params as {
      name: string;
      installId: string;
      timeoutMs?: number;
    };
    const cfg = loadConfig();
    const workspaceDirRaw = resolveAgentWorkspaceDir(cfg, resolveDefaultAgentId(cfg));
    const result = await installSkill({
      workspaceDir: workspaceDirRaw,
      skillName: p.name,
      installId: p.installId,
      timeoutMs: p.timeoutMs,
      config: cfg,
    });
    respond(
      result.ok,
      result,
      result.ok ? undefined : errorShape(ErrorCodes.UNAVAILABLE, result.message),
    );
  },
  "skills.update": async ({ params, respond }) => {
    if (!validateSkillsUpdateParams(params)) {
      respond(
        false,
        undefined,
        errorShape(
          ErrorCodes.INVALID_REQUEST,
          `invalid skills.update params: ${formatValidationErrors(validateSkillsUpdateParams.errors)}`,
        ),
      );
      return;
    }
    const p = params as {
      skillKey: string;
      enabled?: boolean;
      apiKey?: string;
      env?: Record<string, string>;
    };
    const cfg = loadConfig();
    const skills = cfg.skills ? { ...cfg.skills } : {};
    const entries = skills.entries ? { ...skills.entries } : {};
    const current = entries[p.skillKey] ? { ...entries[p.skillKey] } : {};
    if (typeof p.enabled === "boolean") {
      current.enabled = p.enabled;
    }
    if (typeof p.apiKey === "string") {
      const trimmed = normalizeSecretInput(p.apiKey);
      if (trimmed) {
        current.apiKey = trimmed;
      } else {
        delete current.apiKey;
      }
    }
    if (p.env && typeof p.env === "object") {
      const nextEnv = current.env ? { ...current.env } : {};
      for (const [key, value] of Object.entries(p.env)) {
        const trimmedKey = key.trim();
        if (!trimmedKey) {
          continue;
        }
        const trimmedVal = value.trim();
        if (!trimmedVal) {
          delete nextEnv[trimmedKey];
        } else {
          nextEnv[trimmedKey] = trimmedVal;
        }
      }
      current.env = nextEnv;
    }
    entries[p.skillKey] = current;
    skills.entries = entries;
    const nextConfig: GensparxConfig = {
      ...cfg,
      skills,
    };
    await writeConfigFile(nextConfig);
    respond(true, { ok: true, skillKey: p.skillKey, config: current }, undefined);
  },
};
