# ToolFileChunk

## Example Usage

```typescript
import { ToolFileChunk } from "@mistralai/mistralai/models/components";

let value: ToolFileChunk = {
  tool: "web_search_premium",
  fileId: "<id>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | [components.ToolFileChunkType](../../models/components/toolfilechunktype.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `tool`                                                                       | [components.BuiltInConnectors](../../models/components/builtinconnectors.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `fileId`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `fileName`                                                                   | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `fileType`                                                                   | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |