# SearchRequest

## Example Usage

```typescript
import { SearchRequest } from "@mistralai/mistralai/models/components";

let value: SearchRequest = {
  retriever: {
    topK: 20,
    type: "rrf",
    retrievers: [
      {
        topK: 20,
        type: "nearest_neighbour",
      },
    ],
    rankConstant: 60,
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `retriever`                         | *components.SearchRequestRetriever* | :heavy_check_mark:                  | N/A                                 |