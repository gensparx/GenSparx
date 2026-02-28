import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import type { AddressInfo } from "node:net";
import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

const TEST_GATEWAY_TOKEN = "test-gateway-token-1234567890";

beforeEach(() => {
  // Ensure these tests are not affected by host env vars.
  delete process.env.GENSPARX_GATEWAY_TOKEN;
  delete process.env.GENSPARX_GATEWAY_PASSWORD;
});

const { handleToolsInvokeHttpRequest } = await import("./tools-invoke-http.js");

const describeMaybe = process.platform === "win32" ? describe.skip : describe;

describeMaybe("POST /tools/invoke", () => {
  it("invokes a tool and returns {ok:true,result}", async () => {
    // Allow the agents_list tool for main agent.
    testState.agentsConfig = {
      list: [
        {
          id: "main",
          default: true,
          tools: {
            allow: ["agents_list"],
          },
        },
      ],
    },
  };
};

const postToolsInvoke = async (params: {
  port: number;
  headers?: Record<string, string>;
  body: Record<string, unknown>;
}) =>
  await fetch(`http://127.0.0.1:${params.port}/tools/invoke`, {
    method: "POST",
    headers: { "content-type": "application/json", ...params.headers },
    body: JSON.stringify(params.body),
  });

const invokeAgentsList = async (params: {
  port: number;
  headers?: Record<string, string>;
  sessionKey?: string;
}) => {
  const body: Record<string, unknown> = { tool: "agents_list", action: "json", args: {} };
  if (params.sessionKey) {
    body.sessionKey = params.sessionKey;
  }
  return await postToolsInvoke({ port: params.port, headers: params.headers, body });
};

const invokeTool = async (params: {
  port: number;
  tool: string;
  args?: Record<string, unknown>;
  action?: string;
  headers?: Record<string, string>;
  sessionKey?: string;
}) => {
  const body: Record<string, unknown> = {
    tool: params.tool,
    args: params.args ?? {},
  };
  if (params.action) {
    body.action = params.action;
  }
  if (params.sessionKey) {
    body.sessionKey = params.sessionKey;
  }
  return await postToolsInvoke({ port: params.port, headers: params.headers, body });
};

const invokeAgentsListAuthed = async (params: { sessionKey?: string } = {}) =>
  invokeAgentsList({
    port: sharedPort,
    headers: gatewayAuthHeaders(),
    sessionKey: params.sessionKey,
  });

const invokeToolAuthed = async (params: {
  tool: string;
  args?: Record<string, unknown>;
  action?: string;
  sessionKey?: string;
}) =>
  invokeTool({
    port: sharedPort,
    headers: gatewayAuthHeaders(),
    ...params,
  });

describe("POST /tools/invoke", () => {
  it("invokes a tool and returns {ok:true,result}", async () => {
    allowAgentsListForMain();
    const res = await invokeAgentsListAuthed({ sessionKey: "main" });

    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.ok).toBe(true);
    expect(body).toHaveProperty("result");
  });

  it("supports tools.alsoAllow in profile and implicit modes", async () => {
    cfg = {
      ...cfg,
      agents: { list: [{ id: "main", default: true }] },
      tools: { profile: "minimal", alsoAllow: ["agents_list"] },
    };

    const resProfile = await invokeAgentsListAuthed({ sessionKey: "main" });

    expect(resProfile.status).toBe(200);
    const profileBody = await resProfile.json();
    expect(profileBody.ok).toBe(true);

    cfg = {
      ...cfg,
      tools: { alsoAllow: ["agents_list"] },
    };

    const resImplicit = await invokeAgentsListAuthed({ sessionKey: "main" });
    expect(resImplicit.status).toBe(200);
    const implicitBody = await resImplicit.json();
    expect(implicitBody.ok).toBe(true);
  });

  it("routes tools invoke before plugin HTTP handlers", async () => {
    const pluginHandler = vi.fn(async (_req: IncomingMessage, res: ServerResponse) => {
      res.statusCode = 418;
      res.end("plugin");
      return true;
    });
    allowAgentsListForMain();
    pluginHttpHandlers = [async (req, res) => pluginHandler(req, res)];

    const res = await invokeAgentsListAuthed({ sessionKey: "main" });

    expect(res.status).toBe(200);
    expect(pluginHandler).not.toHaveBeenCalled();
  });

  it("returns 404 when denylisted or blocked by tools.profile", async () => {
    cfg = {
      ...cfg,
      agents: {
        list: [
          {
            id: "main",
            default: true,
            tools: {
              deny: ["agents_list"],
            },
          },
        ],
      },
    };
    const denyRes = await invokeAgentsListAuthed({ sessionKey: "main" });
    expect(denyRes.status).toBe(404);

    allowAgentsListForMain();
    cfg = {
      ...cfg,
      tools: { profile: "minimal" },
    };

    const profileRes = await invokeAgentsListAuthed({ sessionKey: "main" });
    expect(profileRes.status).toBe(404);
  });

  it("denies sessions_spawn via HTTP even when agent policy allows", async () => {
    cfg = {
      ...cfg,
      agents: {
        list: [
          {
            id: "main",
            default: true,
            tools: { allow: ["sessions_spawn"] },
          },
        ],
      },
    };

    const res = await invokeToolAuthed({
      tool: "sessions_spawn",
      args: { task: "test" },
      sessionKey: "main",
    });

    expect(res.status).toBe(404);
    const body = await res.json();
    expect(body.ok).toBe(false);
    expect(body.error.type).toBe("not_found");
  });

  it("propagates message target/thread headers into tools context for sessions_spawn", async () => {
    cfg = {
      ...cfg,
      agents: {
        list: [{ id: "main", default: true, tools: { allow: ["sessions_spawn"] } }],
      },
      gateway: { tools: { allow: ["sessions_spawn"] } },
    };

    const res = await invokeTool({
      port: sharedPort,
      headers: {
        ...gatewayAuthHeaders(),
        "x-openclaw-message-to": "channel:24514",
        "x-openclaw-thread-id": "thread-24514",
      },
      tool: "sessions_spawn",
      sessionKey: "main",
    });

    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.ok).toBe(true);
    expect(body.result?.route).toEqual({
      agentTo: "channel:24514",
      agentThreadId: "thread-24514",
    });
  });

  it("denies sessions_send via HTTP gateway", async () => {
    cfg = {
      ...cfg,
      agents: {
        list: [{ id: "main", default: true, tools: { allow: ["sessions_send"] } }],
      },
    };

    const res = await invokeToolAuthed({
      tool: "sessions_send",
      sessionKey: "main",
    });

    expect(res.status).toBe(404);
  });

  it("denies gateway tool via HTTP", async () => {
    cfg = {
      ...cfg,
      agents: {
        list: [{ id: "main", default: true, tools: { allow: ["gateway"] } }],
      },
    };

    const res = await invokeToolAuthed({
      tool: "gateway",
      sessionKey: "main",
    });

    expect(res.status).toBe(404);
  });

  it("allows gateway tool via HTTP when explicitly enabled in gateway.tools.allow", async () => {
    cfg = {
      ...cfg,
      agents: {
        list: [{ id: "main", default: true, tools: { allow: ["gateway"] } }],
      },
      gateway: { tools: { allow: ["gateway"] } },
    };

    const res = await invokeToolAuthed({
      tool: "gateway",
      sessionKey: "main",
    });

    // Ensure we didn't hit the HTTP deny list (404). Invalid args should map to 400.
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.ok).toBe(false);
    expect(body.error?.type).toBe("tool_error");
  });

  it("treats gateway.tools.deny as higher priority than gateway.tools.allow", async () => {
    cfg = {
      ...cfg,
      agents: {
        list: [{ id: "main", default: true, tools: { allow: ["gateway"] } }],
      },
      gateway: { tools: { allow: ["gateway"], deny: ["gateway"] } },
    };

    const res = await invokeToolAuthed({
      tool: "gateway",
      sessionKey: "main",
    });

    expect(res.status).toBe(404);
  });

  it("uses the configured main session key when sessionKey is missing or main", async () => {
    cfg = {
      ...cfg,
      agents: {
        list: [
          {
            id: "main",
            tools: {
              deny: ["agents_list"],
            },
          },
          {
            id: "ops",
            default: true,
            tools: {
              allow: ["agents_list"],
            },
          },
        ],
      },
      session: { mainKey: "primary" },
    };

    const resDefault = await invokeAgentsListAuthed();
    expect(resDefault.status).toBe(200);

    const resMain = await invokeAgentsListAuthed({ sessionKey: "main" });
    expect(resMain.status).toBe(200);
  });

  it("maps tool input/auth errors to 400/403 and unexpected execution errors to 500", async () => {
    cfg = {
      ...cfg,
      agents: {
        list: [{ id: "main", default: true, tools: { allow: ["tools_invoke_test"] } }],
      },
    };

    const inputRes = await invokeToolAuthed({
      tool: "tools_invoke_test",
      args: { mode: "input" },
      sessionKey: "main",
    });
    expect(inputRes.status).toBe(400);
    const inputBody = await inputRes.json();
    expect(inputBody.ok).toBe(false);
    expect(inputBody.error?.type).toBe("tool_error");
    expect(inputBody.error?.message).toBe("mode invalid");

    const authRes = await invokeToolAuthed({
      tool: "tools_invoke_test",
      args: { mode: "auth" },
      sessionKey: "main",
    });
    expect(authRes.status).toBe(403);
    const authBody = await authRes.json();
    expect(authBody.ok).toBe(false);
    expect(authBody.error?.type).toBe("tool_error");
    expect(authBody.error?.message).toBe("mode forbidden");

    const crashRes = await invokeToolAuthed({
      tool: "tools_invoke_test",
      args: { mode: "crash" },
      sessionKey: "main",
    });
    expect(crashRes.status).toBe(500);
    const crashBody = await crashRes.json();
    expect(crashBody.ok).toBe(false);
    expect(crashBody.error?.type).toBe("tool_error");
    expect(crashBody.error?.message).toBe("tool execution failed");
  });
});
