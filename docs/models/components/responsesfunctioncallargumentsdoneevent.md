# ResponsesFunctionCallArgumentsDoneEvent

## Example Usage

```typescript
import { ResponsesFunctionCallArgumentsDoneEvent } from "@mistralai/mistralai/models/components";

let value: ResponsesFunctionCallArgumentsDoneEvent = {
  arguments: "<value>",
  itemId: "<id>",
  name: "<value>",
  outputIndex: 735260,
  sequenceNumber: 73998,
  type: "response.function_call_arguments.done",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `arguments`                               | *string*                                  | :heavy_check_mark:                        | N/A                                       |
| `itemId`                                  | *string*                                  | :heavy_check_mark:                        | N/A                                       |
| `name`                                    | *string*                                  | :heavy_check_mark:                        | N/A                                       |
| `outputIndex`                             | *number*                                  | :heavy_check_mark:                        | N/A                                       |
| `sequenceNumber`                          | *number*                                  | :heavy_check_mark:                        | N/A                                       |
| `type`                                    | *"response.function_call_arguments.done"* | :heavy_check_mark:                        | N/A                                       |
| `additionalProperties`                    | Record<string, *any*>                     | :heavy_minus_sign:                        | N/A                                       |