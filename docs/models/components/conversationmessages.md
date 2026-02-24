# ConversationMessages

Similar to the conversation history but only keep the messages

## Example Usage

```typescript
import { ConversationMessages } from "@mistralai/mistralai/models/components";

let value: ConversationMessages = {
  conversationId: "<id>",
  messages: [],
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `object`                      | *"conversation.messages"*     | :heavy_minus_sign:            | N/A                           |
| `conversationId`              | *string*                      | :heavy_check_mark:            | N/A                           |
| `messages`                    | *components.MessageEntries*[] | :heavy_check_mark:            | N/A                           |