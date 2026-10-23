# ResponsesTextDeltaEvent

## Example Usage

```typescript
import { ResponsesTextDeltaEvent } from "@mistralai/mistralai/models/components";

let value: ResponsesTextDeltaEvent = {
  contentIndex: 680638,
  delta: "<value>",
  itemId: "<id>",
  logprobs: [],
  outputIndex: 11119,
  sequenceNumber: 489189,
  type: "response.output_text.delta",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `contentIndex`                                                                                           | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `delta`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `itemId`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `logprobs`                                                                                               | [components.ResponsesTextDeltaEventLogprob](../../models/components/responsestextdeltaeventlogprob.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `outputIndex`                                                                                            | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `sequenceNumber`                                                                                         | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | *"response.output_text.delta"*                                                                           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `additionalProperties`                                                                                   | Record<string, *any*>                                                                                    | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |