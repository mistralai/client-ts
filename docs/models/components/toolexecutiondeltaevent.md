# ToolExecutionDeltaEvent

## Example Usage

```typescript
import { ToolExecutionDeltaEvent } from "@mistralai/mistralai/models/components";

let value: ToolExecutionDeltaEvent = {
  id: "<id>",
  name: "code_interpreter",
  arguments: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | [components.ToolExecutionDeltaEventType](../../models/components/toolexecutiondeltaeventtype.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `createdAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `outputIndex`                                                                                    | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `name`                                                                                           | [components.BuiltInConnectors](../../models/components/builtinconnectors.md)                     | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `arguments`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |