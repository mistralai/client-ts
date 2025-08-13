# ConversationHistory

Retrieve all entries in a conversation.

## Example Usage

```typescript
import { ConversationHistory } from "@mistralai/mistralai/models/components";

let value: ConversationHistory = {
  conversationId: "<id>",
  entries: [
    {
      object: "entry",
      type: "message.output",
      role: "assistant",
      content: [
        {
          documentUrl: "https://overcooked-ravioli.biz",
          type: "document_url",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `object`                                                                                     | [components.ConversationHistoryObject](../../models/components/conversationhistoryobject.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `conversationId`                                                                             | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `entries`                                                                                    | *components.Entries*[]                                                                       | :heavy_check_mark:                                                                           | N/A                                                                                          |