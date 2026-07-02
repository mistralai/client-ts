# CreateDatasetRecordRequest

## Example Usage

```typescript
import { CreateDatasetRecordRequest } from "@mistralai/mistralai/models/components";

let value: CreateDatasetRecordRequest = {
  conversationPayload: {
    messages: [
      {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      {
        "key": "<value>",
      },
      {},
    ],
  },
  properties: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `conversationPayload`                                                            | [components.ConversationPayload](../../models/components/conversationpayload.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `properties`                                                                     | Record<string, *any*>                                                            | :heavy_check_mark:                                                               | N/A                                                                              |