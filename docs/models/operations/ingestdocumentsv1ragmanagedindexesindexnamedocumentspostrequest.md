# IngestDocumentsV1RagManagedIndexesIndexNameDocumentsPostRequest

## Example Usage

```typescript
import { IngestDocumentsV1RagManagedIndexesIndexNameDocumentsPostRequest } from "@mistralai/mistralai/models/operations";

let value: IngestDocumentsV1RagManagedIndexesIndexNameDocumentsPostRequest = {
  indexName: "<value>",
  ingestDocumentsRequest: {
    documents: [
      {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      {},
      {},
    ],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `indexName`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `ingestDocumentsRequest`                                                               | [components.IngestDocumentsRequest](../../models/components/ingestdocumentsrequest.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |