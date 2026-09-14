# CreateIndexV1RagManagedIndexesPostResponse

## Example Usage

```typescript
import { CreateIndexV1RagManagedIndexesPostResponse } from "@mistralai/mistralai/models/operations";

let value: CreateIndexV1RagManagedIndexesPostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
  },
  result: {
    id: "1a78699f-0057-4e4d-9ee0-7e7fa2733a0e",
    name: "<value>",
    status: "provisioning",
    schema: {},
    config: {
      embedding: {
        type: "custom",
        name: "<value>",
        dimensions: 172781,
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