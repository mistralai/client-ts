import { mkdtempSync, writeFileSync } from "node:fs";
import { createServer, type Server } from "node:http";
import type { AddressInfo } from "node:net";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { WebSocketServer } from "ws";
import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";

import {
  readServiceAccountToken,
  ServiceAccountTokenError,
} from "../../src/hooks/service_account_auth.js";
import { Mistral } from "../../src/index.js";
import { resetEnv } from "../../src/lib/env.js";

const CHAT_BODY = JSON.stringify({
  id: "cmpl-test",
  object: "chat.completion",
  model: "mistral-small-latest",
  created: 0,
  usage: { prompt_tokens: 1, completion_tokens: 1, total_tokens: 2 },
  choices: [{
    index: 0,
    message: { role: "assistant", content: "ok" },
    finish_reason: "stop",
  }],
});

const PROMPT = {
  model: "mistral-small-latest",
  messages: [{ role: "user" as const, content: "hi" }],
};

let server: Server;
let baseURL: string;
let seen: Array<string | null>;
let tokenPath: string;

beforeAll(async () => {
  server = createServer((_req, res) => {
    seen.push(_req.headers.authorization ?? null);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(CHAT_BODY);
  });
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  baseURL = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  tokenPath = join(mkdtempSync(join(tmpdir(), "mistral-sa-")), "token");
});

afterAll(() => {
  server.close();
});

beforeEach(() => {
  seen = [];
  writeFileSync(tokenPath, "sa-token-v1\n");
  delete process.env["MISTRAL_API_KEY"];
  delete process.env["MISTRAL_SA_TOKEN_PATH"];
  // The SDK memoises env(); without this, one test's variables leak into the next.
  resetEnv();
});

async function sentAuthorization(
  apiKey?: string,
  headers?: Record<string, string>,
): Promise<string | null> {
  const client = new Mistral({ apiKey, serverURL: baseURL });
  await client.chat.complete(PROMPT, headers ? { headers } : undefined);
  return seen[seen.length - 1] ?? null;
}

async function handshakeAuthorization(
  apiKey?: string,
  httpHeaders?: Record<string, string>,
): Promise<string | null> {
  const wss = new WebSocketServer({ port: 0, host: "127.0.0.1" });
  const handshake = new Promise<string | null>((resolve) => {
    wss.on("connection", (ws, req) => {
      resolve(req.headers.authorization ?? null);
      ws.close();
    });
  });
  await new Promise<void>((resolve) => wss.on("listening", resolve));

  const { RealtimeTranscription } = await import(
    "../../src/extra/realtime/index.js"
  );
  const client = new RealtimeTranscription({
    apiKey,
    serverURL: `http://127.0.0.1:${(wss.address() as AddressInfo).port}`,
  });
  // The server drops the socket after the handshake, so connect rejects either way; it only
  // matters when it rejects before any handshake arrives.
  const connecting = client
    .connect("voxtral-mini-latest", { httpHeaders })
    .then(() => new Promise<never>(() => {}));
  connecting.catch(() => {});

  try {
    return await Promise.race([handshake, connecting]);
  } finally {
    wss.close();
  }
}

describe("readServiceAccountToken", () => {
  it("returns null when no path is configured", async () => {
    await expect(readServiceAccountToken()).resolves.toBeNull();
  });

  it("re-reads the file on every call so rotation is picked up", async () => {
    process.env["MISTRAL_SA_TOKEN_PATH"] = tokenPath;

    await expect(readServiceAccountToken()).resolves.toBe("sa-token-v1");
    writeFileSync(tokenPath, "sa-token-v2\n");
    await expect(readServiceAccountToken()).resolves.toBe("sa-token-v2");
  });

  it("throws on a missing file", async () => {
    process.env["MISTRAL_SA_TOKEN_PATH"] = `${tokenPath}-absent`;

    await expect(readServiceAccountToken()).rejects.toThrow(
      ServiceAccountTokenError,
    );
  });

  it("throws on an empty file, as seen mid-rotation", async () => {
    process.env["MISTRAL_SA_TOKEN_PATH"] = tokenPath;
    writeFileSync(tokenPath, "   \n");

    await expect(readServiceAccountToken()).rejects.toThrow(/is empty/);
  });
});

