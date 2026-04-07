# Workflows.Metrics

## Overview

### Available Operations

* [getWorkflowMetrics](#getworkflowmetrics) - Get Workflow Metrics

## getWorkflowMetrics

Get comprehensive metrics for a specific workflow.

Args:
    workflow_name: The name of the workflow type to get metrics for
    start_time: Optional start time filter (ISO 8601 format)
    end_time: Optional end time filter (ISO 8601 format)

Returns:
    WorkflowMetrics: Dictionary containing metrics:
        - execution_count: Total number of executions
        - success_count: Number of successful executions
        - error_count: Number of failed/terminated executions
        - average_latency_ms: Average execution duration in milliseconds
        - retry_rate: Proportion of workflows with retries
        - latency_over_time: Time-series data of execution durations

Example:
    GET /v1/workflows/MyWorkflow/metrics
    GET /v1/workflows/MyWorkflow/metrics?start_time=2025-01-01T00:00:00Z
    GET /v1/workflows/MyWorkflow/metrics?start_time=2025-01-01T00:00:00Z&end_time=2025-12-31T23:59:59Z

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_workflow_metrics_v1_workflows__workflow_name__metrics_get" method="get" path="/v1/workflows/{workflow_name}/metrics" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.workflows.metrics.getWorkflowMetrics({
    workflowName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { workflowsMetricsGetWorkflowMetrics } from "@mistralai/mistralai/funcs/workflowsMetricsGetWorkflowMetrics.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await workflowsMetricsGetWorkflowMetrics(mistral, {
    workflowName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowsMetricsGetWorkflowMetrics failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkflowMetricsV1WorkflowsWorkflowNameMetricsGetRequest](../../models/operations/getworkflowmetricsv1workflowsworkflownamemetricsgetrequest.md)                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.WorkflowMetrics](../../models/components/workflowmetrics.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |