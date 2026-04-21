# WorkflowExecutionTraceEventsResponse

## Example Usage

```typescript
import { WorkflowExecutionTraceEventsResponse } from "@mistralai/mistralai/models/components";

let value: WorkflowExecutionTraceEventsResponse = {
  workflowName: "<value>",
  executionId: "<id>",
  rootExecutionId: "<id>",
  status: "CANCELED",
  startTime: new Date("2026-11-22T21:53:31.145Z"),
  endTime: new Date("2024-06-22T01:39:02.544Z"),
  result: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `workflowName`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the workflow                                                                      |
| `executionId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the workflow execution                                                              |
| `parentExecutionId`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The parent execution ID of the workflow execution                                             |
| `rootExecutionId`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | The root execution ID of the workflow execution                                               |
| `runId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique run identifier (database UUID)                                                     |
| `status`                                                                                      | [components.WorkflowExecutionStatus](../../models/components/workflowexecutionstatus.md)      | :heavy_check_mark:                                                                            | The status of the workflow execution                                                          |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The start time of the workflow execution                                                      |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The end time of the workflow execution, if available                                          |
| `totalDurationMs`                                                                             | *number*                                                                                      | :heavy_minus_sign:                                                                            | The total duration of the trace in milliseconds                                               |
| `result`                                                                                      | *any*                                                                                         | :heavy_check_mark:                                                                            | The result of the workflow execution, if available                                            |
| `events`                                                                                      | *components.WorkflowExecutionTraceEventsResponseEvent*[]                                      | :heavy_minus_sign:                                                                            | The events of the workflow execution                                                          |