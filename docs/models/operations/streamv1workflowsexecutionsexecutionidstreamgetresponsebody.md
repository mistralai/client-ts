# StreamV1WorkflowsExecutionsExecutionIdStreamGetResponseBody

Stream of Server-Sent Events (SSE)

## Example Usage

```typescript
import { StreamV1WorkflowsExecutionsExecutionIdStreamGetResponseBody } from "@mistralai/mistralai/models/operations";

let value: StreamV1WorkflowsExecutionsExecutionIdStreamGetResponseBody = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event`                                                             | *string*                                                            | :heavy_minus_sign:                                                  | SSE event name. `error` indicates the stream failed after HTTP 200. |
| `data`                                                              | *operations.StreamV1WorkflowsExecutionsExecutionIdStreamGetData*    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `id`                                                                | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retry`                                                             | *number*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |