import type { RequestOptions } from "../../lib/sdks.js";
import type * as components from "../../models/components/index.js";
import type { Workflows } from "../../sdk/workflows.js";

const DEFAULT_POLLING_INTERVAL = 5;

export type WorkflowPollingOptions = {
  /** Seconds between status checks, like the Python client. Defaults to 5. */
  pollingInterval?: number | undefined;
  /** Maximum number of status checks. Unlimited when omitted. */
  maxAttempts?: number | undefined;
};

export type ExecuteWorkflowAndWaitRequest =
  & Pick<
    components.WorkflowExecutionRequest,
    | "input"
    | "executionId"
    | "deploymentName"
    | "customTracingAttributes"
    | "taskQueue"
    | "timeoutSeconds"
  >
  & WorkflowPollingOptions
  & {
    /** The workflow name or ID. */
    workflowIdentifier: string;
    /**
     * Let the API wait for the result (bounded by `timeoutSeconds`) instead
     * of polling the execution status.
     */
    useApiSync?: boolean | undefined;
  };

/** The execution finished with a status other than `COMPLETED`. */
export class WorkflowExecutionError extends Error {
  readonly execution: components.WorkflowExecutionResponse;

  constructor(execution: components.WorkflowExecutionResponse) {
    super(`Workflow failed with status: ${execution.status}`);
    this.name = "WorkflowExecutionError";
    this.execution = execution;
  }
}

/** The execution was still running after `maxAttempts` status checks. */
export class WorkflowPollingTimeoutError extends Error {
  readonly executionId: string;

  constructor(executionId: string, maxAttempts: number) {
    super(`Workflow is still running after ${maxAttempts} polling attempts`);
    this.name = "WorkflowPollingTimeoutError";
    this.executionId = executionId;
  }
}

/**
 * Executes a workflow and returns its result, like the Python client's
 * `execute_workflow_and_wait`.
 */
export async function executeWorkflowAndWait(
  workflows: Workflows,
  request: ExecuteWorkflowAndWaitRequest,
  options?: RequestOptions,
): Promise<any> {
  const {
    workflowIdentifier,
    useApiSync = false,
    pollingInterval,
    maxAttempts,
    timeoutSeconds,
    ...workflowExecutionRequest
  } = request;

  if (useApiSync) {
    const response = await workflows.executeWorkflow({
      workflowIdentifier,
      workflowExecutionRequest: {
        ...workflowExecutionRequest,
        waitForResult: true,
        timeoutSeconds,
      },
    }, options);
    return response.result;
  }

  const execution = await workflows.executeWorkflow({
    workflowIdentifier,
    workflowExecutionRequest,
  }, options);

  const finalExecution = await waitForWorkflowCompletion(
    workflows,
    execution.executionId,
    { pollingInterval, maxAttempts },
    options,
  );
  return finalExecution.result;
}

/**
 * Polls an execution until it stops running, like the Python client's
 * `wait_for_workflow_completion`.
 *
 * @throws `WorkflowExecutionError` when the execution ends with a status other than `COMPLETED`.
 * @throws `WorkflowPollingTimeoutError` when `maxAttempts` is reached while still running.
 */
export async function waitForWorkflowCompletion(
  workflows: Workflows,
  executionId: string,
  pollingOptions?: WorkflowPollingOptions,
  options?: RequestOptions,
): Promise<components.WorkflowExecutionResponse> {
  const pollingInterval = pollingOptions?.pollingInterval
    ?? DEFAULT_POLLING_INTERVAL;
  const maxAttempts = pollingOptions?.maxAttempts;

  let attempts = 0;
  while (true) {
    const execution = await workflows.executions.getWorkflowExecution(
      { executionId },
      options,
    );
    if (execution.status === "COMPLETED") return execution;
    if (execution.status !== "RUNNING") {
      throw new WorkflowExecutionError(execution);
    }

    attempts++;
    if (maxAttempts != null && attempts >= maxAttempts) {
      throw new WorkflowPollingTimeoutError(executionId, maxAttempts);
    }
    await sleep(pollingInterval, options);
  }
}

/** Waits `seconds`, rejecting early when the request options' signal aborts. */
export function sleep(seconds: number, options?: RequestOptions): Promise<void> {
  const signal = options?.signal ?? options?.fetchOptions?.signal ?? undefined;
  signal?.throwIfAborted();
  return new Promise((resolve, reject) => {
    const onAbort = () => {
      clearTimeout(timer);
      reject(signal?.reason);
    };
    const timer = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, seconds * 1000);
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}
