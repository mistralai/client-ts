# CreateResponseRequestResponsesFormatTextJSONSchemaConfig

## Example Usage

```typescript
import { CreateResponseRequestResponsesFormatTextJSONSchemaConfig } from "@mistralai/mistralai/models/components";

let value: CreateResponseRequestResponsesFormatTextJSONSchemaConfig = {
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  type: "json_schema",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `name`                 | *string*               | :heavy_check_mark:     | N/A                    |
| `schema`               | Record<string, *any*>  | :heavy_check_mark:     | N/A                    |
| `type`                 | *"json_schema"*        | :heavy_check_mark:     | N/A                    |
| `description`          | *string*               | :heavy_minus_sign:     | N/A                    |
| `strict`               | *boolean*              | :heavy_minus_sign:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |