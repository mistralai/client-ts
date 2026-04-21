# WorkflowExecutionWithoutResultResponse

## Example Usage

```typescript
import { WorkflowExecutionWithoutResultResponse } from "@mistralai/mistralai/models/components";

let value: WorkflowExecutionWithoutResultResponse = {
  workflowName: "<value>",
  executionId: "<id>",
  rootExecutionId: "<id>",
  status: "COMPLETED",
  startTime: new Date("2024-10-07T20:53:48.179Z"),
  endTime: new Date("2026-12-10T00:03:21.664Z"),
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