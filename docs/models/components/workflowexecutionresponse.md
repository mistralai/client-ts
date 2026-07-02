# WorkflowExecutionResponse

## Example Usage

```typescript
import { WorkflowExecutionResponse } from "@mistralai/mistralai/models/components";

let value: WorkflowExecutionResponse = {
  workflowName: "<value>",
  executionId: "<id>",
  rootExecutionId: "<id>",
  status: "TIMED_OUT",
  startTime: new Date("2026-07-06T18:38:00.483Z"),
  endTime: new Date("2025-12-31T15:27:44.423Z"),
  result: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `workflowName`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the workflow                                                                      |
| `workflowId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the workflow                                                                        |
| `deploymentName`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the deployment that ran this execution                                            |
| `executionId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the workflow execution                                                              |
| `parentExecutionId`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The parent execution ID of the workflow execution                                             |
| `rootExecutionId`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | The root execution ID of the workflow execution                                               |
| `runId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique run identifier (database UUID)                                                     |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the user who triggered the execution                                                |
| `status`                                                                                      | [components.WorkflowExecutionStatus](../../models/components/workflowexecutionstatus.md)      | :heavy_check_mark:                                                                            | The status of the workflow execution                                                          |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The start time of the workflow execution                                                      |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The end time of the workflow execution, if available                                          |
| `totalDurationMs`                                                                             | *number*                                                                                      | :heavy_minus_sign:                                                                            | The total duration of the trace in milliseconds                                               |
| `result`                                                                                      | *any*                                                                                         | :heavy_check_mark:                                                                            | The result of the workflow execution, if available                                            |