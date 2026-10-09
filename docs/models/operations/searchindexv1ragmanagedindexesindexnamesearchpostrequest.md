# SearchIndexV1RagManagedIndexesIndexNameSearchPostRequest

## Example Usage

```typescript
import { SearchIndexV1RagManagedIndexesIndexNameSearchPostRequest } from "@mistralai/mistralai/models/operations";

let value: SearchIndexV1RagManagedIndexesIndexNameSearchPostRequest = {
  indexName: "<value>",
  searchRequest: {
    retriever: {
      topK: 20,
      type: "rrf",
      retrievers: [],
      rankConstant: 60,
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `indexName`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `searchRequest`                                                      | [components.SearchRequest](../../models/components/searchrequest.md) | :heavy_check_mark:                                                   | N/A                                                                  |