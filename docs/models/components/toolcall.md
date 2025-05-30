# ToolCall

## Example Usage

```typescript
import { ToolCall } from "@mistralai/mistralai/models/components";

let value: ToolCall = {
  function: {
    name: "<value>",
    arguments: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `type`                                                             | [components.ToolTypes](../../models/components/tooltypes.md)       | :heavy_minus_sign:                                                 | N/A                                                                |
| `function`                                                         | [components.FunctionCall](../../models/components/functioncall.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `index`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |