import { isPlainObject } from "../lib/primitives.js";
import { BeforeRequestContext, BeforeRequestHook } from "./types.js";

type OTelApi = typeof import("@opentelemetry/api");

const EXECUTE_OPERATION_IDS = new Set([
  "execute_workflow_v1_workflows__workflow_identifier__execute_post",
  "execute_workflow_registration_v1_workflows_registrations__workflow_registration_id__execute_post",
]);

const SAMPLED_FLAG = 0x01;

let otelApi: OTelApi | null | undefined;

async function getOTelApi(): Promise<OTelApi | null> {
  if (otelApi !== undefined) return otelApi;
  try {
    otelApi = await import("@opentelemetry/api");
  } catch {
    // OpenTelemetry is an optional peer; without it, a fresh trace is started.
    otelApi = null;
  }
  return otelApi;
}

// https://www.w3.org/TR/trace-context/#traceparent-header
function isSampled(traceparent: string): boolean {
  const parts = traceparent.split("-");
  if (parts.length !== 4 || !/^[0-9a-f]+$/i.test(parts[3]!)) return false;
  return (Number.parseInt(parts[3]!, 16) & SAMPLED_FLAG) !== 0;
}

function randomHex(bytes: number): string {
  return Array.from(
    crypto.getRandomValues(new Uint8Array(bytes)),
    (byte) => byte.toString(16).padStart(2, "0"),
  ).join("");
}

async function sampledTraceparent(): Promise<string> {
  const api = await getOTelApi();
  if (api) {
    const carrier: Record<string, string> = {};
    api.propagation.inject(api.context.active(), carrier);
    const traceparent = carrier["traceparent"] ?? "";
    if (isSampled(traceparent)) return traceparent;
  }
  return `00-${randomHex(16)}-${randomHex(8)}-01`;
}

async function jsonBody(
  request: Request,
): Promise<Record<string, unknown> | null> {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) return null;
  try {
    const body: unknown = await request.clone().json();
    return isPlainObject(body) ? body : null;
  } catch {
    return null;
  }
}

/**
 * Sends a sampled traceparent on /execute requests so worker traces are
 * always recorded, like the Python client's `TraceparentInjectionHook`.
 *
 * Sent in both the request body and the header. The body param is
 * authoritative; the header is kept for API versions that predate it.
 */
export class TraceparentInjectionHook implements BeforeRequestHook {
  // Traceparents generated per call. Retries run the hook again with the same
  // context, and must stay in the same trace.
  readonly #traceparents = new WeakMap<BeforeRequestContext, string>();

  async beforeRequest(
    hookCtx: BeforeRequestContext,
    request: Request,
  ): Promise<Request> {
    if (!EXECUTE_OPERATION_IDS.has(hookCtx.operationID)) return request;

    const body = await jsonBody(request);
    const callerTraceparent = body?.["traceparent"]
      || request.headers.get("traceparent");
    const traceparent = typeof callerTraceparent === "string"
      ? callerTraceparent
      : this.#traceparents.get(hookCtx) ?? await sampledTraceparent();
    this.#traceparents.set(hookCtx, traceparent);

    const headers = new Headers(request.headers);
    headers.set("traceparent", traceparent);

    if (body === null || body["traceparent"]) {
      return new Request(request, { headers });
    }

    body["traceparent"] = traceparent;
    headers.delete("content-length");
    return new Request(request, {
      method: request.method,
      headers,
      body: JSON.stringify(body),
    });
  }
}
