# FieldSortInput

## Example Usage

```typescript
import { FieldSortInput } from "@mistralai/mistralai/models/components";

let value: FieldSortInput = {
  kind: "field",
  field: "created_at",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `kind`                                                                   | *"field"*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `field`                                                                  | [components.RecordSortField](../../models/components/recordsortfield.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `direction`                                                              | [components.SortDirection](../../models/components/sortdirection.md)     | :heavy_minus_sign:                                                       | N/A                                                                      |