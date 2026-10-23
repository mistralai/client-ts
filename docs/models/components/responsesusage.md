# ResponsesUsage

## Example Usage

```typescript
import { ResponsesUsage } from "@mistralai/mistralai/models/components";

let value: ResponsesUsage = {
  inputTokens: 643462,
  inputTokensDetails: {
    cacheWriteTokens: 905065,
    cachedTokens: 329907,
  },
  outputTokens: 654461,
  outputTokensDetails: {
    reasoningTokens: 850777,
  },
  totalTokens: 300614,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `inputTokens`                                                                                      | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `inputTokensDetails`                                                                               | [components.ResponsesInputTokensDetails](../../models/components/responsesinputtokensdetails.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `outputTokens`                                                                                     | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `outputTokensDetails`                                                                              | [components.ResponsesOutputTokensDetails](../../models/components/responsesoutputtokensdetails.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `totalTokens`                                                                                      | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `additionalProperties`                                                                             | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |