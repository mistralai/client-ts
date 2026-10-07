import { describe, expect, it } from "vitest";

import { workflowExtensions } from "../../src/extra/workflows/index.js";
import { HTTPClient, Mistral } from "../../src/index.js";

describe("workflowExtensions", () => {
  it("builds the connector bindings extension the API expects", () => {
    expect(workflowExtensions([
      { connectorName: "gmail" },
      { connectorName: "notion", credentialsName: "work-account" },
      { connectorName: "slack", credentialsName: null },
    ])).toEqual({
      mistralai: {
        connectors: {
          bindings: [
            { connector_name: "gmail" },
            { connector_name: "notion", credentials_name: "work-account" },
            { connector_name: "slack" },
          ],
        },
      },
    });
  });

  it("is sent unchanged in the execution request", async () => {
    let body: unknown;
    const client = new Mistral({
      apiKey: "test-key",
      serverURL: "http://localhost",
      httpClient: new HTTPClient({
        async fetcher(input) {
          body = await (input as Request).json();
          return Response.json({
            workflow_name: "my-workflow",
            execution_id: "exec-1",
            result: null,
          });
        },
      }),
    });
    const extensions = workflowExtensions([
      { connectorName: "notion", credentialsName: "work-account" },
    ]);

    await client.workflows.executeWorkflow({
      workflowIdentifier: "my-workflow",
      workflowExecutionRequest: { extensions },
    });

    expect(body).toMatchObject({ extensions });
  });
});
