# ManagedIndexResponse

Wire representation of a managed index (decoupled from the domain model).

## Example Usage

```typescript
import { ManagedIndexResponse } from "@mistralai/mistralai/models/components";

let value: ManagedIndexResponse = {
  id: "7e91b986-1ab3-4cef-8e67-933435e57f14",
  name: "<value>",
  status: "failed",
  schema: {},
  config: {
    embedding: {
      type: "custom",
      name: "<value>",
      dimensions: 172781,
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.ManagedIndexStatus](../../models/components/managedindexstatus.md)                | :heavy_check_mark:                                                                            | Lifecycle of an index. Derived, not stored -- see ``managed_index_from_row``.                 |
| `statusMessage`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `schema`                                                                                      | [components.ManagedIndexFields](../../models/components/managedindexfields.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `config`                                                                                      | [components.ManagedIndexConfig](../../models/components/managedindexconfig.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |