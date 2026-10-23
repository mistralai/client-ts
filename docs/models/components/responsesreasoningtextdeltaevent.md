# ResponsesReasoningTextDeltaEvent

## Example Usage

```typescript
import { ResponsesReasoningTextDeltaEvent } from "@mistralai/mistralai/models/components";

let value: ResponsesReasoningTextDeltaEvent = {
  contentIndex: 45372,
  delta: "<value>",
  itemId: "<id>",
  outputIndex: 38371,
  sequenceNumber: 179859,
  type: "response.reasoning_text.delta",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `contentIndex`                    | *number*                          | :heavy_check_mark:                | N/A                               |
| `delta`                           | *string*                          | :heavy_check_mark:                | N/A                               |
| `itemId`                          | *string*                          | :heavy_check_mark:                | N/A                               |
| `outputIndex`                     | *number*                          | :heavy_check_mark:                | N/A                               |
| `sequenceNumber`                  | *number*                          | :heavy_check_mark:                | N/A                               |
| `type`                            | *"response.reasoning_text.delta"* | :heavy_check_mark:                | N/A                               |
| `additionalProperties`            | Record<string, *any*>             | :heavy_minus_sign:                | N/A                               |