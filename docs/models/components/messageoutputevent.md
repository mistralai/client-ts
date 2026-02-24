# MessageOutputEvent

## Example Usage

```typescript
import { MessageOutputEvent } from "@mistralai/mistralai/models/components";

let value: MessageOutputEvent = {
  id: "<id>",
  content: {
    thinking: [],
    closed: true,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"message.output.delta"*                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `outputIndex`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `contentIndex`                                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `model`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `agentId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `role`                                                                                        | *"assistant"*                                                                                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `content`                                                                                     | *components.MessageOutputEventContent*                                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |