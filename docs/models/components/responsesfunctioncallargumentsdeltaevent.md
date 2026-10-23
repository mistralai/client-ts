# ResponsesFunctionCallArgumentsDeltaEvent

## Example Usage

```typescript
import { ResponsesFunctionCallArgumentsDeltaEvent } from "@mistralai/mistralai/models/components";

let value: ResponsesFunctionCallArgumentsDeltaEvent = {
  delta: "<value>",
  itemId: "<id>",
  outputIndex: 77967,
  sequenceNumber: 864644,
  type: "response.function_call_arguments.delta",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `delta`                                    | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `itemId`                                   | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `outputIndex`                              | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `sequenceNumber`                           | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `type`                                     | *"response.function_call_arguments.delta"* | :heavy_check_mark:                         | N/A                                        |
| `additionalProperties`                     | Record<string, *any*>                      | :heavy_minus_sign:                         | N/A                                        |