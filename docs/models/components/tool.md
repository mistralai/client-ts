# Tool

## Example Usage

```typescript
import { Tool } from "@mistralai/mistralai/models/components";

let value: Tool = {
  function: {
    name: "<value>",
    parameters: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | [components.ToolTypes](../../models/components/tooltypes.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `function`                                                   | [components.FunctionT](../../models/components/functiont.md) | :heavy_check_mark:                                           | N/A                                                          |