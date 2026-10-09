# ListIndexesV1RagManagedIndexesGetResponse

## Example Usage

```typescript
import { ListIndexesV1RagManagedIndexesGetResponse } from "@mistralai/mistralai/models/operations";

let value: ListIndexesV1RagManagedIndexesGetResponse = {
  result: {
    data: [
      {
        id: "e75d0d0d-7659-4a41-b1c4-52d1e1508385",
        name: "<value>",
        creatorId: "<id>",
        status: "deleting",
        schema: {},
        config: {
          embedding: {
            type: "custom",
            name: "<value>",
            dimensions: 172781,
          },
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListManagedIndexesResponse](../../models/components/listmanagedindexesresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |