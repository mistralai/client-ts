# WorkflowExecutionTraceOTelResponse

## Example Usage

```typescript
import { WorkflowExecutionTraceOTelResponse } from "@mistralai/mistralai/models/components";

let value: WorkflowExecutionTraceOTelResponse = {
  workflowName: "<value>",
  executionId: "<id>",
  rootExecutionId: "<id>",
  status: "TERMINATED",
  startTime: new Date("2024-09-24T11:44:01.282Z"),
  endTime: new Date("2025-12-13T03:23:18.150Z"),
  result: "<value>",
  dataSource: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `workflowName`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the workflow                                                                      |
| `executionId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the workflow execution                                                              |
| `parentExecutionId`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The parent execution ID of the workflow execution                                             |
| `rootExecutionId`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | The root execution ID of the workflow execution                                               |
| `status`                                                                                      | [components.WorkflowExecutionStatus](../../models/components/workflowexecutionstatus.md)      | :heavy_check_mark:                                                                            | The status of the workflow execution                                                          |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The start time of the workflow execution                                                      |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The end time of the workflow execution, if available                                          |
| `totalDurationMs`                                                                             | *number*                                                                                      | :heavy_minus_sign:                                                                            | The total duration of the trace in milliseconds                                               |
| `result`                                                                                      | *any*                                                                                         | :heavy_check_mark:                                                                            | The result of the workflow execution, if available                                            |
| `dataSource`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The data source of the trace                                                                  |
| `otelTraceId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the trace                                                                           |
| `otelTraceData`                                                                               | [components.TempoGetTraceResponse](../../models/components/tempogettraceresponse.md)          | :heavy_minus_sign:                                                                            | The raw OpenTelemetry trace data                                                              |