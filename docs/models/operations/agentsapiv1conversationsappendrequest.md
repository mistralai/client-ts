# AgentsApiV1ConversationsAppendRequest

## Example Usage

```typescript
import { AgentsApiV1ConversationsAppendRequest } from "@mistralai/mistralai/models/operations";

let value: AgentsApiV1ConversationsAppendRequest = {
  conversationId: "<id>",
  conversationAppendRequest: {
    inputs: [
      {
        object: "entry",
        type: "message.input",
        role: "assistant",
        content: [
          {
            imageUrl: "https://frilly-gown.info",
            type: "image_url",
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `conversationId`                                                                             | *string*                                                                                     | :heavy_check_mark:                                                                           | ID of the conversation to which we append entries.                                           |
| `conversationAppendRequest`                                                                  | [components.ConversationAppendRequest](../../models/components/conversationappendrequest.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |