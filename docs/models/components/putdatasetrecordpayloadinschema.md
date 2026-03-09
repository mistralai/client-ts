# PutDatasetRecordPayloadInSchema

## Example Usage

```typescript
import { PutDatasetRecordPayloadInSchema } from "@mistralai/mistralai/models/components";

let value: PutDatasetRecordPayloadInSchema = {
  payload: {
    messages: [
      {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `payload`                                                                        | [components.ConversationPayload](../../models/components/conversationpayload.md) | :heavy_check_mark:                                                               | N/A                                                                              |