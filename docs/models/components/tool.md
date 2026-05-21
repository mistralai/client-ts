# Tool

## Example Usage

```typescript
import { Tool } from "@mistralai/mistralai-gcp/models/components";

let value: Tool = {
  type: "function",
  function: {
    name: "<value>",
    parameters: {
      "key": "<value>",
      "key1": "<value>",
    },
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | *"function"*                                                 | :heavy_check_mark:                                           | N/A                                                          |
| `function`                                                   | [components.FunctionT](../../models/components/functiont.md) | :heavy_check_mark:                                           | N/A                                                          |