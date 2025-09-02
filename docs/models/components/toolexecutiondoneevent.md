# ToolExecutionDoneEvent

## Example Usage

```typescript
import { ToolExecutionDoneEvent } from "@mistralai/mistralai/models/components";

let value: ToolExecutionDoneEvent = {
  id: "<id>",
  name: "code_interpreter",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | [components.ToolExecutionDoneEventType](../../models/components/toolexecutiondoneeventtype.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `outputIndex`                                                                                  | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `name`                                                                                         | [components.BuiltInConnectors](../../models/components/builtinconnectors.md)                   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `info`                                                                                         | Record<string, *any*>                                                                          | :heavy_minus_sign:                                                                             | N/A                                                                                            |