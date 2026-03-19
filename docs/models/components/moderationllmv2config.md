# ModerationLlmv2Config

## Example Usage

```typescript
import { ModerationLlmv2Config } from "@mistralai/mistralai-azure/models/components";

let value: ModerationLlmv2Config = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `modelName`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Override model name. Should be omitted in general.                                                           |
| `customCategoryThresholds`                                                                                   | [components.ModerationLlmv2CategoryThresholds](../../models/components/moderationllmv2categorythresholds.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `ignoreOtherCategories`                                                                                      | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | If true, only evaluate categories in custom_category_thresholds; others are ignored.                         |
| `action`                                                                                                     | [components.ModerationLLMAction](../../models/components/moderationllmaction.md)                             | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |