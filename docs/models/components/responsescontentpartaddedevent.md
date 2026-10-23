# ResponsesContentPartAddedEvent

## Example Usage

```typescript
import { ResponsesContentPartAddedEvent } from "@mistralai/mistralai/models/components";

let value: ResponsesContentPartAddedEvent = {
  contentIndex: 812409,
  itemId: "<id>",
  outputIndex: 364166,
  part: {
    text: "<value>",
    type: "reasoning_text",
  },
  sequenceNumber: 33578,
  type: "response.content_part.added",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `contentIndex`                                  | *number*                                        | :heavy_check_mark:                              | N/A                                             |
| `itemId`                                        | *string*                                        | :heavy_check_mark:                              | N/A                                             |
| `outputIndex`                                   | *number*                                        | :heavy_check_mark:                              | N/A                                             |
| `part`                                          | *components.ResponsesContentPartAddedEventPart* | :heavy_check_mark:                              | N/A                                             |
| `sequenceNumber`                                | *number*                                        | :heavy_check_mark:                              | N/A                                             |
| `type`                                          | *"response.content_part.added"*                 | :heavy_check_mark:                              | N/A                                             |
| `additionalProperties`                          | Record<string, *any*>                           | :heavy_minus_sign:                              | N/A                                             |