# ToolReferenceChunk

## Example Usage

```typescript
import { ToolReferenceChunk } from "@mistralai/mistralai/models/components";

let value: ToolReferenceChunk = {
  tool: "image_generation",
  title: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [components.ToolReferenceChunkType](../../models/components/toolreferencechunktype.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `tool`                                                                                 | [components.BuiltInConnectors](../../models/components/builtinconnectors.md)           | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `title`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `url`                                                                                  | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `favicon`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |