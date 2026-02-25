# ToolExecutionStartedEvent

## Example Usage

```typescript
import { ToolExecutionStartedEvent } from "@mistralai/mistralai/models/components";

let value: ToolExecutionStartedEvent = {
  id: "<id>",
  name: "image_generation",
  arguments: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"tool.execution.started"*                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `outputIndex`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *components.ToolExecutionStartedEventName*                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `arguments`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |