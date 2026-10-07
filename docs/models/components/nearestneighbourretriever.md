# NearestNeighbourRetriever

Retrieve document chunks whose embeddings are closest to the query's.

## Example Usage

```typescript
import { NearestNeighbourRetriever } from "@mistralai/mistralai/models/components";

let value: NearestNeighbourRetriever = {
  type: "nearest_neighbour",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `topK`                                       | *number*                                     | :heavy_minus_sign:                           | N/A                                          |
| `type`                                       | *"nearest_neighbour"*                        | :heavy_check_mark:                           | N/A                                          |
| `query`                                      | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `queryEmbedding`                             | *number*[]                                   | :heavy_minus_sign:                           | N/A                                          |
| `field`                                      | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `filter`                                     | *components.NearestNeighbourRetrieverFilter* | :heavy_minus_sign:                           | N/A                                          |
| `maxCandidates`                              | *number*                                     | :heavy_minus_sign:                           | N/A                                          |