# WorkflowExecutionTraceSummaryResponse

## Example Usage

```typescript
import { WorkflowExecutionTraceSummaryResponse } from "@mistralai/mistralai/models/components";

let value: WorkflowExecutionTraceSummaryResponse = {
  workflowName: "<value>",
  executionId: "<id>",
  rootExecutionId: "<id>",
  status: "FAILED",
  startTime: new Date("2026-01-29T20:25:50.862Z"),
  endTime: new Date("2024-11-29T05:15:32.668Z"),
  result: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `workflowName`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The name of the workflow                                                                                     |
| `executionId`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the workflow execution                                                                             |
| `parentExecutionId`                                                                                          | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The parent execution ID of the workflow execution                                                            |
| `rootExecutionId`                                                                                            | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The root execution ID of the workflow execution                                                              |
| `status`                                                                                                     | [components.WorkflowExecutionStatus](../../models/components/workflowexecutionstatus.md)                     | :heavy_check_mark:                                                                                           | The status of the workflow execution                                                                         |
| `startTime`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | The start time of the workflow execution                                                                     |
| `endTime`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | The end time of the workflow execution, if available                                                         |
| `totalDurationMs`                                                                                            | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | The total duration of the trace in milliseconds                                                              |
| `result`                                                                                                     | *any*                                                                                                        | :heavy_check_mark:                                                                                           | The result of the workflow execution, if available                                                           |
| `spanTree`                                                                                                   | [components.WorkflowExecutionTraceSummarySpan](../../models/components/workflowexecutiontracesummaryspan.md) | :heavy_minus_sign:                                                                                           | The root span of the trace                                                                                   |