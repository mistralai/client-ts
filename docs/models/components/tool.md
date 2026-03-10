# Tool

## Example Usage

```typescript
import { Tool } from "@mistralai/mistralai-gcp/models/components";

let value: Tool = {
  function: {
    name: "<value>",
    parameters: {},
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `type`                                                        | [components.ToolTypes](../../models/components/tool-types.md) | :heavy_minus_sign:                                            | N/A                                                           |
| `function`                                                    | [components.FunctionT](../../models/components/function-t.md) | :heavy_check_mark:                                            | N/A                                                           |