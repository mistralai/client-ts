import { expect, test, vi } from "vitest";

import {
  init,
  type VoiceAgentInitRequest,
} from "../../../src/extra/voice-agents/client.js";
import { VoiceAgentConfigurationError } from "../../../src/extra/voice-agents/errors.js";
import { functionTool } from "../../../src/extra/voice-agents/tools.js";
import { Mistral } from "../../../src/index.js";
import * as z from "zod/v4";

const SESSION = {
  id: "session-1",
  participant_token: "token",
  server_url: "wss://media.example",
  created_at: "2026-01-01T00:00:00Z",
  expires_at: "2026-01-01T00:01:00Z",
  function_tools: [],
};

function buildClient() {
  const calls: {
    url: string;
    method: string;
    body: string;
    request: Request;
  }[] = [];
  const client = new Mistral({
    apiKey: "key",
    httpClient: {
      request: async (request: Request) => {
        calls.push({
          url: request.url,
          method: request.method,
          body: await request.clone().text(),
          request,
        });
        if (request.method === "DELETE") return new Response(null, { status: 204 });
        return new Response(JSON.stringify(SESSION), {
          status: 200,
          headers: { "content-type": "application/json" },
        });
      },
    } as never,
  });
  return { client, calls };
}

test("init creates the remote session without connecting", async () => {
  const { client, calls } = buildClient();

  const session = await client.audio.sessions.init({
    llm: { model: "mistral-small-latest" },
  });

  expect(session.id).toBe("session-1");
  expect(calls).toHaveLength(1);
  expect(calls[0]?.method).toBe("POST");
});

test.each([
  ["through the client", (client: Mistral) => client.audio.sessions.init()],
  ["through the function", (client: Mistral) => init(client.audio.sessions)],
])("init with no request creates a session %s", async (_name, start) => {
  const { client, calls } = buildClient();

  const session = await start(client);

  expect(session.id).toBe("session-1");
  expect(calls).toHaveLength(1);
});

test("a round-tripped JSON config keeps its nulls", async () => {
  const { client, calls } = buildClient();
  const stored = JSON.parse(
    '{"agentId":"agent-1","agentVersion":null,"instructions":null,"welcomeMessage":null}',
  ) as VoiceAgentInitRequest;

  await client.audio.sessions.init(stored);

  expect(JSON.parse(calls[0]!.body)).toEqual({
    agent_id: "agent-1",
    agent_version: null,
    instructions: null,
    welcome_message: null,
  });
});

test("a null agentVersion does not satisfy the agentId requirement", async () => {
  const { client } = buildClient();

  await expect(
    client.audio.sessions.init({ agentId: null, agentVersion: 2 }),
  ).rejects.toThrow("agentVersion requires agentId");
});

test("close deletes a session that was never connected", async () => {
  const { client, calls } = buildClient();

  const session = await client.audio.sessions.init({});
  await session.close();

  expect(calls.map((call) => call.method)).toEqual(["POST", "DELETE"]);
});

test.each([
  { agentVersion: 2, reason: /requires agentId/ },
  { agentId: "agent-1", agentVersion: 0, reason: /must be positive/ },
])("rejects %o before any request", async ({ reason, ...request }) => {
  const { client, calls } = buildClient();

  await expect(client.audio.sessions.init(request)).rejects.toThrow(
    VoiceAgentConfigurationError,
  );
  await expect(client.audio.sessions.init(request)).rejects.toThrow(reason);
  expect(calls).toHaveLength(0);
});

test("two different handlers under one name fail before any request", async () => {
  const { client, calls } = buildClient();
  const parameters = z.object({ city: z.string() });

  await expect(
    client.audio.sessions.init({
      tools: [
        functionTool({ name: "lookup", parameters, handler: () => "a" }),
        functionTool({ name: "lookup", parameters, handler: () => "b" }),
      ],
    }),
  ).rejects.toThrow(VoiceAgentConfigurationError);
  expect(calls).toHaveLength(0);
});

test("headers are snapshotted for create and close", async () => {
  const { client, calls } = buildClient();
  const headers = new Headers({ "x-workspace-id": "workspace" });

  const session = await client.audio.sessions.init({}, { headers });
  headers.set("x-workspace-id", "changed");
  await session.close();

  expect(
    calls.map((call) => call.request.headers.get("x-workspace-id")),
  ).toEqual(["workspace", "workspace"]);
});

test("close reuses every create option except the abort signal", async () => {
  const { client, calls } = buildClient();
  const controller = new AbortController();

  const session = await client.audio.sessions.init(
    {},
    { credentials: "include", signal: controller.signal },
  );
  controller.abort();
  await session.close();

  expect(calls[1]?.method).toBe("DELETE");
  expect(calls[1]?.request.credentials).toBe("include");
  expect(calls[1]?.request.signal.aborted).toBe(false);
});

test("every tool keeps its snake_case fields on the wire", async () => {
  const { client, calls } = buildClient();

  await client.audio.sessions.init({
    tools: [
      functionTool({
        name: "lookup",
        parameters: z.object({ city: z.string() }),
        timeoutMs: 5000,
        handler: () => "",
      }),
      { type: "document_library", libraryIds: ["library-1"] },
      { type: "connector", connectorId: "connector-1", authorization: null },
    ],
  });

  expect((JSON.parse(calls[0]!.body) as { tools: unknown[] }).tools).toEqual([
    expect.objectContaining({ type: "function", timeout_ms: 5000 }),
    { type: "document_library", library_ids: ["library-1"] },
    { type: "connector", connector_id: "connector-1", authorization: null },
  ]);
});

test("a malformed tool fails before the microphone and before any request", async () => {
  const { client, calls } = buildClient();
  const preflight = vi.fn(async () => {});
  const failure = client.audio.sessions.init({
    tools: [{ type: "nope" } as never],
    audioInterface: {
      preflight,
      start: async () => {},
      inputAudio: () => [],
      outputAudio: async () => {},
      stop: async () => {},
    },
  });

  await expect(failure).rejects.toThrow(VoiceAgentConfigurationError);
  await expect(failure).rejects.toThrow('Unsupported voice tool type: "nope"');
  expect(preflight).not.toHaveBeenCalled();
  expect(calls).toHaveLength(0);
});

test("a failing audio preflight leaves no session behind", async () => {
  const { client, calls } = buildClient();
  const preflight = vi.fn(async () => {
    throw new Error("no input device");
  });

  await expect(
    client.audio.sessions.init({
      audioInterface: {
        preflight,
        start: async () => {},
        inputAudio: () => [],
        outputAudio: async () => {},
        stop: async () => {},
      },
    }),
  ).rejects.toThrow(/Audio interface is unavailable: no input device/);

  expect(preflight).toHaveBeenCalledOnce();
  expect(calls).toHaveLength(0);
});
