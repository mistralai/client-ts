# GetWorkflowExecutionTraceEventsRequest

## Example Usage

```typescript
import { GetWorkflowExecutionTraceEventsRequest } from "@mistralai/mistralai/models/operations";

let value: GetWorkflowExecutionTraceEventsRequest = {
  executionId: "<id>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `executionId`           | *string*                | :heavy_check_mark:      | N/A                     |
| `mergeSameIdEvents`     | *boolean*               | :heavy_minus_sign:      | N/A                     |
| `includeInternalEvents` | *boolean*               | :heavy_minus_sign:      | N/A                     |