# AgentsApiV1ConversationsAppendStreamRequest

## Example Usage

```typescript
import { AgentsApiV1ConversationsAppendStreamRequest } from "@mistralai/mistralai/models/operations";

let value: AgentsApiV1ConversationsAppendStreamRequest = {
  conversationId: "<id>",
  appendConversationRequest: {
    completionArgs: {
      responseFormat: {
        type: "text",
      },
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `conversationId`                                                                             | *string*                                                                                     | :heavy_check_mark:                                                                           | ID of the conversation to which we append entries.                                           |
| `appendConversationRequest`                                                                  | [components.AppendConversationRequest](../../models/components/appendconversationrequest.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |