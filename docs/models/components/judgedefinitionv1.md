# JudgeDefinitionV1

The fully materialized LLM judge behavior stored in a pipeline config.

## Example Usage

```typescript
import { JudgeDefinitionV1 } from "@mistralai/mistralai/models/components";

let value: JudgeDefinitionV1 = {
  model: "Land Cruiser",
  prompt: "<value>",
  resultSpec: {
    type: "numeric",
    min: 323.73,
    max: 2924.57,
  },
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `model`                           | *string*                          | :heavy_check_mark:                | N/A                               |
| `prompt`                          | *string*                          | :heavy_check_mark:                | N/A                               |
| `temperature`                     | *number*                          | :heavy_minus_sign:                | N/A                               |
| `topP`                            | *number*                          | :heavy_minus_sign:                | N/A                               |
| `maxTokens`                       | *number*                          | :heavy_minus_sign:                | N/A                               |
| `randomSeed`                      | *number*                          | :heavy_minus_sign:                | N/A                               |
| `resultSpec`                      | *components.EvaluationResultSpec* | :heavy_check_mark:                | N/A                               |
| `mapping`                         | Record<string, *string*>          | :heavy_minus_sign:                | N/A                               |
| `useCache`                        | *boolean*                         | :heavy_minus_sign:                | N/A                               |