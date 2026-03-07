import { describe, expect, it } from "vitest";
import type { GensparxConfig } from "../config/config.js";
import { withEnvAsync } from "../test-utils/env.js";
import {
  resolveGatewayAuthTokenForService,
  shouldRequireGatewayTokenForInstall,
} from "./doctor-gateway-auth-token.js";

describe("resolveGatewayAuthTokenForService", () => {
  it("returns plaintext gateway.auth.token when configured", async () => {
    const resolved = await resolveGatewayAuthTokenForService(
      {
        gateway: {
          auth: {
            token: "config-token",
          },
        },
      } as GensparxConfig,
      {} as NodeJS.ProcessEnv,
    );

    expect(resolved).toEqual({ token: "config-token" });
  });

  it("resolves SecretRef-backed gateway.auth.token", async () => {
    const resolved = await resolveGatewayAuthTokenForService(
      {
        gateway: {
          auth: {
            token: { source: "env", provider: "default", id: "CUSTOM_GATEWAY_TOKEN" },
          },
        },
        secrets: {
          providers: {
            default: { source: "env" },
          },
        },
      } as GensparxConfig,
      {
        CUSTOM_GATEWAY_TOKEN: "resolved-token",
      } as NodeJS.ProcessEnv,
    );

    expect(resolved).toEqual({ token: "resolved-token" });
  });

  it("resolves env-template gateway.auth.token via SecretRef resolution", async () => {
    const resolved = await resolveGatewayAuthTokenForService(
      {
        gateway: {
          auth: {
            token: "${CUSTOM_GATEWAY_TOKEN}",
          },
        },
        secrets: {
          providers: {
            default: { source: "env" },
          },
        },
      } as GensparxConfig,
      {
        CUSTOM_GATEWAY_TOKEN: "resolved-token",
      } as NodeJS.ProcessEnv,
    );

    expect(resolved).toEqual({ token: "resolved-token" });
  });

  it("falls back to GENSPARX_GATEWAY_TOKEN when SecretRef is unresolved", async () => {
    const resolved = await resolveGatewayAuthTokenForService(
      {
        gateway: {
          auth: {
            token: { source: "env", provider: "default", id: "MISSING_GATEWAY_TOKEN" },
          },
        },
        secrets: {
          providers: {
            default: { source: "env" },
          },
        },
      } as GensparxConfig,
      {
        GENSPARX_GATEWAY_TOKEN: "env-fallback-token",
      } as NodeJS.ProcessEnv,
    );

    expect(resolved).toEqual({ token: "env-fallback-token" });
  });

  it("falls back to GENSPARX_GATEWAY_TOKEN when SecretRef resolves to empty", async () => {
    const resolved = await resolveGatewayAuthTokenForService(
      {
        gateway: {
          auth: {
            token: { source: "env", provider: "default", id: "CUSTOM_GATEWAY_TOKEN" },
          },
        },
        secrets: {
          providers: {
            default: { source: "env" },
          },
        },
      } as GensparxConfig,
      {
        CUSTOM_GATEWAY_TOKEN: "   ",
        GENSPARX_GATEWAY_TOKEN: "env-fallback-token",
      } as NodeJS.ProcessEnv,
    );

    expect(resolved).toEqual({ token: "env-fallback-token" });
  });

  it("returns unavailableReason when SecretRef is unresolved without env fallback", async () => {
    const resolved = await resolveGatewayAuthTokenForService(
      {
        gateway: {
          auth: {
            token: { source: "env", provider: "default", id: "MISSING_GATEWAY_TOKEN" },
          },
        },
        secrets: {
          providers: {
            default: { source: "env" },
          },
        },
      } as GensparxConfig,
      {} as NodeJS.ProcessEnv,
    );

    expect(resolved.token).toBeUndefined();
    expect(resolved.unavailableReason).toContain("gateway.auth.token SecretRef is configured");
  });
});

describe("shouldRequireGatewayTokenForInstall", () => {
  it("requires token when auth mode is token", () => {
    const required = shouldRequireGatewayTokenForInstall(
      {
        gateway: {
          auth: {
            mode: "token",
          },
        },
      } as GensparxConfig,
      {} as NodeJS.ProcessEnv,
    );
    expect(required).toBe(true);
  });

  it("does not require token when auth mode is password", () => {
    const required = shouldRequireGatewayTokenForInstall(
      {
        gateway: {
          auth: {
            mode: "password",
          },
        },
      } as GensparxConfig,
      {} as NodeJS.ProcessEnv,
    );
    expect(required).toBe(false);
  });

  it("requires token in inferred mode when password env exists only in shell", async () => {
    await withEnvAsync({ GENSPARX_GATEWAY_PASSWORD: "password-from-env" }, async () => {
      const required = shouldRequireGatewayTokenForInstall(
        {
          gateway: {
            auth: {},
          },
        } as GensparxConfig,
        process.env,
      );
      expect(required).toBe(true);
    });
  });

  it("does not require token in inferred mode when password is configured", () => {
    const required = shouldRequireGatewayTokenForInstall(
      {
        gateway: {
          auth: {
            password: { source: "env", provider: "default", id: "CUSTOM_GATEWAY_PASSWORD" },
          },
        },
        secrets: {
          providers: {
            default: { source: "env" },
          },
        },
      } as GensparxConfig,
      {} as NodeJS.ProcessEnv,
    );
    expect(required).toBe(false);
  });

  it("does not require token in inferred mode when password env is configured in config", () => {
    const required = shouldRequireGatewayTokenForInstall(
      {
        gateway: {
          auth: {},
        },
        env: {
          vars: {
            GENSPARX_GATEWAY_PASSWORD: "configured-password",
          },
        },
      } as GensparxConfig,
      {} as NodeJS.ProcessEnv,
    );
    expect(required).toBe(false);
  });

  it("requires token in inferred mode when no password candidate exists", () => {
    const required = shouldRequireGatewayTokenForInstall(
      {
        gateway: {
          auth: {},
        },
      } as GensparxConfig,
      {} as NodeJS.ProcessEnv,
    );
    expect(required).toBe(true);
  });
});
