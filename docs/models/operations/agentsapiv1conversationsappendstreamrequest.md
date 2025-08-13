# AgentsApiV1ConversationsAppendStreamRequest

## Example Usage

```typescript
import { AgentsApiV1ConversationsAppendStreamRequest } from "@mistralai/mistralai/models/operations";

let value: AgentsApiV1ConversationsAppendStreamRequest = {
  conversationId: "<id>",
  conversationAppendStreamRequest: {
    inputs: "<value>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | ID of the conversation to which we append entries.                                                       |
| `conversationAppendStreamRequest`                                                                        | [components.ConversationAppendStreamRequest](../../models/components/conversationappendstreamrequest.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |