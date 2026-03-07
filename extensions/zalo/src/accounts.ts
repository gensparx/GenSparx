import {
  DEFAULT_ACCOUNT_ID,
  normalizeAccountId,
  normalizeOptionalAccountId,
} from "gensparx/plugin-sdk/account-id";
import type { GensparxConfig } from "gensparx/plugin-sdk/zalo";
import { resolveZaloToken } from "./token.js";
import type { ResolvedZaloAccount, ZaloAccountConfig, ZaloConfig } from "./types.js";

export type { ResolvedZaloAccount };

function listConfiguredAccountIds(cfg: GensparxConfig): string[] {
  const accounts = (cfg.channels?.zalo as ZaloConfig | undefined)?.accounts;
  if (!accounts || typeof accounts !== "object") {
    return [];
  }
  return Object.keys(accounts).filter(Boolean);
}

export function listZaloAccountIds(cfg: GensparxConfig): string[] {
  const ids = listConfiguredAccountIds(cfg);
  if (ids.length === 0) {
    return [DEFAULT_ACCOUNT_ID];
  }
  return ids.toSorted((a, b) => a.localeCompare(b));
}

export function resolveDefaultZaloAccountId(cfg: GensparxConfig): string {
  const zaloConfig = cfg.channels?.zalo as ZaloConfig | undefined;
  const preferred = normalizeOptionalAccountId(zaloConfig?.defaultAccount);
  if (
    preferred &&
    listZaloAccountIds(cfg).some((accountId) => normalizeAccountId(accountId) === preferred)
  ) {
    return preferred;
  }
  const ids = listZaloAccountIds(cfg);
  if (ids.includes(DEFAULT_ACCOUNT_ID)) {
    return DEFAULT_ACCOUNT_ID;
  }
  return ids[0] ?? DEFAULT_ACCOUNT_ID;
}

function resolveAccountConfig(
  cfg: GensparxConfig,
  accountId: string,
): ZaloAccountConfig | undefined {
  const accounts = (cfg.channels?.zalo as ZaloConfig | undefined)?.accounts;
  if (!accounts || typeof accounts !== "object") {
    return undefined;
  }
  return accounts[accountId] as ZaloAccountConfig | undefined;
}

function mergeZaloAccountConfig(cfg: GensparxConfig, accountId: string): ZaloAccountConfig {
  const raw = (cfg.channels?.zalo ?? {}) as ZaloConfig;
  const { accounts: _ignored, defaultAccount: _ignored2, ...base } = raw;
  const account = resolveAccountConfig(cfg, accountId) ?? {};
  return { ...base, ...account };
}

export function resolveZaloAccount(params: {
  cfg: GensparxConfig;
  accountId?: string | null;
  allowUnresolvedSecretRef?: boolean;
}): ResolvedZaloAccount {
  const accountId = normalizeAccountId(params.accountId);
  const baseEnabled = (params.cfg.channels?.zalo as ZaloConfig | undefined)?.enabled !== false;
  const merged = mergeZaloAccountConfig(params.cfg, accountId);
  const accountEnabled = merged.enabled !== false;
  const enabled = baseEnabled && accountEnabled;
  const tokenResolution = resolveZaloToken(
    params.cfg.channels?.zalo as ZaloConfig | undefined,
    accountId,
    { allowUnresolvedSecretRef: params.allowUnresolvedSecretRef },
  );

  return {
    accountId,
    name: merged.name?.trim() || undefined,
    enabled,
    token: tokenResolution.token,
    tokenSource: tokenResolution.source,
    config: merged,
  };
}

export function listEnabledZaloAccounts(cfg: GensparxConfig): ResolvedZaloAccount[] {
  return listZaloAccountIds(cfg)
    .map((accountId) => resolveZaloAccount({ cfg, accountId }))
    .filter((account) => account.enabled);
}
