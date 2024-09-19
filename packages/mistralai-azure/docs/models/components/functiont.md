# FunctionT

## Example Usage

```typescript
import { FunctionT } from "@mistralai/mistralai-azure/models/components";

let value: FunctionT = {
  name: "<value>",
  parameters: {
    "key": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |
| `description`         | *string*              | :heavy_minus_sign:    | N/A                   |
| `parameters`          | Record<string, *any*> | :heavy_check_mark:    | N/A                   |