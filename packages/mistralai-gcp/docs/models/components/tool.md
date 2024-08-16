# Tool

## Example Usage

```typescript
import { Tool } from "@mistralai/mistralai-gcp/models/components";

let value: Tool = {
    function: {
        name: "<value>",
        parameters: {
            key: "<value>",
        },
    },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `type`                                                               | [components.ToolToolTypes](../../models/components/tooltooltypes.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `function`                                                           | [components.FunctionT](../../models/components/functiont.md)         | :heavy_check_mark:                                                   | N/A                                                                  |