describe("precedence", () => {
  it("an explicit apiKey wins over everything", async () => {
    process.env["MISTRAL_API_KEY"] = "env-key";
    process.env["MISTRAL_SA_TOKEN_PATH"] = tokenPath;

    await expect(sentAuthorization("explicit")).resolves.toBe(
      "Bearer explicit",
    );
  });

  it("the SA token beats MISTRAL_API_KEY", async () => {
    process.env["MISTRAL_API_KEY"] = "env-key";
    process.env["MISTRAL_SA_TOKEN_PATH"] = tokenPath;

    await expect(sentAuthorization()).resolves.toBe("Bearer sa-token-v1");
  });

  it("MISTRAL_API_KEY is the last resort", async () => {
    process.env["MISTRAL_API_KEY"] = "env-key";

    await expect(sentAuthorization()).resolves.toBe("Bearer env-key");
  });

  it("sends no Authorization when nothing is configured", async () => {
    await expect(sentAuthorization()).resolves.toBeNull();
  });

  it("does not double-prefix a key that already carries the scheme", async () => {
    process.env["MISTRAL_SA_TOKEN_PATH"] = tokenPath;
    writeFileSync(tokenPath, "Bearer already-prefixed\n");

    await expect(sentAuthorization()).resolves.toBe("Bearer already-prefixed");
  });

  it("surfaces an unreadable token file as the cause of the SDK error", async () => {
    process.env["MISTRAL_SA_TOKEN_PATH"] = `${tokenPath}-absent`;

    // The SDK wraps anything a hook throws in UnexpectedClientError, so the token error is
    // only reachable through the cause chain.
    const error = await sentAuthorization().catch((e: unknown) => e);

    expect((error as Error).cause).toBeInstanceOf(ServiceAccountTokenError);
  });
});

describe("rotation", () => {
  it("a live client picks up a rotated token", async () => {
    process.env["MISTRAL_SA_TOKEN_PATH"] = tokenPath;
    const client = new Mistral({ serverURL: baseURL });

    await client.chat.complete(PROMPT);
    writeFileSync(tokenPath, "sa-token-v2\n");
    await client.chat.complete(PROMPT);

    expect(seen).toEqual(["Bearer sa-token-v1", "Bearer sa-token-v2"]);
  });
});

describe("caller header override", () => {
  it("a per-request Authorization outranks the SA token", async () => {
    process.env["MISTRAL_SA_TOKEN_PATH"] = tokenPath;

    const sent = await sentAuthorization(undefined, {
      Authorization: "Bearer caller",
    });

    expect(sent).toBe("Bearer caller");
  });

  it("a per-request Authorization outranks MISTRAL_API_KEY", async () => {
    process.env["MISTRAL_API_KEY"] = "env-key";

    const sent = await sentAuthorization(undefined, {
      Authorization: "Bearer caller",
    });

    expect(sent).toBe("Bearer caller");
  });

  it("an unrelated per-request header does not suppress the SA token", async () => {
    process.env["MISTRAL_SA_TOKEN_PATH"] = tokenPath;

    const sent = await sentAuthorization(undefined, { "X-Trace": "abc" });

    expect(sent).toBe("Bearer sa-token-v1");
  });

  it("a per-request Authorization survives a missing token file", async () => {
    process.env["MISTRAL_SA_TOKEN_PATH"] = `${tokenPath}-absent`;

    const sent = await sentAuthorization(undefined, {
      Authorization: "Bearer caller",
    });

    expect(sent).toBe("Bearer caller");
  });

  it("a per-request Authorization survives an empty token file", async () => {
    process.env["MISTRAL_SA_TOKEN_PATH"] = tokenPath;
    writeFileSync(tokenPath, "   \n");

    const sent = await sentAuthorization(undefined, {
      Authorization: "Bearer caller",
    });

    expect(sent).toBe("Bearer caller");
  });
});

describe("realtime handshake", () => {
  it("carries the SA token over MISTRAL_API_KEY", async () => {
    process.env["MISTRAL_API_KEY"] = "env-key";
    process.env["MISTRAL_SA_TOKEN_PATH"] = tokenPath;

    await expect(handshakeAuthorization()).resolves.toBe("Bearer sa-token-v1");
  });

  it("leaves an explicit apiKey alone", async () => {
    process.env["MISTRAL_SA_TOKEN_PATH"] = tokenPath;

    await expect(handshakeAuthorization("explicit")).resolves.toBe(
      "Bearer explicit",
    );
  });

  it("agrees with the HTTP path on a caller override", async () => {
    process.env["MISTRAL_SA_TOKEN_PATH"] = tokenPath;
    const override = { Authorization: "Bearer caller" };

    const handshake = await handshakeAuthorization(undefined, override);

    expect(handshake).toBe(await sentAuthorization(undefined, override));
  });

  it("a caller Authorization survives a missing token file", async () => {
    process.env["MISTRAL_SA_TOKEN_PATH"] = `${tokenPath}-absent`;

    await expect(
      handshakeAuthorization(undefined, { authorization: "Bearer caller" }),
    ).resolves.toBe("Bearer caller");
  });
});
