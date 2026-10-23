# ResponsesOutputTextLogprob

## Example Usage

```typescript
import { ResponsesOutputTextLogprob } from "@mistralai/mistralai/models/components";

let value: ResponsesOutputTextLogprob = {
  token: "<value>",
  bytes: [
    911889,
  ],
  logprob: 694.02,
  topLogprobs: [
    {
      token: "<value>",
      bytes: [
        994678,
        136448,
        451168,
      ],
      logprob: 1216,
    },
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `bytes`                                                                                                              | *number*[]                                                                                                           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `logprob`                                                                                                            | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `topLogprobs`                                                                                                        | [components.ResponsesOutputTextLogprobTopLogprob](../../models/components/responsesoutputtextlogprobtoplogprob.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `additionalProperties`                                                                                               | Record<string, *any*>                                                                                                | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |