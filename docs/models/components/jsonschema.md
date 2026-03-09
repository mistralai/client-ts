# JsonSchema

## Example Usage

```typescript
import { JsonSchema } from "@mistralai/mistralai/models/components";

let value: JsonSchema = {
  name: "<value>",
  schemaDefinition: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |
| `description`         | *string*              | :heavy_minus_sign:    | N/A                   |
| `schemaDefinition`    | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `strict`              | *boolean*             | :heavy_minus_sign:    | N/A                   |