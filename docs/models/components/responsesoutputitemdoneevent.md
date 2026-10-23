# ResponsesOutputItemDoneEvent

## Example Usage

```typescript
import { ResponsesOutputItemDoneEvent } from "@mistralai/mistralai/models/components";

let value: ResponsesOutputItemDoneEvent = {
  item: {
    id: "<id>",
    content: [
      {
        annotations: [],
        text: "<value>",
        type: "output_text",
      },
    ],
    role: "assistant",
    status: "in_progress",
    type: "message",
    phase: null,
  },
  outputIndex: 125329,
  sequenceNumber: 145204,
  type: "response.output_item.done",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `item`                                        | *components.ResponsesOutputItemDoneEventItem* | :heavy_check_mark:                            | N/A                                           |
| `outputIndex`                                 | *number*                                      | :heavy_check_mark:                            | N/A                                           |
| `sequenceNumber`                              | *number*                                      | :heavy_check_mark:                            | N/A                                           |
| `type`                                        | *"response.output_item.done"*                 | :heavy_check_mark:                            | N/A                                           |
| `additionalProperties`                        | Record<string, *any*>                         | :heavy_minus_sign:                            | N/A                                           |