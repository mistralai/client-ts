# ResponsesOutputItemAddedEvent

## Example Usage

```typescript
import { ResponsesOutputItemAddedEvent } from "@mistralai/mistralai/models/components";

let value: ResponsesOutputItemAddedEvent = {
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
  outputIndex: 570752,
  sequenceNumber: 851617,
  type: "response.output_item.added",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `item`                                         | *components.ResponsesOutputItemAddedEventItem* | :heavy_check_mark:                             | N/A                                            |
| `outputIndex`                                  | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `sequenceNumber`                               | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `type`                                         | *"response.output_item.added"*                 | :heavy_check_mark:                             | N/A                                            |
| `additionalProperties`                         | Record<string, *any*>                          | :heavy_minus_sign:                             | N/A                                            |