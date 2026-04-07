# QueryDefinition

## Example Usage

```typescript
import { QueryDefinition } from "@mistralai/mistralai/models/components";

let value: QueryDefinition = {
  name: "<value>",
  inputSchema: {},
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `name`                                  | *string*                                | :heavy_check_mark:                      | Name of the query                       |
| `description`                           | *string*                                | :heavy_minus_sign:                      | Description of the query                |
| `inputSchema`                           | Record<string, *any*>                   | :heavy_check_mark:                      | Input JSON schema of the query's model  |
| `outputSchema`                          | Record<string, *any*>                   | :heavy_minus_sign:                      | Output JSON schema of the query's model |