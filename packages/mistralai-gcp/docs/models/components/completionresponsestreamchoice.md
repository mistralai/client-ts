# CompletionResponseStreamChoice

## Example Usage

```typescript
import { CompletionResponseStreamChoice } from "@mistralai/mistralai-gcp/models/components";

let value: CompletionResponseStreamChoice = {
  index: 847252,
  delta: {},
  finishReason: "length",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `index`                                                            | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `delta`                                                            | [components.DeltaMessage](../../models/components/deltamessage.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `finishReason`                                                     | [components.FinishReason](../../models/components/finishreason.md) | :heavy_check_mark:                                                 | N/A                                                                |