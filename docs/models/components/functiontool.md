# FunctionTool

## Example Usage

```typescript
import { FunctionTool } from "@mistralai/mistralai/models/components";

let value: FunctionTool = {
  function: {
    name: "<value>",
    parameters: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [components.FunctionToolType](../../models/components/functiontooltype.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `function`                                                                 | [components.FunctionT](../../models/components/functiont.md)               | :heavy_check_mark:                                                         | N/A                                                                        |