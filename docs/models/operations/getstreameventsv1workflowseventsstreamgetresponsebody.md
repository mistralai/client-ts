# GetStreamEventsV1WorkflowsEventsStreamGetResponseBody

Stream of Server-Sent Events (SSE)

## Example Usage

```typescript
import { GetStreamEventsV1WorkflowsEventsStreamGetResponseBody } from "@mistralai/mistralai/models/operations";

let value: GetStreamEventsV1WorkflowsEventsStreamGetResponseBody = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event`                                                             | *string*                                                            | :heavy_minus_sign:                                                  | SSE event name. `error` indicates the stream failed after HTTP 200. |
| `data`                                                              | *operations.GetStreamEventsV1WorkflowsEventsStreamGetData*          | :heavy_minus_sign:                                                  | N/A                                                                 |
| `id`                                                                | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retry`                                                             | *number*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |