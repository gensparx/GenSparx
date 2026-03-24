import type { GatewayBrowserClient } from "../gateway.ts";
import type {
  SkillCatalogEntry,
  SkillsCatalogInstallResult,
  SkillsCatalogResult,
  SkillStatusReport,
} from "../types.ts";

export type SkillsState = {
  client: GatewayBrowserClient | null;
  connected: boolean;
  skillsLoading: boolean;
  skillsReport: SkillStatusReport | null;
  skillsError: string | null;
  skillsBusyKey: string | null;
  skillEdits: Record<string, string>;
  skillMessages: SkillMessageMap;
  skillsCatalogLoading: boolean;
  skillsCatalogError: string | null;
  skillsCatalogEntries: SkillCatalogEntry[];
  skillsCatalogQuery: string;
  skillsCatalogNextCursor: string | null;
  skillsCatalogBaseUrl: string | null;
  skillsCatalogBusySlug: string | null;
  skillsCatalogMessages: SkillMessageMap;
};

export type SkillMessage = {
  kind: "success" | "error";
  message: string;
};

export type SkillMessageMap = Record<string, SkillMessage>;

type LoadSkillsOptions = {
  clearMessages?: boolean;
};

function setSkillMessage(state: SkillsState, key: string, message?: SkillMessage) {
  if (!key.trim()) {
    return;
  }
  const next = { ...state.skillMessages };
  if (message) {
    next[key] = message;
  } else {
    delete next[key];
  }
  state.skillMessages = next;
}

function setCatalogMessage(state: SkillsState, key: string, message?: SkillMessage) {
  if (!key.trim()) {
    return;
  }
  const next = { ...state.skillsCatalogMessages };
  if (message) {
    next[key] = message;
  } else {
    delete next[key];
  }
  state.skillsCatalogMessages = next;
}

function getErrorMessage(err: unknown) {
  if (err instanceof Error) {
    return err.message;
  }
  return String(err);
}

export async function loadSkills(state: SkillsState, options?: LoadSkillsOptions) {
  if (options?.clearMessages && Object.keys(state.skillMessages).length > 0) {
    state.skillMessages = {};
  }
  if (!state.client || !state.connected) {
    return;
  }
  if (state.skillsLoading) {
    return;
  }
  state.skillsLoading = true;
  state.skillsError = null;
  try {
    const res = await state.client.request<SkillStatusReport | undefined>("skills.status", {});
    if (res) {
      state.skillsReport = res;
    }
  } catch (err) {
    state.skillsError = getErrorMessage(err);
  } finally {
    state.skillsLoading = false;
  }
}

export async function loadSkillsCatalog(
  state: SkillsState,
  options?: { query?: string; cursor?: string; append?: boolean },
) {
  if (!state.client || !state.connected) {
    return;
  }
  if (state.skillsCatalogLoading) {
    return;
  }
  const query = typeof options?.query === "string" ? options.query : state.skillsCatalogQuery;
  const cursor = typeof options?.cursor === "string" ? options.cursor : undefined;
  const params: { query?: string; cursor?: string; limit?: number } = {};
  if (query && query.trim()) {
    params.query = query.trim();
  }
  if (cursor && cursor.trim()) {
    params.cursor = cursor.trim();
  }
  params.limit = 50;
  state.skillsCatalogLoading = true;
  state.skillsCatalogError = null;
  try {
    const res = await state.client.request<SkillsCatalogResult | undefined>(
      "skills.catalog",
      params,
    );
    if (res) {
      const entries = res.entries ?? [];
      state.skillsCatalogEntries = options?.append
        ? [...state.skillsCatalogEntries, ...entries]
        : entries;
      state.skillsCatalogNextCursor = res.nextCursor ?? null;
      state.skillsCatalogBaseUrl = res.baseUrl ?? state.skillsCatalogBaseUrl;
    }
  } catch (err) {
    state.skillsCatalogError = getErrorMessage(err);
  } finally {
    state.skillsCatalogLoading = false;
  }
}

export async function installCatalogSkill(state: SkillsState, slug: string) {
  if (!state.client || !state.connected) {
    return;
  }
  const key = slug.trim();
  if (!key) {
    return;
  }
  state.skillsCatalogBusySlug = key;
  state.skillsCatalogError = null;
  try {
    const result = await state.client.request<SkillsCatalogInstallResult | undefined>(
      "skills.catalog.install",
      { slug: key },
    );
    await loadSkills(state);
    await loadSkillsCatalog(state, { query: state.skillsCatalogQuery });
    setCatalogMessage(state, key, {
      kind: "success",
      message: result?.path ? `Installed to ${result.path}` : "Installed",
    });
  } catch (err) {
    const message = getErrorMessage(err);
    state.skillsCatalogError = message;
    setCatalogMessage(state, key, { kind: "error", message });
  } finally {
    state.skillsCatalogBusySlug = null;
  }
}

export function updateSkillEdit(state: SkillsState, skillKey: string, value: string) {
  state.skillEdits = { ...state.skillEdits, [skillKey]: value };
}

export async function updateSkillEnabled(state: SkillsState, skillKey: string, enabled: boolean) {
  if (!state.client || !state.connected) {
    return;
  }
  state.skillsBusyKey = skillKey;
  state.skillsError = null;
  try {
    await state.client.request("skills.update", { skillKey, enabled });
    await loadSkills(state);
    setSkillMessage(state, skillKey, {
      kind: "success",
      message: enabled ? "Skill enabled" : "Skill disabled",
    });
  } catch (err) {
    const message = getErrorMessage(err);
    state.skillsError = message;
    setSkillMessage(state, skillKey, {
      kind: "error",
      message,
    });
  } finally {
    state.skillsBusyKey = null;
  }
}

export async function saveSkillApiKey(state: SkillsState, skillKey: string) {
  if (!state.client || !state.connected) {
    return;
  }
  state.skillsBusyKey = skillKey;
  state.skillsError = null;
  try {
    const apiKey = state.skillEdits[skillKey] ?? "";
    await state.client.request("skills.update", { skillKey, apiKey });
    await loadSkills(state);
    setSkillMessage(state, skillKey, {
      kind: "success",
      message: "API key saved",
    });
  } catch (err) {
    const message = getErrorMessage(err);
    state.skillsError = message;
    setSkillMessage(state, skillKey, {
      kind: "error",
      message,
    });
  } finally {
    state.skillsBusyKey = null;
  }
}

export async function installSkill(
  state: SkillsState,
  skillKey: string,
  name: string,
  installId: string,
) {
  if (!state.client || !state.connected) {
    return;
  }
  state.skillsBusyKey = skillKey;
  state.skillsError = null;
  try {
    const result = await state.client.request<{ message?: string }>("skills.install", {
      name,
      installId,
      timeoutMs: 120000,
    });
    await loadSkills(state);
    setSkillMessage(state, skillKey, {
      kind: "success",
      message: result?.message ?? "Installed",
    });
  } catch (err) {
    const message = getErrorMessage(err);
    state.skillsError = message;
    setSkillMessage(state, skillKey, {
      kind: "error",
      message,
    });
  } finally {
    state.skillsBusyKey = null;
  }
}
