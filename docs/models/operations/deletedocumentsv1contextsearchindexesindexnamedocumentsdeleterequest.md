# DeleteDocumentsV1ContextSearchIndexesIndexNameDocumentsDeleteRequest

## Example Usage

```typescript
import { DeleteDocumentsV1ContextSearchIndexesIndexNameDocumentsDeleteRequest } from "@mistralai/mistralai/models/operations";

let value:
  DeleteDocumentsV1ContextSearchIndexesIndexNameDocumentsDeleteRequest = {
    indexName: "<value>",
    deleteDocumentsRequest: {
      documentIds: [
        "<value 1>",
        "<value 2>",
      ],
    },
  };
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `indexName`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `deleteDocumentsRequest`                                                               | [components.DeleteDocumentsRequest](../../models/components/deletedocumentsrequest.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |