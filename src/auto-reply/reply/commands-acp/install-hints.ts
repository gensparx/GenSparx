import { existsSync } from "node:fs";
import path from "node:path";
import type { GensparxConfig } from "../../../config/config.js";

export function resolveConfiguredAcpBackendId(cfg: GensparxConfig): string {
  return cfg.acp?.backend?.trim() || "acpx";
}

export function resolveAcpInstallCommandHint(cfg: GensparxConfig): string {
  const configured = cfg.acp?.runtime?.installCommand?.trim();
  if (configured) {
    return configured;
  }
  const backendId = resolveConfiguredAcpBackendId(cfg).toLowerCase();
  if (backendId === "acpx") {
    const localPath = path.resolve(process.cwd(), "extensions/acpx");
    if (existsSync(localPath)) {
      return `gensparx plugins install ${localPath}`;
    }
    return "gensparx plugins install acpx";
  }
  return `Install and enable the plugin that provides ACP backend "${backendId}".`;
}
