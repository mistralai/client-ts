# LlmJudgeReference

The scorer selected to build a judge pipeline configuration.

## Example Usage

```typescript
import { LlmJudgeReference } from "@mistralai/mistralai/models/components";

let value: LlmJudgeReference = {
  slug: "<value>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `slug`                              | *string*                            | :heavy_check_mark:                  | N/A                                 |
| `mapping`                           | Record<string, *string*>            | :heavy_minus_sign:                  | N/A                                 |
| `sampling`                          | *components.PipelineConfigSampling* | :heavy_minus_sign:                  | N/A                                 |