# Equal

Field equals a scalar value.

## Example Usage

```typescript
import { Equal } from "@mistralai/mistralai/models/components";

let value: Equal = {
  type: "equal",
  field: "<value>",
  value: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `type`                  | *"equal"*               | :heavy_check_mark:      | N/A                     |
| `field`                 | *string*                | :heavy_check_mark:      | N/A                     |
| `value`                 | *components.EqualValue* | :heavy_check_mark:      | N/A                     |