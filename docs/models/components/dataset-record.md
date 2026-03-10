# DatasetRecord

## Example Usage

```typescript
import { DatasetRecord } from "@mistralai/mistralai/models/components";

let value: DatasetRecord = {
  id: "8b098cef-6ae9-49e1-889a-6432bcdd1d84",
  createdAt: new Date("2026-03-23T08:11:51.328Z"),
  updatedAt: new Date("2024-10-19T01:40:46.888Z"),
  deletedAt: new Date("2026-05-31T01:13:09.991Z"),
  datasetId: "036731de-fe18-457c-87fe-750b67881785",
  payload: {
    messages: [
      {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    ],
  },
  properties: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  source: "PLAYGROUND",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `datasetId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `payload`                                                                                     | [components.ConversationPayload](../../models/components/conversation-payload.md)             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `properties`                                                                                  | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `source`                                                                                      | [components.ConversationSource](../../models/components/conversation-source.md)               | :heavy_check_mark:                                                                            | N/A                                                                                           |