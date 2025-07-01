# AgentsApiV1ConversationsRestartStreamRequest

## Example Usage

```typescript
import { AgentsApiV1ConversationsRestartStreamRequest } from "@mistralai/mistralai/models/operations";

let value: AgentsApiV1ConversationsRestartStreamRequest = {
  conversationId: "<id>",
  conversationRestartStreamRequest: {
    inputs: "<value>",
    fromEntryId: "<id>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                           | *string*                                                                                                   | :heavy_check_mark:                                                                                         | ID of the original conversation which is being restarted.                                                  |
| `conversationRestartStreamRequest`                                                                         | [components.ConversationRestartStreamRequest](../../models/components/conversationrestartstreamrequest.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |