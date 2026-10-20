# ChatCompletionResponseTokenLogprobsTopK

## Example Usage

```typescript
import { ChatCompletionResponseTokenLogprobsTopK } from "@mistralai/mistralai/models/components";

let value: ChatCompletionResponseTokenLogprobsTopK = {
  token: "<value>",
  logprob: 8740.12,
  bytes: [],
  tokenId: 846265,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `token`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `logprob`                                                                                                          | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `bytes`                                                                                                            | *number*[]                                                                                                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `tokenId`                                                                                                          | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `topLogprobs`                                                                                                      | [components.ChatCompletionResponseTokenLogprobs](../../models/components/chatcompletionresponsetokenlogprobs.md)[] | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |