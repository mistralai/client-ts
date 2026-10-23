# ResponsesTextDoneEvent

## Example Usage

```typescript
import { ResponsesTextDoneEvent } from "@mistralai/mistralai/models/components";

let value: ResponsesTextDoneEvent = {
  contentIndex: 991206,
  itemId: "<id>",
  logprobs: [
    {
      token: "<value>",
      logprob: 7030.36,
    },
  ],
  outputIndex: 594425,
  sequenceNumber: 174333,
  text: "<value>",
  type: "response.output_text.done",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `contentIndex`                                                                                         | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `itemId`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `logprobs`                                                                                             | [components.ResponsesTextDoneEventLogprob](../../models/components/responsestextdoneeventlogprob.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `outputIndex`                                                                                          | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `sequenceNumber`                                                                                       | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `text`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | *"response.output_text.done"*                                                                          | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `additionalProperties`                                                                                 | Record<string, *any*>                                                                                  | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |