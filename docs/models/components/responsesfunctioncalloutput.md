# ResponsesFunctionCallOutput

## Example Usage

```typescript
import { ResponsesFunctionCallOutput } from "@mistralai/mistralai/models/components";

let value: ResponsesFunctionCallOutput = {
  callId: "<id>",
  output: [],
  type: "function_call_output",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `callId`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `output`                                                                                                     | *components.ResponsesFunctionCallOutputOutput2*                                                              | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `type`                                                                                                       | *"function_call_output"*                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `caller`                                                                                                     | *components.ResponsesFunctionCallOutputCaller*                                                               | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `status`                                                                                                     | [components.ResponsesFunctionCallOutputStatus](../../models/components/responsesfunctioncalloutputstatus.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `additionalProperties`                                                                                       | Record<string, *any*>                                                                                        | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |