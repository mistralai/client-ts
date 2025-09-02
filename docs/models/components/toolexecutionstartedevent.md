# ToolExecutionStartedEvent

## Example Usage

```typescript
import { ToolExecutionStartedEvent } from "@mistralai/mistralai/models/components";

let value: ToolExecutionStartedEvent = {
  id: "<id>",
  name: "web_search_premium",
  arguments: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [components.ToolExecutionStartedEventType](../../models/components/toolexecutionstartedeventtype.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `outputIndex`                                                                                        | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `name`                                                                                               | [components.BuiltInConnectors](../../models/components/builtinconnectors.md)                         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `arguments`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |