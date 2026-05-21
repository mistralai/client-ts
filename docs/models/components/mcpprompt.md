# MCPPrompt

## Example Usage

```typescript
import { MCPPrompt } from "@mistralai/mistralai/models/components";

let value: MCPPrompt = {
  name: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `title`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `arguments`                                                              | [components.PromptArgument](../../models/components/promptargument.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |
| `icons`                                                                  | [components.MCPServerIcon](../../models/components/mcpservericon.md)[]   | :heavy_minus_sign:                                                       | N/A                                                                      |
| `meta`                                                                   | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |
| `additionalProperties`                                                   | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |