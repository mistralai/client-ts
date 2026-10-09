# DeleteDocumentsV1RagManagedIndexesIndexNameDocumentsDeleteRequest

## Example Usage

```typescript
import { DeleteDocumentsV1RagManagedIndexesIndexNameDocumentsDeleteRequest } from "@mistralai/mistralai/models/operations";

let value: DeleteDocumentsV1RagManagedIndexesIndexNameDocumentsDeleteRequest = {
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