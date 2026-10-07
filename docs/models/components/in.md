# In

Field is one of a set of values.

## Example Usage

```typescript
import { In } from "@mistralai/mistralai/models/components";

let value: In = {
  type: "in",
  field: "<value>",
  values: [
    new Date("2025-01-20T03:48:06.281Z"),
  ],
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `type`                 | *"in"*                 | :heavy_check_mark:     | N/A                    |
| `field`                | *string*               | :heavy_check_mark:     | N/A                    |
| `values`               | *components.InValue*[] | :heavy_check_mark:     | N/A                    |