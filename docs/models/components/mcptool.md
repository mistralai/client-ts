# MCPTool

## Example Usage

```typescript
import { MCPTool } from "@mistralai/mistralai/models/components";

let value: MCPTool = {
  name: "<value>",
  inputSchema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `title`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `inputSchema`                                                            | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | N/A                                                                      |
| `outputSchema`                                                           | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |
| `icons`                                                                  | [components.MCPServerIcon](../../models/components/mcpservericon.md)[]   | :heavy_minus_sign:                                                       | N/A                                                                      |
| `annotations`                                                            | [components.ToolAnnotations](../../models/components/toolannotations.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `meta`                                                                   | [components.MCPToolMeta](../../models/components/mcptoolmeta.md)         | :heavy_minus_sign:                                                       | N/A                                                                      |
| `execution`                                                              | [components.ToolExecution](../../models/components/toolexecution.md)     | :heavy_minus_sign:                                                       | N/A                                                                      |
| `additionalProperties`                                                   | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |