import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { LATEST_PROTOCOL_VERSION } from "@modelcontextprotocol/sdk/types.js";

import {
  ConnectorsGatewayError,
} from "../../src/extra/connectors.js";
import { HTTPClient, Mistral } from "../../src/index.js";
import { MistralError } from "../../src/models/errors/mistralerror.js";

// Contract source: connectors-gateway/connectors_gateway/helpers/proxy_status.py,
// proxy_status_headers(). Connector upstream values are stripped by
// connectors-gateway/connectors_gateway/helpers/http_headers.py.
const CONNECTORS_GATEWAY_ERROR_HEADER =
  "connectors-gateway; error=http_request_error; status-code=400; "
  + 'details="connector_protocol_mismatch"';

type RequestHandler = (request: Request) => Response | Promise<Response>;

function mockFetch(handler: RequestHandler) {
  const fetcher = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
    const request = new Request(input, init);
    return handler(request);
  });
  vi.stubGlobal("fetch", fetcher);
  return fetcher;
}

function jsonResponse(payload: unknown): Response {
  return new Response(JSON.stringify(payload), {
    headers: { "content-type": "application/json" },
  });
}

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("HTTP connector client", () => {
  it("targets the gateway and refreshes SDK authentication", async () => {
    const requests: Request[] = [];
    let apiKey = "first-key";
    const timeoutSpy = vi.spyOn(AbortSignal, "timeout");
    mockFetch((request) => {
      requests.push(request.clone());
      return jsonResponse({ ok: true });
    });
    const mistral = new Mistral({
      apiKey: async () => apiKey,
      serverURL: "https://api.example.test/root/",
      timeoutMs: 1_234,
      userAgent: "test-sdk/1.0",
    });
    const http = mistral.beta.connectors.httpClient("my/connector", "work");

    await http("/items?limit=10", {
      method: "POST",
      body: JSON.stringify({ value: 1 }),
    });
    apiKey = "second-key";
    await http("next");

    expect(requests).toHaveLength(2);
    expect(requests[0]?.url).toBe(
      "https://api.example.test/root/v1/connectors-gateway/my%2Fconnector/http/items?limit=10",
    );
    expect(requests[0]?.headers.get("authorization")).toBe("Bearer first-key");
    expect(requests[1]?.headers.get("authorization")).toBe("Bearer second-key");
    expect(requests[0]?.headers.get("x-credentials-name")).toBe("work");
    expect(requests[0]?.headers.get("user-agent")).toBe("test-sdk/1.0");
    expect(requests[0]?.redirect).toBe("manual");
    expect(timeoutSpy).toHaveBeenCalledWith(1_234);
  });

  it("preserves an explicit authorization header", async () => {
    let request: Request | undefined;
    mockFetch((received) => {
      request = received;
      return new Response();
    });
    const mistral = new Mistral({
      apiKey: "sdk-key",
    });

    const http = mistral.beta.connectors.httpClient("github");
    await http("repos", {
      headers: { authorization: "Bearer explicit-key" },
    });

    expect(request?.headers.get("authorization")).toBe("Bearer explicit-key");
  });

  it.each([
    "https://attacker.example/path",
    "../outside",
    "%2e%2e/outside",
    "items/../models",
    "items/%2e%2e/models",
  ])("rejects requests outside the connector route: %s", async (path) => {
    const fetcher = mockFetch(() => new Response());
    const mistral = new Mistral({
      apiKey: "secret-key",
    });
    const http = mistral.beta.connectors.httpClient("github");

    await expect(http(path)).rejects.toThrow(
      "HTTP connector client requests must target the configured connector",
    );
    expect(fetcher).not.toHaveBeenCalled();
  });

  it("keeps connector HTTP state isolated from the parent SDK client", async () => {
    const connectorFetcher = mockFetch(() => new Response());
    const parentFetcher = vi.fn(async () => new Response());
    const mistral = new Mistral({
      apiKey: "secret-key",
      httpClient: new HTTPClient({ fetcher: parentFetcher }),
    });
    const http = mistral.beta.connectors.httpClient("github");

    await http("repos");

    expect(connectorFetcher).toHaveBeenCalledOnce();
    expect(parentFetcher).not.toHaveBeenCalled();
  });

  it("raises ConnectorsGatewayError for gateway-authored failures", async () => {
    mockFetch(() =>
      new Response(JSON.stringify({ detail: "The connector does not support HTTP" }), {
        status: 400,
        headers: { "proxy-status": CONNECTORS_GATEWAY_ERROR_HEADER },
      })
    );
    const mistral = new Mistral();
    const http = mistral.beta.connectors.httpClient("mcp-only");

    const error = await http("test").then(
      () => new Error("Expected request to fail"),
      (cause: unknown) => cause,
    );

    expect(error).toBeInstanceOf(ConnectorsGatewayError);
    expect(error).toBeInstanceOf(MistralError);
    expect(error).toMatchObject({
      message:
        "Connectors Gateway request failed with status 400: connector_protocol_mismatch",
      proxyStatus: CONNECTORS_GATEWAY_ERROR_HEADER,
      proxyError: "http_request_error",
      proxyStatusCode: 400,
      details: "connector_protocol_mismatch",
    });
    const gatewayError = error as ConnectorsGatewayError;
    expect(gatewayError.body).toBe(
      JSON.stringify({ detail: "The connector does not support HTTP" }),
    );
    expect(gatewayError.rawResponse.status).toBe(400);
    await expect(gatewayError.rawResponse.json()).resolves.toEqual({
      detail: "The connector does not support HTTP",
    });
  });

  it.each([
    {
      name: "canonical",
      proxyStatus: CONNECTORS_GATEWAY_ERROR_HEADER,
      expected: {
        proxyError: "http_request_error",
        proxyStatusCode: 400,
        details: "connector_protocol_mismatch",
      },
    },
    {
      name: "reordered",
      proxyStatus:
        'connectors-gateway; details="rate_limit_reached"; error=http_request_denied',
      expected: {
        proxyError: "http_request_denied",
        proxyStatusCode: null,
        details: "rate_limit_reached",
      },
    },
    {
      name: "extra parameters",
      proxyStatus: 'connectors-gateway; error=destination_unavailable; next-hop="api.test"; '
        + 'details="upstream_unavailable"; received-status=503',
      expected: {
        proxyError: "destination_unavailable",
        proxyStatusCode: null,
        details: "upstream_unavailable",
      },
    },
    {
      name: "no details",
      proxyStatus: "connectors-gateway; error=proxy_internal_error",
      expected: {
        proxyError: "proxy_internal_error",
        proxyStatusCode: null,
        details: null,
      },
    },
    {
      name: "after other members",
      proxyStatus: 'cdn; error=dns_timeout, "edge proxy", '
        + 'connectors-gateway; error=connection_timeout; details="upstream_timeout"',
      expected: {
        proxyError: "connection_timeout",
        proxyStatusCode: null,
        details: "upstream_timeout",
      },
    },
    {
      name: "escaped string",
      proxyStatus: String.raw`connectors-gateway; error=http_request_error; details="a \"b\" \\ c"`,
      expected: {
        proxyError: "http_request_error",
        proxyStatusCode: null,
        details: String.raw`a "b" \ c`,
      },
    },
    {
      name: "other proxy",
      proxyStatus: 'upstream-proxy; error=connection_refused; details="origin"',
      expected: null,
    },
    {
      name: "lookalike inside string",
      proxyStatus: 'upstream; details="x, connectors-gateway; error=http_request_denied"',
      expected: null,
    },
    {
      name: "no error",
      proxyStatus: "connectors-gateway; received-status=200",
      expected: null,
    },
  ])("parses Proxy-Status: $name", async ({ proxyStatus, expected }) => {
    mockFetch(() =>
      new Response(null, {
        status: 502,
        headers: { "proxy-status": proxyStatus },
      })
    );
    const mistral = new Mistral();
    const http = mistral.beta.connectors.httpClient("github");

    const result = await http("test").then(
      (response) => response,
      (cause: unknown) => cause,
    );

    if (expected === null) {
      expect(result).toBeInstanceOf(Response);
      return;
    }
    expect(result).toBeInstanceOf(ConnectorsGatewayError);
    expect(result).toMatchObject(expected);
  });

  it("leaves unmarked upstream failures as responses", async () => {
    mockFetch(() =>
      new Response(null, {
        status: 502,
        headers: {
          "proxy-status":
            'upstream-proxy; error=connection_refused; details="origin"',
        },
      })
    );
    const mistral = new Mistral();
    const http = mistral.beta.connectors.httpClient("github");

    const response = await http("test");

    expect(response.status).toBe(502);
  });

  it("leaves redirects as responses", async () => {
    mockFetch(() =>
      new Response(null, {
        status: 302,
        headers: {
          location: "https://attacker.example/path",
          "proxy-status": CONNECTORS_GATEWAY_ERROR_HEADER,
        },
      })
    );
    const mistral = new Mistral();
    const http = mistral.beta.connectors.httpClient("github");

    const response = await http("test");

    expect(response.status).toBe(302);
    expect(response.headers.get("location")).toBe(
      "https://attacker.example/path",
    );
  });
});

