# FunctionRequest

## Example Usage

```typescript
import { FunctionRequest } from "@mistralai/mistralai/models/components";

let value: FunctionRequest = {
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
| `strict`              | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `parameters`          | Record<string, *any*> | :heavy_check_mark:    | N/A                   |