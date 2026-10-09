import { env } from "../lib/env.js";
import type { BeforeRequestContext, BeforeRequestHook } from "./types.js";

const SA_TOKEN_PATH_ENV = "MISTRAL_SA_TOKEN_PATH";

/** Thrown when the configured service-account token file cannot be read. */
export class ServiceAccountTokenError extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = "ServiceAccountTokenError";
  }
}

function serviceAccountTokenPath(): string | null {
  const globals = globalThis as {
    process?: { env?: Record<string, string | undefined> };
  };
  return globals.process?.env?.[SA_TOKEN_PATH_ENV] || null;
}

/**
 * Read the mounted service-account token, or null when no path is configured.
 *
 * Re-read on every call so kubelet rotation is picked up. `node:fs` is imported lazily so it stays
 * out of browser bundles, where there is no `process.env` to configure a path in the first place.
 */
export async function readServiceAccountToken(): Promise<string | null> {
  const path = serviceAccountTokenPath();
  if (path === null) {
    return null;
  }

  let contents: string;
  try {
    const { readFile } = await import("node:fs/promises");
    contents = await readFile(path, "utf8");
  } catch (cause) {
    throw new ServiceAccountTokenError(
      `Failed to read service-account token from ${path}`,
      { cause },
    );
  }

  const token = contents.trim();
  if (!token) {
    throw new ServiceAccountTokenError(
      `Service-account token file is empty: ${path}`,
    );
  }
  return token;
}

export function bearerHeader(token: string): string {
  return token.slice(0, 7).toLowerCase() === "bearer "
    ? token
    : `Bearer ${token}`;
}

function envAuthorization(): string | null {
  const apiKey = env().MISTRAL_API_KEY;
  return apiKey ? bearerHeader(apiKey) : null;
}

/**
 * Authenticates requests from a mounted service-account token when no apiKey was passed.
 *
 * Yields the precedence per-request headers > explicit `apiKey` > `MISTRAL_SA_TOKEN_PATH` >
 * `MISTRAL_API_KEY`. The generated client already covers the explicit key and `MISTRAL_API_KEY`.
 */
export class ServiceAccountAuthHook implements BeforeRequestHook {
  async beforeRequest(
    hookCtx: BeforeRequestContext,
    request: Request,
  ): Promise<Request> {
    if (hookCtx.securitySource != null) {
      return request;
    }

    // Per-request headers are applied at build time, before hooks run. Anything other than the
    // env key's header came from the caller and outranks the service-account token.
    const existing = request.headers.get("Authorization");
    if (existing !== null && existing !== envAuthorization()) {
      return request;
    }

    const token = await readServiceAccountToken();
    if (token === null) {
      return request;
    }

    request.headers.set("Authorization", bearerHeader(token));
    return request;
  }
}
