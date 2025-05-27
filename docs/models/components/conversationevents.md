# ConversationEvents

## Example Usage

```typescript
import { ConversationEvents } from "@mistralai/mistralai/models/components";

let value: ConversationEvents = {
  event: "message.output.delta",
  data: {
    type: "conversation.response.done",
    usage: {
      promptTokens: 0,
      completionTokens: 0,
      totalTokens: 0,
    },
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `event`                                                         | [components.SSETypes](../../models/components/ssetypes.md)      | :heavy_check_mark:                                              | Server side events sent when streaming a conversation response. |
| `data`                                                          | *components.ConversationEventsData*                             | :heavy_check_mark:                                              | N/A                                                             |