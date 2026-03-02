import fs from "node:fs/promises";
import path from "node:path";
import { DEFAULT_SOUL_FILENAME, type WorkspaceBootstrapFile } from "../agents/workspace.js";

export const DEFAULT_SOUL_EVIL_FILENAME = "SOUL_EVIL.md";

export type SoulEvilPurgeConfig = {
  at?: string;
  duration?: string;
};

export type SoulEvilConfig = {
  file?: string;
  chance?: number;
  purge?: SoulEvilPurgeConfig;
};

type SoulEvilDecision = {
  useEvil: boolean;
  reason?: "purge" | "chance";
};

function parseDurationSeconds(raw?: string): number | null {
  if (!raw) {
    return null;
  }
  const normalized = raw.trim().toLowerCase();
  const match = /^(\d+)\s*(s|m|h)$/.exec(normalized);
  if (!match) {
    return null;
  }
  const amount = Number.parseInt(match[1], 10);
  if (!Number.isFinite(amount) || amount <= 0) {
    return null;
  }
  const unit = match[2];
  if (unit === "s") {
    return amount;
  }
  if (unit === "m") {
    return amount * 60;
  }
  return amount * 3600;
}

function parseAtSeconds(raw?: string): number | null {
  if (!raw) {
    return null;
  }
  const match = /^([01]?\d|2[0-3]):([0-5]\d)$/.exec(raw.trim());
  if (!match) {
    return null;
  }
  const hours = Number.parseInt(match[1], 10);
  const minutes = Number.parseInt(match[2], 10);
  return hours * 3600 + minutes * 60;
}

function getSecondsSinceMidnight(now: Date, timezone?: string): number {
  if (timezone) {
    try {
      const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).formatToParts(now);
      const getNum = (type: "hour" | "minute" | "second") => {
        const found = parts.find((part) => part.type === type)?.value ?? "0";
        return Number.parseInt(found, 10);
      };
      const hours = getNum("hour");
      const minutes = getNum("minute");
      const seconds = getNum("second");
      if (Number.isFinite(hours) && Number.isFinite(minutes) && Number.isFinite(seconds)) {
        return hours * 3600 + minutes * 60 + seconds;
      }
    } catch {
      // Fallback to local time below.
    }
  }
  return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

function isPurgeWindowActive(params: {
  now: Date;
  timezone?: string;
  purge?: SoulEvilPurgeConfig;
}): boolean {
  const purge = params.purge;
  if (!purge) {
    return false;
  }
  const startAt = parseAtSeconds(purge.at);
  const durationSeconds = parseDurationSeconds(purge.duration);
  if (startAt === null || durationSeconds === null) {
    return false;
  }
  const nowSeconds = getSecondsSinceMidnight(params.now, params.timezone);
  const daySeconds = 24 * 3600;
  const elapsed = (nowSeconds - startAt + daySeconds) % daySeconds;
  return elapsed < Math.min(durationSeconds, daySeconds);
}

export function decideSoulEvil(params: {
  config?: SoulEvilConfig | null;
  userTimezone?: string;
  now?: Date;
  random?: () => number;
}): SoulEvilDecision {
  const config = params.config;
  if (!config) {
    return { useEvil: false };
  }

  const now = params.now ?? new Date();
  if (isPurgeWindowActive({ now, timezone: params.userTimezone, purge: config.purge })) {
    return { useEvil: true, reason: "purge" };
  }

  const chanceRaw = typeof config.chance === "number" ? config.chance : undefined;
  if (chanceRaw === undefined) {
    return { useEvil: false };
  }
  const chance = Math.min(1, Math.max(0, chanceRaw));
  if (chance <= 0) {
    return { useEvil: false };
  }

  const random = params.random ?? Math.random;
  if (random() < chance) {
    return { useEvil: true, reason: "chance" };
  }
  return { useEvil: false };
}

export async function applySoulEvilOverride(params: {
  files: WorkspaceBootstrapFile[];
  workspaceDir: string;
  config?: SoulEvilConfig | null;
  userTimezone?: string;
  now?: Date;
  random?: () => number;
  log?: { warn: (message: string) => void };
}): Promise<WorkspaceBootstrapFile[]> {
  const decision = decideSoulEvil({
    config: params.config ?? undefined,
    userTimezone: params.userTimezone,
    now: params.now,
    random: params.random,
  });
  if (!decision.useEvil) {
    return params.files;
  }

  const soulIndex = params.files.findIndex((file) => file.name === DEFAULT_SOUL_FILENAME);
  if (soulIndex < 0) {
    return params.files;
  }

  const evilFile = params.config?.file?.trim() || DEFAULT_SOUL_EVIL_FILENAME;
  const evilPath = path.join(params.workspaceDir, evilFile);
  let evilContent: string;
  try {
    evilContent = await fs.readFile(evilPath, "utf-8");
  } catch {
    return params.files;
  }

  if (!evilContent.trim()) {
    params.log?.warn(`soul-evil file empty: ${evilPath}`);
    return params.files;
  }

  const updated = [...params.files];
  updated[soulIndex] = {
    ...updated[soulIndex],
    content: evilContent,
    missing: false,
  };
  return updated;
}

export function resolveSoulEvilConfigFromHook(
  value: unknown,
  log?: { warn: (message: string) => void },
): SoulEvilConfig | null {
  if (!value || typeof value !== "object") {
    return null;
  }
  const input = value as Record<string, unknown>;

  const warnings: string[] = [];
  if (input.file !== undefined && typeof input.file !== "string") {
    warnings.push("soul-evil config: file must be a string");
  }
  if (input.chance !== undefined && typeof input.chance !== "number") {
    warnings.push("soul-evil config: chance must be a number");
  }
  if (input.purge !== undefined && (typeof input.purge !== "object" || input.purge === null)) {
    warnings.push("soul-evil config: purge must be an object");
  }
  for (const warning of warnings) {
    log?.warn(warning);
  }
  if (warnings.length > 0) {
    return null;
  }

  const purgeInput = input.purge as Record<string, unknown> | undefined;
  return {
    ...(typeof input.file === "string" ? { file: input.file } : {}),
    ...(typeof input.chance === "number" ? { chance: input.chance } : {}),
    ...(purgeInput
      ? {
          purge: {
            ...(typeof purgeInput.at === "string" ? { at: purgeInput.at } : {}),
            ...(typeof purgeInput.duration === "string"
              ? { duration: purgeInput.duration }
              : {}),
          },
        }
      : {}),
  };
}
