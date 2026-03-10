# FunctionTool

## Example Usage

```typescript
import { FunctionTool } from "@mistralai/mistralai/models/components";

let value: FunctionTool = {
  type: "function",
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
| `type`                                                       | *"function"*                                                 | :heavy_check_mark:                                           | N/A                                                          |
| `function`                                                   | [components.FunctionT](../../models/components/functiont.md) | :heavy_check_mark:                                           | N/A                                                          |