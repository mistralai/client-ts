# AgentsApiV1ConversationsRestartStreamRequest

## Example Usage

```typescript
import { AgentsApiV1ConversationsRestartStreamRequest } from "@mistralai/mistralai/models/operations";

let value: AgentsApiV1ConversationsRestartStreamRequest = {
  conversationId: "<id>",
  conversationRestartStreamRequest: {
    inputs: [
      {
        object: "entry",
        type: "message.input",
        role: "assistant",
        content: [
          {
            text: "<value>",
            type: "text",
          },
        ],
      },
    ],
    fromEntryId: "<id>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                           | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `conversationRestartStreamRequest`                                                                         | [components.ConversationRestartStreamRequest](../../models/components/conversationrestartstreamrequest.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |