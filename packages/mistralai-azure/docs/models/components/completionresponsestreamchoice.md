# CompletionResponseStreamChoice

## Example Usage

```typescript
import { CompletionResponseStreamChoice } from "@mistralai/mistralai-azure/models/components";

let value: CompletionResponseStreamChoice = {
  index: 891773,
  delta: {},
  finishReason: "tool_calls",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `index`                                                            | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `delta`                                                            | [components.DeltaMessage](../../models/components/deltamessage.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `finishReason`                                                     | [components.FinishReason](../../models/components/finishreason.md) | :heavy_check_mark:                                                 | N/A                                                                |