# StreamV1WorkflowsExecutionsExecutionIdStreamGetRequest

## Example Usage

```typescript
import { StreamV1WorkflowsExecutionsExecutionIdStreamGetRequest } from "@mistralai/mistralai/models/operations";

let value: StreamV1WorkflowsExecutionsExecutionIdStreamGetRequest = {
  executionId: "<id>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `executionId`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `eventSource`                                                    | [components.EventSource](../../models/components/eventsource.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `lastEventId`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |