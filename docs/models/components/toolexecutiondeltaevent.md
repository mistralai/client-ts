# ToolExecutionDeltaEvent

## Example Usage

```typescript
import { ToolExecutionDeltaEvent } from "@mistralai/mistralai/models/components";

let value: ToolExecutionDeltaEvent = {
  id: "<id>",
  name: "web_search_premium",
  arguments: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"tool.execution.delta"*                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `outputIndex`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *components.ToolExecutionDeltaEventName*                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `arguments`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |