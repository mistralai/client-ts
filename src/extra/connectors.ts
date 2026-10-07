import type { Client } from "@modelcontextprotocol/sdk/client/index.js";
import type { Transport } from "@modelcontextprotocol/sdk/shared/transport.js";

import type { MistralCore } from "../core.js";
import { SDK_METADATA } from "../lib/config.js";
import type { Fetcher } from "../lib/http.js";
import { combineSignals } from "../lib/primitives.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { MistralError } from "../models/errors/mistralerror.js";

const SDK_DEFAULT_TIMEOUT_MS = 300_000;
const GATEWAY_PATH = "/v1/connectors-gateway";
const GATEWAY_MEMBER = "connectors-gateway";

// RFC 8941 grammar subset for the Proxy-Status List (RFC 9209): Token or String members,
// each followed by parameters whose values are Strings or other bare items.
const TOKEN = /[A-Za-z*][!#$%&'*+\-.^_`|~0-9A-Za-z:\/]*/.source;
const STRING = /"((?:[\x20\x21\x23-\x5b\x5d-\x7e]|\\["\\])*)"/.source;
const MEMBER = new RegExp(String.raw`\s*(${TOKEN}|${STRING})`, "y");
const PARAMETER = new RegExp(
  String.raw`\s*;\s*([a-z*][a-z0-9_\-.*]*)(?:=(?:${STRING}|([^\s;,"]+)))?`,
  "y",
);
const SEPARATOR = /\s*,/y;
const STRING_ESCAPE = /\\(["\\])/g;

type ConnectorProtocol = "http" | "mcp";

type ProxyStatusMember = {
  name: string;
  raw: string;
  parameters: Map<string, string>;
};

type ConnectorsGatewayErrorOptions = {
  body: string;
  request: Request;
  response: Response;
  proxyStatus: string;
  proxyError: string;
  proxyStatusCode: number | null;
  details: string | null;
};

export class ConnectorsGatewayError extends MistralError {
  readonly request: Request;
  readonly proxyStatus: string;
  readonly proxyError: string;
  readonly proxyStatusCode: number | null;
  readonly details: string | null;

  constructor(options: ConnectorsGatewayErrorOptions) {
    super(
      `Connectors Gateway request failed with status ${options.response.status}: ${options.details || options.proxyError}`,
      options,
    );
    this.name = "ConnectorsGatewayError";
    this.request = options.request;
    this.proxyStatus = options.proxyStatus;
    this.proxyError = options.proxyError;
    this.proxyStatusCode = options.proxyStatusCode;
    this.details = options.details;
  }
}

/**
 * Create and connect an official MCP client through the Connectors Gateway.
 *
 * Requests inherit the parent Mistral SDK authentication, server URL, user
 * agent, and request timeout. The long-lived MCP listen stream remains open
 * until the server or caller closes it. The caller owns the returned client
 * and must close it with `await client.close()` when it is no longer needed.
 *
 * @param sdkClient - Parent Mistral SDK client supplying shared configuration.
 * @param connectorIdOrName - Connector ID or unique name.
 * @param credentialsName - Optional named credentials to use for the connector.
 * @throws {@link ConnectorsGatewayError} when the gateway reports a
 * gateway-authored failure.
 */
export async function createMCPClient(
  sdkClient: MistralCore,
  connectorIdOrName: string,
  credentialsName?: string,
): Promise<Client> {
  const [clientModule, transportModule] = await Promise.all([
    import("@modelcontextprotocol/sdk/client/index.js"),
    import("@modelcontextprotocol/sdk/client/streamableHttp.js"),
  ]);
  const gatewayURL = gatewayURLFor(
    sdkClient._baseURL,
    connectorIdOrName,
    "mcp",
  );
  const transport = new transportModule.StreamableHTTPClientTransport(
    gatewayURL,
    {
      fetch: createGatewayFetcher(
        sdkClient,
        gatewayURL,
        credentialsName,
        "mcp",
      ),
    },
  );
  const client = new clientModule.Client({
    name: "mistralai",
    version: SDK_METADATA.sdkVersion,
  });
  // The SDK transport implements Transport at runtime, but its `sessionId`
  // getter is declared as `string | undefined` while the interface uses an
  // exact optional property. Keep the upstream type workaround at this edge.
  const timeoutMs = sdkClient._options.timeoutMs ?? SDK_DEFAULT_TIMEOUT_MS;
  const connectOptions = timeoutMs > 0 ? { timeout: timeoutMs } : undefined;
  await client.connect(transport as Transport, connectOptions);
  return client;
}

/**
 * Create a fetch-compatible client for an HTTP connector.
 *
 * Relative paths are resolved within the configured connector route. Requests
 * inherit the parent Mistral SDK authentication, server URL, user agent, and
 * timeout, and redirects remain manual so credentials cannot leave that route.
 * Requests reject with {@link ConnectorsGatewayError} for gateway-authored
 * failures; upstream error responses are returned unchanged.
 *
 * @param sdkClient - Parent Mistral SDK client supplying shared configuration.
 * @param connectorIdOrName - Connector ID or unique name.
 * @param credentialsName - Optional named credentials to use for the connector.
 */
export function createHTTPClient(
  sdkClient: MistralCore,
  connectorIdOrName: string,
  credentialsName?: string,
): Fetcher {
  const gatewayURL = gatewayURLFor(
    sdkClient._baseURL,
    connectorIdOrName,
    "http",
  );
  return createGatewayFetcher(
    sdkClient,
    gatewayURL,
    credentialsName,
    "http",
  );
}

function createGatewayFetcher(
  sdkClient: MistralCore,
  gatewayURL: URL,
  credentialsName: string | undefined,
  protocol: ConnectorProtocol,
): Fetcher {
  return async (input, init) => {
    const request = createScopedRequest(input, init, gatewayURL);
    ensureAllowedURL(new URL(request.url), gatewayURL);

    const headers = new Headers(request.headers);
    const securityInput = await extractSecurity(sdkClient._options.apiKey);
    const security = resolveGlobalSecurity(
      securityInput == null ? {} : { apiKey: securityInput },
    );
    for (const [name, value] of Object.entries(security?.headers ?? {})) {
      if (!headers.has(name)) {
        headers.set(name, value);
      }
    }
    if (credentialsName !== undefined && !headers.has("x-credentials-name")) {
      headers.set("x-credentials-name", credentialsName);
    }

    if (!headers.has("user-agent")) {
      headers.set(
        "user-agent",
        sdkClient._options.userAgent ?? SDK_METADATA.userAgent,
      );
    }

    const timeoutMs = sdkClient._options.timeoutMs ?? SDK_DEFAULT_TIMEOUT_MS;
    const isMCPListenRequest = protocol === "mcp"
      && request.method === "GET"
      && request.headers.get("accept")?.includes("text/event-stream") === true;
    const timeoutSignal = timeoutMs > 0 && !isMCPListenRequest
      ? AbortSignal.timeout(timeoutMs)
      : undefined;
    const signal = combineSignals(
      request.signal,
      timeoutSignal,
    );
    const preparedRequest = new Request(request, { headers, signal });
    const response = await fetch(preparedRequest);
    await raiseConnectorsGatewayError(response, preparedRequest);
    return response;
  };
}

function createScopedRequest(
  input: RequestInfo | URL,
  init: RequestInit | undefined,
  gatewayURL: URL,
): Request {
  const requestInit = { ...init, redirect: "manual" as const };
  if (input instanceof Request) {
    return new Request(input, requestInit);
  }

  const requestURL = input instanceof URL
    ? input
    : scopedURL(input, gatewayURL);
  return new Request(requestURL, requestInit);
}

function scopedURL(input: string, gatewayURL: URL): URL {
  const rawPath = input.split(/[?#]/, 1)[0] ?? "";
  const hasDotSegments = rawPath.split("/").some((segment) => {
    try {
      const decoded = decodeURIComponent(segment);
      return decoded === "." || decoded === "..";
    } catch {
      return true;
    }
  });
  if (hasDotSegments) {
    throw new Error(
      "HTTP connector client requests must target the configured connector",
    );
  }

  const scopedInput = input.startsWith("/") && !input.startsWith("//")
    ? input.replace(/^\/+/, "")
    : input;
  return new URL(scopedInput, gatewayBaseURL(gatewayURL));
}

function gatewayBaseURL(gatewayURL: URL): URL {
  const baseURL = new URL(gatewayURL);
  baseURL.pathname = `${baseURL.pathname.replace(/\/+$/, "")}/`;
  return baseURL;
}

function gatewayURLFor(
  baseURL: URL | null,
  connectorIdOrName: string,
  protocol: ConnectorProtocol,
): URL {
  if (baseURL === null) {
    throw new Error("No base URL configured for the Mistral SDK");
  }

  const gatewayURL = new URL(baseURL);
  const connectorReference = encodeURIComponent(connectorIdOrName).replace(
    /[!'()*]/g,
    (character) => `%${character.charCodeAt(0).toString(16).toUpperCase()}`,
  );
  gatewayURL.pathname = `${gatewayURL.pathname.replace(/\/+$/, "")}${GATEWAY_PATH}/${connectorReference}/${protocol}`;
  gatewayURL.search = "";
  gatewayURL.hash = "";
  return gatewayURL;
}

function ensureAllowedURL(
  requestURL: URL,
  gatewayURL: URL,
): void {
  const gatewayPath = gatewayURL.pathname.replace(/\/+$/, "");
  const requestPath = requestURL.pathname;
  const isAllowedPath = requestPath === gatewayPath
    || requestPath.startsWith(`${gatewayPath}/`);
  const hasDotSegments = requestPath
    .slice(gatewayPath.length)
    .split("/")
    .some((segment) => {
      try {
        const decoded = decodeURIComponent(segment);
        return decoded === "." || decoded === "..";
      } catch {
        return true;
      }
    });

  if (
    requestURL.origin !== gatewayURL.origin
    || !isAllowedPath
    || hasDotSegments
  ) {
    throw new Error(
      "HTTP connector client requests must target the configured connector",
    );
  }
}

async function raiseConnectorsGatewayError(
  response: Response,
  request: Request,
): Promise<void> {
  if (response.status < 400) {
    return;
  }

  const proxyStatusHeader = response.headers.get("proxy-status") ?? "";
  for (const member of parseProxyStatus(proxyStatusHeader)) {
    const proxyError = member.parameters.get("error");
    if (member.name !== GATEWAY_MEMBER || proxyError === undefined) {
      continue;
    }

    const rawProxyStatusCode = member.parameters.get("status-code") ?? "";
    throw new ConnectorsGatewayError({
      body: await response.clone().text(),
      request,
      response,
      proxyStatus: member.raw,
      proxyError,
      proxyStatusCode: /^\d+$/.test(rawProxyStatusCode)
        ? Number.parseInt(rawProxyStatusCode, 10)
        : null,
      details: member.parameters.get("details") ?? null,
    });
  }
}

/** Parse members up to the first malformed one; later members are dropped. */
function parseProxyStatus(value: string): ProxyStatusMember[] {
  const members: ProxyStatusMember[] = [];
  let member = matchAt(MEMBER, value, 0);
  while (member !== null) {
    const [, name = ""] = member;
    const start = MEMBER.lastIndex - name.length;
    let position = MEMBER.lastIndex;
    const parameters = new Map<string, string>();
    let parameter = matchAt(PARAMETER, value, position);
    while (parameter !== null) {
      const [, key = "", stringItem, bareItem] = parameter;
      parameters.set(
        key,
        stringItem === undefined
          ? bareItem ?? "?1"
          : stringItem.replace(STRING_ESCAPE, "$1"),
      );
      position = PARAMETER.lastIndex;
      parameter = matchAt(PARAMETER, value, position);
    }
    members.push({ name, raw: value.slice(start, position), parameters });

    if (matchAt(SEPARATOR, value, position) === null) {
      break;
    }
    member = matchAt(MEMBER, value, SEPARATOR.lastIndex);
  }
  return members;
}

function matchAt(
  pattern: RegExp,
  value: string,
  position: number,
): RegExpExecArray | null {
  pattern.lastIndex = position;
  return pattern.exec(value);
}
