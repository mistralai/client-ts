# ConversationEvents

## Example Usage

```typescript
import { ConversationEvents } from "@mistralai/mistralai/models/components";

let value: ConversationEvents = {
  event: "conversation.response.error",
  data: {
    type: "message.output.delta",
    outputIndex: 0,
    id: "<id>",
    contentIndex: 0,
    role: "assistant",
    content: "<value>",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `event`                                                         | [components.SSETypes](../../models/components/ssetypes.md)      | :heavy_check_mark:                                              | Server side events sent when streaming a conversation response. |
| `data`                                                          | *components.ConversationEventsData*                             | :heavy_check_mark:                                              | N/A                                                             |