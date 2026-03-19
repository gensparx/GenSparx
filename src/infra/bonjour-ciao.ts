import { logDebug } from "../logger.js";
import { formatBonjourError } from "./bonjour-errors.js";

export function ignoreCiaoCancellationRejection(reason: unknown): boolean {
  const message = formatBonjourError(reason).toUpperCase();
  // Ciao treats shutdown during probing/announcement as a rejected promise.
  if (
    !message.includes("CIAO ANNOUNCEMENT CANCELLED") &&
    !message.includes("CIAO PROBING CANCELLED") &&
    !message.includes("CIAO PROBING CANCELED")
  ) {
    return false;
  }
  logDebug(`bonjour: ignoring unhandled ciao rejection: ${formatBonjourError(reason)}`);
  return true;
}
