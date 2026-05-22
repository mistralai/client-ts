# MCPResource

## Example Usage

```typescript
import { MCPResource } from "@mistralai/mistralai/models/components";

let value: MCPResource = {
  name: "<value>",
  uri: "https://weighty-trench.biz",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `title`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `uri`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `mimeType`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `size`                                                                 | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `icons`                                                                | [components.MCPServerIcon](../../models/components/mcpservericon.md)[] | :heavy_minus_sign:                                                     | N/A                                                                    |
| `annotations`                                                          | [components.Annotations](../../models/components/annotations.md)       | :heavy_minus_sign:                                                     | N/A                                                                    |
| `meta`                                                                 | Record<string, *any*>                                                  | :heavy_minus_sign:                                                     | N/A                                                                    |
| `additionalProperties`                                                 | Record<string, *any*>                                                  | :heavy_minus_sign:                                                     | N/A                                                                    |