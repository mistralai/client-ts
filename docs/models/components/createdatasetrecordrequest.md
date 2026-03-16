# CreateDatasetRecordRequest

## Example Usage

```typescript
import { CreateDatasetRecordRequest } from "@mistralai/mistralai/models/components";

let value: CreateDatasetRecordRequest = {
  payload: {
    messages: [
      {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    ],
  },
  properties: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `payload`                                                                        | [components.ConversationPayload](../../models/components/conversationpayload.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `properties`                                                                     | Record<string, *any*>                                                            | :heavy_check_mark:                                                               | N/A                                                                              |