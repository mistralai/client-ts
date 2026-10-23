# SearchIndexV1ContextSearchIndexesIndexNameSearchPostRequest

## Example Usage

```typescript
import { SearchIndexV1ContextSearchIndexesIndexNameSearchPostRequest } from "@mistralai/mistralai/models/operations";

let value: SearchIndexV1ContextSearchIndexesIndexNameSearchPostRequest = {
  indexName: "<value>",
  searchRequest: {
    retriever: {
      topK: 20,
      type: "nearest_neighbour",
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `indexName`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `searchRequest`                                                      | [components.SearchRequest](../../models/components/searchrequest.md) | :heavy_check_mark:                                                   | N/A                                                                  |