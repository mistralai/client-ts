import * as z from "zod/v4";

import { matchStatusCode } from "../../lib/http.js";
import * as M from "../../lib/matchers.js";
import { compactMap } from "../../lib/primitives.js";
import { ClientSDK, RequestOptions } from "../../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../../lib/security.js";

const WorkerInfo$inboundSchema = z.object({
  scheduler_url: z.string(),
  namespace: z.string(),
});

/**
 * Returns the workflow namespace of the API key's workspace, like the Python
 * client's `get_scheduler_namespace`.
 */
export async function getSchedulerNamespace(
  client: ClientSDK,
  options?: RequestOptions,
): Promise<string> {
  const secConfig = await extractSecurity(client._options.apiKey);
  const securityInput = secConfig == null ? {} : { apiKey: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "get_worker_info_v1_workflows_workers_whoami_get",
    oAuth2Scopes: null,
    resolvedSecurity: requestSecurity,
    securitySource: client._options.apiKey,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" as const },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: options?.serverURL,
    path: "/v1/workflows/workers/whoami",
    headers: new Headers(compactMap({ Accept: "application/json" })),
    userAgent: client._options.userAgent,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || 300000,
  }, options);
  if (!requestRes.ok) throw requestRes.error;
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    isErrorStatusCode: (statusCode: number) =>
      matchStatusCode({ status: statusCode } as Response, ["4XX", "5XX"]),
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) throw doResult.error;
  const response = doResult.value;

  const [result] = await M.match(
    M.json(200, WorkerInfo$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, req);
  if (!result.ok) throw result.error;
  return result.value.namespace;
}
