# ResponsesContentPartDoneEvent

## Example Usage

```typescript
import { ResponsesContentPartDoneEvent } from "@mistralai/mistralai/models/components";

let value: ResponsesContentPartDoneEvent = {
  contentIndex: 901573,
  itemId: "<id>",
  outputIndex: 275583,
  part: {
    text: "<value>",
    type: "reasoning_text",
  },
  sequenceNumber: 509241,
  type: "response.content_part.done",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `contentIndex`                                 | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `itemId`                                       | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `outputIndex`                                  | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `part`                                         | *components.ResponsesContentPartDoneEventPart* | :heavy_check_mark:                             | N/A                                            |
| `sequenceNumber`                               | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `type`                                         | *"response.content_part.done"*                 | :heavy_check_mark:                             | N/A                                            |
| `additionalProperties`                         | Record<string, *any*>                          | :heavy_minus_sign:                             | N/A                                            |