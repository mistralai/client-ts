# ClassifierFineTunedModel

## Example Usage

```typescript
import { ClassifierFineTunedModel } from "@mistralai/mistralai/models/components";

let value: ClassifierFineTunedModel = {
  id: "<id>",
  created: 385092,
  ownedBy: "<value>",
  workspaceId: "<id>",
  root: "<value>",
  rootVersion: "<value>",
  archived: true,
  capabilities: {},
  job: "14ce4667-ac22-41ac-8d5e-01ba39f72659",
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value 1>",
        "<value 2>",
      ],
      weight: 6616.25,
      lossFunction: "single_class",
    },
  ],
  modelType: "classifier",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `id`                                                                                              | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `object`                                                                                          | *"model"*                                                                                         | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `created`                                                                                         | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `ownedBy`                                                                                         | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `workspaceId`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `root`                                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `rootVersion`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `archived`                                                                                        | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `name`                                                                                            | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `description`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `capabilities`                                                                                    | [components.FineTunedModelCapabilities](../../models/components/fine-tuned-model-capabilities.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `maxContextLength`                                                                                | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `aliases`                                                                                         | *string*[]                                                                                        | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `job`                                                                                             | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `classifierTargets`                                                                               | [components.ClassifierTargetResult](../../models/components/classifier-target-result.md)[]        | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `modelType`                                                                                       | *"classifier"*                                                                                    | :heavy_check_mark:                                                                                | N/A                                                                                               |