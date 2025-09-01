# AgentsApiV1ConversationsRestartRequest

## Example Usage

```typescript
import { AgentsApiV1ConversationsRestartRequest } from "@mistralai/mistralai/models/operations";

let value: AgentsApiV1ConversationsRestartRequest = {
  conversationId: "<id>",
  conversationRestartRequest: {
    inputs: [],
    fromEntryId: "<id>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `conversationId`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of the original conversation which is being restarted.                                      |
| `conversationRestartRequest`                                                                   | [components.ConversationRestartRequest](../../models/components/conversationrestartrequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |