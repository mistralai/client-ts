import { afterEach, describe, expect, test, vi } from "vitest";

import { registerTracerProvider } from "../../../src/extra/observability/index.js";
import {
  configureTelemetry,
  flushTelemetry,
  MISTRAL_OTLP_TRACES_ENDPOINT_ENV,
  MISTRAL_SDK_TELEMETRY_ENV,
} from "../../../src/extra/observability/telemetry.js";
import { HTTPClient, Mistral } from "../../../src/index.js";
import type { SDKOptions } from "../../../src/lib/config.js";

const exporters = vi.hoisted(() => [] as Array<{ config: unknown; exported: number }>);

vi.mock("@opentelemetry/exporter-trace-otlp-http", () => ({
  OTLPTraceExporter: class {
    exported = 0;
    constructor(public config: unknown) {
      exporters.push(this);
    }
    export(spans: unknown[], callback: (result: { code: number }) => void) {
      this.exported += spans.length;
      callback({ code: 0 });
    }
    async shutdown() {}
    async forceFlush() {}
  },
}));

type ClientOptions = Pick<SDKOptions, "server" | "serverURL">;

async function exportForClient(
  clientOptions: ClientOptions,
  autoEnable: boolean,
  endpointOverride?: string,
): Promise<{ exporterConfig: unknown; requestURL: string }> {
  const env: Record<string, string | undefined> = {
    [MISTRAL_SDK_TELEMETRY_ENV]: autoEnable ? "dedicated" : undefined,
    [MISTRAL_OTLP_TRACES_ENDPOINT_ENV]: endpointOverride,
    MISTRAL_API_KEY: undefined,
  };
  const previous = Object.fromEntries(Object.keys(env).map((key) => [key, process.env[key]]));
  const setEnv = (values: Record<string, string | undefined>) => {
    for (const [key, value] of Object.entries(values)) {
      if (value === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = value;
      }
    }
  };

  exporters.length = 0;
  const requestURLs: string[] = [];
  setEnv(env);
  try {
    const client = new Mistral({
      apiKey: "test-key",
      ...clientOptions,
      httpClient: new HTTPClient({
        async fetcher(input) {
          requestURLs.push((input as Request).url);
          return Response.json({ object: "list", data: [] });
        },
      }),
    });
    if (!autoEnable) {
      await configureTelemetry(client);
    }
    try {
      await client.models.list();
      await flushTelemetry(client);
      expect(exporters).toHaveLength(1);
      expect(exporters[0]!.exported).toBeGreaterThan(0);
    } finally {
      await configureTelemetry(client, "global", { redaction: false });
    }
  } finally {
    setEnv(previous);
  }

  expect(requestURLs).toHaveLength(1);
  return { exporterConfig: exporters[0]!.config, requestURL: requestURLs[0]! };
}

afterEach(() => {
  registerTracerProvider(undefined);
});

describe("dedicated telemetry endpoint", () => {
  // [client options, expected API base URL, expected telemetry base URL]
  const cases: Array<[ClientOptions, string, string]> = [
    [{}, "https://api.mistral.ai", "https://api.mistral.ai"],
    [{ server: "global" }, "https://api.mistral.ai", "https://api.mistral.ai"],
    // Named regional servers don't serve the telemetry endpoint.
    [{ server: "eu" }, "https://api.eu.mistral.ai", "https://api.mistral.ai"],
    [{ server: "us" }, "https://api.us.mistral.ai", "https://api.mistral.ai"],
    [{ serverURL: "https://deployment.example.com" }, "https://deployment.example.com", "https://deployment.example.com"],
    [{ serverURL: "https://llm.acme-corp.io/" }, "https://llm.acme-corp.io", "https://llm.acme-corp.io"],
    [
      { serverURL: "https://gateway.internal.net/mistral/" },
      "https://gateway.internal.net/mistral",
      "https://gateway.internal.net/mistral",
    ],
    [{ serverURL: "http://localhost:8080" }, "http://localhost:8080", "http://localhost:8080"],
    [
      { server: "eu", serverURL: "https://mistral.contoso.dev" },
      "https://mistral.contoso.dev",
      "https://mistral.contoso.dev",
    ],
  ];

  for (const autoEnable of [false, true]) {
    for (const [clientOptions, apiBaseURL, telemetryBaseURL] of cases) {
      test(`follows explicit serverURL: ${JSON.stringify(clientOptions)} (autoEnable=${autoEnable})`, async () => {
        const { exporterConfig, requestURL } = await exportForClient(clientOptions, autoEnable);

        expect(requestURL).toBe(`${apiBaseURL}/v1/models`);
        expect(exporterConfig).toEqual({
          url: `${telemetryBaseURL}/telemetry/v1/traces`,
          headers: { Authorization: "Bearer test-key" },
        });
      });
    }

    for (const endpointOverride of [undefined, "", "  "]) {
      test(`blank endpoint override ${JSON.stringify(endpointOverride)} uses the API server (autoEnable=${autoEnable})`, async () => {
        const { exporterConfig } = await exportForClient(
          { serverURL: "https://inference.foobar.ai" },
          autoEnable,
          endpointOverride,
        );

        expect(exporterConfig).toMatchObject({
          url: "https://inference.foobar.ai/telemetry/v1/traces",
        });
      });
    }

    test(`endpoint override takes precedence (autoEnable=${autoEnable})`, async () => {
      const { exporterConfig, requestURL } = await exportForClient(
        { serverURL: "https://proxy.widgets.org" },
        autoEnable,
        "  https://collector.example.com/v1/traces  ",
      );

      expect(requestURL).toBe("https://proxy.widgets.org/v1/models");
      expect(exporterConfig).toEqual({
        url: "https://collector.example.com/v1/traces",
        headers: { Authorization: "Bearer test-key" },
      });
    });
  }
});
