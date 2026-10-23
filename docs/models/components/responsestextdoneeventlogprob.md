# ResponsesTextDoneEventLogprob

## Example Usage

```typescript
import { ResponsesTextDoneEventLogprob } from "@mistralai/mistralai/models/components";

let value: ResponsesTextDoneEventLogprob = {
  token: "<value>",
  logprob: 7893.13,
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                    | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `logprob`                                                                                                                  | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `topLogprobs`                                                                                                              | [components.ResponsesTextDoneEventLogprobTopLogprob](../../models/components/responsestextdoneeventlogprobtoplogprob.md)[] | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `additionalProperties`                                                                                                     | Record<string, *any*>                                                                                                      | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |