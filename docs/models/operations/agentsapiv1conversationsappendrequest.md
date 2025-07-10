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
        role: "user",
        content: [
          {
            type: "tool_file",
            tool: "code_interpreter",
            fileId: "<id>",
          },
        ],
        prefix: false,
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