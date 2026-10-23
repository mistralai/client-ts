# ResponsesFunctionToolCall

## Example Usage

```typescript
import { ResponsesFunctionToolCall } from "@mistralai/mistralai/models/components";

let value: ResponsesFunctionToolCall = {
  arguments: "<value>",
  callId: "<id>",
  name: "<value>",
  type: "function_call",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `arguments`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `callId`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | *"function_call"*                                                                                        | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `caller`                                                                                                 | *components.ResponsesFunctionToolCallCaller*                                                             | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `namespace`                                                                                              | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `status`                                                                                                 | [components.ResponsesFunctionToolCallStatus](../../models/components/responsesfunctiontoolcallstatus.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `additionalProperties`                                                                                   | Record<string, *any*>                                                                                    | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |