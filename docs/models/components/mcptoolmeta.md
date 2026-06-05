# MCPToolMeta

Typed _meta for MCP tools.

Only the 'ui' field is typed. Other fields are allowed via extra="allow".

## Example Usage

```typescript
import { MCPToolMeta } from "@mistralai/mistralai/models/components";

let value: MCPToolMeta = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `ui`                                                                     | [components.MCPUIToolMeta](../../models/components/mcpuitoolmeta.md)     | :heavy_minus_sign:                                                       | N/A                                                                      |
| `aiMistralTurbine`                                                       | [components.TurbineToolMeta](../../models/components/turbinetoolmeta.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `additionalProperties`                                                   | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |