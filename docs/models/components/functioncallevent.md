# FunctionCallEvent

## Example Usage

```typescript
import { FunctionCallEvent } from "@mistralai/mistralai/models/components";

let value: FunctionCallEvent = {
  id: "<id>",
  name: "<value>",
  toolCallId: "<id>",
  arguments: "<value>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | *"function.call.delta"*                                                                                          | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `createdAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `outputIndex`                                                                                                    | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `toolCallId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `arguments`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `confirmationStatus`                                                                                             | [components.FunctionCallEventConfirmationStatus](../../models/components/functioncalleventconfirmationstatus.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |