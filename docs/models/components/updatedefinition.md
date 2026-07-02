# UpdateDefinition

## Example Usage

```typescript
import { UpdateDefinition } from "@mistralai/mistralai/models/components";

let value: UpdateDefinition = {
  name: "<value>",
  inputSchema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `name`                                   | *string*                                 | :heavy_check_mark:                       | Name of the update                       |
| `description`                            | *string*                                 | :heavy_minus_sign:                       | Description of the update                |
| `inputSchema`                            | Record<string, *any*>                    | :heavy_check_mark:                       | Input JSON schema of the update's model  |
| `outputSchema`                           | Record<string, *any*>                    | :heavy_minus_sign:                       | Output JSON schema of the update's model |