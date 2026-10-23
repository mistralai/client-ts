# ListManagedIndexesResponse

Paginated list of managed indexes.

## Example Usage

```typescript
import { ListManagedIndexesResponse } from "@mistralai/mistralai/models/components";

let value: ListManagedIndexesResponse = {
  data: [
    {
      id: "1e007bef-4200-424d-b6c4-ed57b59212f9",
      name: "<value>",
      creatorId: "<id>",
      status: "provisioning",
      schema: {},
      config: {
        embedding: {
          type: "mistral",
          name: "<value>",
          dimensions: 382999,
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