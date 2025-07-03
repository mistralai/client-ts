# ConversationEvents

## Example Usage

```typescript
import { ConversationEvents } from "@mistralai/mistralai/models/components";

let value: ConversationEvents = {
  event: "agent.handoff.started",
  data: {
    type: "conversation.response.error",
    message: "<value>",
    code: 383464,
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `event`                                                         | [components.SSETypes](../../models/components/ssetypes.md)      | :heavy_check_mark:                                              | Server side events sent when streaming a conversation response. |
| `data`                                                          | *components.ConversationEventsData*                             | :heavy_check_mark:                                              | N/A                                                             |