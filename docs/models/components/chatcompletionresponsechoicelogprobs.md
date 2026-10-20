# ChatCompletionResponseChoiceLogprobs

## Example Usage

```typescript
import { ChatCompletionResponseChoiceLogprobs } from "@mistralai/mistralai/models/components";

let value: ChatCompletionResponseChoiceLogprobs = {
  content: [
    {
      token: "<value>",
      logprob: 6167.49,
      bytes: [],
      tokenId: 182314,
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `content`                                                                                                                  | [components.ChatCompletionResponseTokenLogprobsTopK](../../models/components/chatcompletionresponsetokenlogprobstopk.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |