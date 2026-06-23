# MCPUIToolMeta

UI metadata for tools that reference UI resources.

## Example Usage

```typescript
import { MCPUIToolMeta } from "@mistralai/mistralai/models/components";

let value: MCPUIToolMeta = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `resourceUri`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `visibility`                                                     | [components.Visibility](../../models/components/visibility.md)[] | :heavy_minus_sign:                                               | N/A                                                              |
| `additionalProperties`                                           | Record<string, *any*>                                            | :heavy_minus_sign:                                               | N/A                                                              |