# CreateIndexV1ContextSearchIndexesPostResponse

## Example Usage

```typescript
import { CreateIndexV1ContextSearchIndexesPostResponse } from "@mistralai/mistralai/models/operations";

let value: CreateIndexV1ContextSearchIndexesPostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    id: "95a52ff1-7f34-4a40-bdc9-7b32c20806fc",
    name: "<value>",
    creatorId: "<id>",
    status: "failed",
    schema: {},
    config: {
      embedding: {
        type: "mistral",
        name: "<value>",
        dimensions: 382999,
      },
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.ManagedIndexResponse](../../models/components/managedindexresponse.md) | :heavy_check_mark:                                                                 | N/A                                                                                |