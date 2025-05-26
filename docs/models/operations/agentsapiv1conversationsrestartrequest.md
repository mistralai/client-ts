# AgentsApiV1ConversationsRestartRequest

## Example Usage

```typescript
import { AgentsApiV1ConversationsRestartRequest } from "@mistralai/mistralai/models/operations";

let value: AgentsApiV1ConversationsRestartRequest = {
  conversationId: "<id>",
  conversationRestartRequest: {
    inputs: [
      {
        object: "entry",
        type: "function.result",
        toolCallId: "<id>",
        result: "<value>",
      },
    ],
    fromEntryId: "<id>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `conversationId`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `conversationRestartRequest`                                                                   | [components.ConversationRestartRequest](../../models/components/conversationrestartrequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |