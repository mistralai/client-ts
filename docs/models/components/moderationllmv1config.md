# ModerationLlmv1Config

## Example Usage

```typescript
import { ModerationLlmv1Config } from "@mistralai/mistralai/models/components";

let value: ModerationLlmv1Config = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `modelName`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Override model name. Should be omitted in general.                                                           |
| `customCategoryThresholds`                                                                                   | [components.ModerationLlmv1CategoryThresholds](../../models/components/moderationllmv1categorythresholds.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `ignoreOtherCategories`                                                                                      | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | If true, only evaluate categories in custom_category_thresholds; others are ignored.                         |
| `action`                                                                                                     | [components.ModerationLLMAction](../../models/components/moderationllmaction.md)                             | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |