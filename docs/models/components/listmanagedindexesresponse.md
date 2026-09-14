# ListManagedIndexesResponse

Paginated list of managed indexes.

## Example Usage

```typescript
import { ListManagedIndexesResponse } from "@mistralai/mistralai/models/components";

let value: ListManagedIndexesResponse = {
  data: [
    {
      id: "e75d0d0d-7659-4a41-b1c4-52d1e1508385",
      name: "<value>",
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
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [components.ManagedIndexResponse](../../models/components/managedindexresponse.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `nextPageToken`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |