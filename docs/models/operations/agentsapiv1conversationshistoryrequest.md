# AgentsApiV1ConversationsHistoryRequest

## Example Usage

```typescript
import { AgentsApiV1ConversationsHistoryRequest } from "@mistralai/mistralai/models/operations";

let value: AgentsApiV1ConversationsHistoryRequest = {
  conversationId: "<id>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `conversationId`                                           | *string*                                                   | :heavy_check_mark:                                         | ID of the conversation from which we are fetching entries. |