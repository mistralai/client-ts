# ConversationMessages

Similar to the conversation history but only keep the messages

## Example Usage

```typescript
import { ConversationMessages } from "@mistralai/mistralai/models/components";

let value: ConversationMessages = {
  conversationId: "<id>",
  messages: [
    {
      object: "entry",
      type: "message.output",
      role: "assistant",
      content: [
        {
          type: "tool_file",
          tool: "code_interpreter",
          fileId: "<id>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `object`                                                                                       | [components.ConversationMessagesObject](../../models/components/conversationmessagesobject.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `conversationId`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `messages`                                                                                     | *components.MessageEntries*[]                                                                  | :heavy_check_mark:                                                                             | N/A                                                                                            |