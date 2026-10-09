import { describe, expect, it, vi } from "vitest";

import {
  WorkflowExecutionError,
  WorkflowPollingTimeoutError,
} from "../../src/extra/workflows/index.js";
import { HTTPClient, Mistral } from "../../src/index.js";

const EXECUTION_ID = "exec-1";
const EXECUTE_PATH = "/v1/workflows/my-workflow/execute";
const EXECUTION_PATH = `/v1/workflows/executions/${EXECUTION_ID}`;

function execution(status: string | null, result: unknown = null) {
  return {
    workflow_name: "my-workflow",
    execution_id: EXECUTION_ID,
    root_execution_id: EXECUTION_ID,
    status,
    start_time: "2026-01-01T00:00:00Z",
    end_time: status === "RUNNING" ? null : "2026-01-01T00:01:00Z",
    result,
  };
}

/**
 * A client answering the execute call with `executeResponse` and each status
 * check with the next entry of `statuses`.
 */
function clientWith(
  executeResponse: unknown,
  statuses: Array<ReturnType<typeof execution>> = [],
) {
  const requests: Request[] = [];
  const client = new Mistral({
    apiKey: "test-key",
    serverURL: "http://localhost",
    httpClient: new HTTPClient({
      async fetcher(input) {
        const request = input as Request;
        requests.push(request.clone());
        const path = new URL(request.url).pathname;
        if (path === EXECUTE_PATH) {
          return Response.json(executeResponse);
        }
        if (path === EXECUTION_PATH) {
          const next = statuses.shift();
          if (next === undefined) throw new Error("unexpected status check");
          return Response.json(next);
        }
        throw new Error(`unexpected request to ${path}`);
      },
    }),
  });
  const statusChecks = () =>
    requests.filter((r) => new URL(r.url).pathname === EXECUTION_PATH).length;
  return { client, requests, statusChecks };
}

describe("executeWorkflowAndWait", () => {
  it("polls until completion and returns the result, without timeoutSeconds", async () => {
    const { client, requests, statusChecks } = clientWith(
      execution("RUNNING"),
      [execution("RUNNING"), execution("COMPLETED", { answer: 42 })],
    );

    const result = await client.workflows.executeWorkflowAndWait({
      workflowIdentifier: "my-workflow",
      input: { query: "hi" },
      deploymentName: "prod",
      timeoutSeconds: 30,
      pollingInterval: 0.001,
    });

    expect(result).toEqual({ answer: 42 });
    expect(statusChecks()).toBe(2);
    expect(await requests[0]?.json()).toEqual({
      input: { query: "hi" },
      deployment_name: "prod",
      wait_for_result: false,
      force_new_trace: false,
      traceparent: expect.any(String),
    });
  });

  it("lets the API wait for the result with useApiSync", async () => {
    const { client, requests, statusChecks } = clientWith({
      workflow_name: "my-workflow",
      execution_id: EXECUTION_ID,
      result: "done",
    });

    const result = await client.workflows.executeWorkflowAndWait({
      workflowIdentifier: "my-workflow",
      useApiSync: true,
      timeoutSeconds: 30,
    });

    expect(result).toBe("done");
    expect(statusChecks()).toBe(0);
    expect(await requests[0]?.json()).toMatchObject({
      wait_for_result: true,
      timeout_seconds: 30,
    });
  });
});

describe("waitForWorkflowCompletion", () => {
  it("returns the completed execution", async () => {
    const { client } = clientWith(null, [execution("COMPLETED", 1)]);

    const response = await client.workflows.waitForWorkflowCompletion(
      EXECUTION_ID,
    );

    expect(response.executionId).toBe(EXECUTION_ID);
    expect(response.status).toBe("COMPLETED");
    expect(response.result).toBe(1);
  });

  it.each(["FAILED", "CANCELED", "TERMINATED", "TIMED_OUT", null])(
    "throws WorkflowExecutionError when the status is %s",
    async (status) => {
      const { client } = clientWith(null, [execution(status)]);

      const error = await client.workflows.waitForWorkflowCompletion(
        EXECUTION_ID,
      ).catch((e: unknown) => e);

      expect(error).toBeInstanceOf(WorkflowExecutionError);
      expect((error as WorkflowExecutionError).message).toBe(
        `Workflow failed with status: ${status}`,
      );
      expect((error as WorkflowExecutionError).execution.status).toBe(status);
    },
  );

  it("throws WorkflowPollingTimeoutError after maxAttempts", async () => {
    const { client, statusChecks } = clientWith(null, [
      execution("RUNNING"),
      execution("RUNNING"),
    ]);

    const error = await client.workflows.waitForWorkflowCompletion(
      EXECUTION_ID,
      { pollingInterval: 0.001, maxAttempts: 2 },
    ).catch((e: unknown) => e);

    expect(error).toBeInstanceOf(WorkflowPollingTimeoutError);
    expect((error as WorkflowPollingTimeoutError).message).toBe(
      "Workflow is still running after 2 polling attempts",
    );
    expect(statusChecks()).toBe(2);
  });

  it("stops waiting between polls when the signal aborts", async () => {
    const { client, statusChecks } = clientWith(null, [execution("RUNNING")]);
    const controller = new AbortController();
    const reason = new Error("stop");

    const waiting = client.workflows.waitForWorkflowCompletion(
      EXECUTION_ID,
      { pollingInterval: 60 },
      { signal: controller.signal },
    );
    await vi.waitFor(() => expect(statusChecks()).toBe(1));
    controller.abort(reason);

    await expect(waiting).rejects.toBe(reason);
  });
});
