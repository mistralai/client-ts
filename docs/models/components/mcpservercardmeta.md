# MCPServerCardMeta

Typed _meta for MCP server cards.

Only the 'turbine' field is typed. Other fields are allowed via extra="allow".

## Example Usage

```typescript
import { MCPServerCardMeta } from "@mistralai/mistralai/models/components";

let value: MCPServerCardMeta = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `aiMistralTurbine`                                               | [components.TurbineMeta](../../models/components/turbinemeta.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `additionalProperties`                                           | Record<string, *any*>                                            | :heavy_minus_sign:                                               | N/A                                                              |