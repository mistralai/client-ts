# UpdateDatasetRecordPayloadRequest

## Example Usage

```typescript
import { UpdateDatasetRecordPayloadRequest } from "@mistralai/mistralai/models/components";

let value: UpdateDatasetRecordPayloadRequest = {
  payload: {
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
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `payload`                                                                        | [components.ConversationPayload](../../models/components/conversationpayload.md) | :heavy_check_mark:                                                               | N/A                                                                              |