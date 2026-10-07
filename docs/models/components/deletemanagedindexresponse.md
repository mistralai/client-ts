# DeleteManagedIndexResponse

Wire representation returned when an index is deleted (id, name, status).

## Example Usage

```typescript
import { DeleteManagedIndexResponse } from "@mistralai/mistralai/models/components";

let value: DeleteManagedIndexResponse = {
  id: "7c791d2a-bb2f-47d1-8b54-a4615c4a7bd7",
  name: "<value>",
  status: "failed",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `status`                                                                       | [components.ManagedIndexStatus](../../models/components/managedindexstatus.md) | :heavy_check_mark:                                                             | Lifecycle of an index. Derived, not stored -- see ``managed_index_from_row``.  |