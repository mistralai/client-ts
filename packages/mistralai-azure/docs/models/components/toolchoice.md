# ToolChoice

ToolChoice is either a ToolChoiceEnum or a ToolChoice

## Example Usage

```typescript
import { ToolChoice } from "@mistralai/mistralai-azure/models/components";

let value: ToolChoice = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | [components.ToolTypes](../../models/components/tooltypes.md)                 | :heavy_minus_sign:                                                           | N/A                                                                          |
| `function`                                                                   | [components.FunctionName](../../models/components/functionname.md)           | :heavy_check_mark:                                                           | this restriction of `Function` is used to select a specific function to call |