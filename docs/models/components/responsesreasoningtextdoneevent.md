# ResponsesReasoningTextDoneEvent

## Example Usage

```typescript
import { ResponsesReasoningTextDoneEvent } from "@mistralai/mistralai/models/components";

let value: ResponsesReasoningTextDoneEvent = {
  contentIndex: 190692,
  itemId: "<id>",
  outputIndex: 386416,
  sequenceNumber: 216265,
  text: "<value>",
  type: "response.reasoning_text.done",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `contentIndex`                   | *number*                         | :heavy_check_mark:               | N/A                              |
| `itemId`                         | *string*                         | :heavy_check_mark:               | N/A                              |
| `outputIndex`                    | *number*                         | :heavy_check_mark:               | N/A                              |
| `sequenceNumber`                 | *number*                         | :heavy_check_mark:               | N/A                              |
| `text`                           | *string*                         | :heavy_check_mark:               | N/A                              |
| `type`                           | *"response.reasoning_text.done"* | :heavy_check_mark:               | N/A                              |
| `additionalProperties`           | Record<string, *any*>            | :heavy_minus_sign:               | N/A                              |