describe("MCP connector client", () => {
  it("returns the official client without timing out its listen stream", async () => {
    const requests: Request[] = [];
    const timeoutSpy = vi.spyOn(AbortSignal, "timeout");
    mockFetch(async (request) => {
      requests.push(request.clone());
      if (request.method === "GET") {
        return new Response(
          new ReadableStream({
            start(controller) {
              request.signal.addEventListener("abort", () => {
                controller.error(request.signal.reason);
              }, { once: true });
            },
          }),
          { headers: { "content-type": "text/event-stream" } },
        );
      }

      const payload = await request.json() as { id?: number; method: string };
      if (payload.method === "notifications/initialized") {
        return new Response(null, { status: 202 });
      }
      if (payload.method === "initialize") {
        return jsonResponse({
          jsonrpc: "2.0",
          id: payload.id,
          result: {
            protocolVersion: LATEST_PROTOCOL_VERSION,
            capabilities: { tools: {} },
            serverInfo: { name: "connector-gateway", version: "test" },
          },
        });
      }
      if (payload.method === "tools/list") {
        return jsonResponse({
          jsonrpc: "2.0",
          id: payload.id,
          result: { tools: [] },
        });
      }
      throw new Error(`Unexpected MCP method: ${payload.method}`);
    });
    const mistral = new Mistral({
      apiKey: "test-key",
      timeoutMs: 1_000,
    });

    const client = await mistral.beta.connectors.mcpClient(
      "my/connector",
      "work",
    );
    const result = await client.listTools();

    expect(Object.getPrototypeOf(client)).toBe(Client.prototype);
    expect(result.tools).toEqual([]);
    expect(requests[0]?.url).toBe(
      "https://api.mistral.ai/v1/connectors-gateway/my%2Fconnector/mcp",
    );
    expect(requests[0]?.headers.get("authorization")).toBe("Bearer test-key");
    expect(requests[0]?.headers.get("x-credentials-name")).toBe("work");
    expect(requests.some((request) => request.method === "GET")).toBe(true);
    const timedRequests = requests.filter((request) => request.method !== "GET");
    expect(timeoutSpy).toHaveBeenCalledTimes(timedRequests.length);
    await client.close();
  });

  it("raises ConnectorsGatewayError during initialization", async () => {
    mockFetch(() =>
      new Response(null, {
        status: 400,
        headers: { "proxy-status": CONNECTORS_GATEWAY_ERROR_HEADER },
      })
    );
    const mistral = new Mistral();

    const error = await mistral.beta.connectors.mcpClient("http-only").then(
      () => new Error("Expected request to fail"),
      (cause: unknown) => cause,
    );

    expect(error).toBeInstanceOf(MistralError);
    expect(error).toMatchObject({
      name: "ConnectorsGatewayError",
      proxyError: "http_request_error",
      proxyStatusCode: 400,
      details: "connector_protocol_mismatch",
    });
  });

  it("raises ConnectorsGatewayError for a tool call", async () => {
    mockFetch(async (request) => {
      const payload = await request.json() as { id?: number; method: string };
      if (payload.method === "notifications/initialized") {
        return new Response(null, { status: 202 });
      }
      if (payload.method === "initialize") {
        return jsonResponse({
          jsonrpc: "2.0",
          id: payload.id,
          result: {
            protocolVersion: LATEST_PROTOCOL_VERSION,
            capabilities: { tools: {} },
            serverInfo: { name: "connector-gateway", version: "test" },
          },
        });
      }
      if (payload.method === "tools/call") {
        return new Response(null, {
          status: 502,
          headers: {
            "proxy-status":
              'connectors-gateway; error=destination_unavailable; details="upstream_unavailable"',
          },
        });
      }
      throw new Error(`Unexpected MCP method: ${payload.method}`);
    });
    const mistral = new Mistral();
    const client = await mistral.beta.connectors.mcpClient("unavailable");

    const error = await client.callTool({ name: "search" }).then(
      () => new Error("Expected request to fail"),
      (cause: unknown) => cause,
    );

    expect(error).toBeInstanceOf(MistralError);
    expect(error).toMatchObject({
      name: "ConnectorsGatewayError",
      proxyError: "destination_unavailable",
      proxyStatusCode: null,
      details: "upstream_unavailable",
    });
    await client.close();
  });
});
