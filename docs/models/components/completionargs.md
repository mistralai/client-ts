# CompletionArgs

White-listed arguments from the completion API

## Example Usage

```typescript
import { CompletionArgs } from "@mistralai/mistralai/models/components";

let value: CompletionArgs = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `stop`                                                                 | *components.CompletionArgsStop*                                        | :heavy_minus_sign:                                                     | N/A                                                                    |
| `presencePenalty`                                                      | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `frequencyPenalty`                                                     | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `temperature`                                                          | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `topP`                                                                 | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `maxTokens`                                                            | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `randomSeed`                                                           | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `prediction`                                                           | [components.Prediction](../../models/components/prediction.md)         | :heavy_minus_sign:                                                     | N/A                                                                    |
| `responseFormat`                                                       | [components.ResponseFormat](../../models/components/responseformat.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `toolChoice`                                                           | [components.ToolChoiceEnum](../../models/components/toolchoiceenum.md) | :heavy_minus_sign:                                                     | N/A                                                                    |