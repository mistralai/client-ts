# WorkflowEventBatchResponse

Response model for batch workflow event reception.

## Example Usage

```typescript
import { WorkflowEventBatchResponse } from "@mistralai/mistralai/models/components";

let value: WorkflowEventBatchResponse = {
  status: "error",
  eventsReceived: 48429,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                   | [components.WorkflowEventBatchResponseStatus](../../models/components/workfloweventbatchresponsestatus.md) | :heavy_check_mark:                                                                                         | Status of the batch event reception                                                                        |
| `message`                                                                                                  | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Optional message                                                                                           |
| `eventsReceived`                                                                                           | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Number of events successfully received                                                                     |