# StreamWorkflowExecutionLogsResponseBody

Stream of Server-Sent Events (SSE): `log` events carry an ExecutionLogRecord; `error` events carry a StreamError payload.

## Example Usage

```typescript
import { StreamWorkflowExecutionLogsResponseBody } from "@mistralai/mistralai/models/operations";

let value: StreamWorkflowExecutionLogsResponseBody = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `event`                                                                                                    | [operations.StreamWorkflowExecutionLogsEvent](../../models/operations/streamworkflowexecutionlogsevent.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | *operations.StreamWorkflowExecutionLogsData*                                                               | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |