# FilterCondition

## Example Usage

```typescript
import { FilterCondition } from "@mistralai/mistralai/models/components";

let value: FilterCondition = {
  field: "<value>",
  op: "gte",
  value: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `field`                                        | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `op`                                           | [components.Op](../../models/components/op.md) | :heavy_check_mark:                             | N/A                                            |
| `value`                                        | *any*                                          | :heavy_check_mark:                             | N/A                                            |