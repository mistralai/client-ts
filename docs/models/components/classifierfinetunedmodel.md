# ClassifierFineTunedModel

## Example Usage

```typescript
import { ClassifierFineTunedModel } from "@mistralai/mistralai/models/components";

let value: ClassifierFineTunedModel = {
  id: "<id>",
  created: 452679,
  ownedBy: "<value>",
  workspaceId: "<id>",
  root: "<value>",
  rootVersion: "<value>",
  archived: true,
  capabilities: {},
  classifierTargets: [
    {
      name: "<value>",
      labels: [],
      weight: 9707.43,
      lossFunction: "multi_class",
    },
  ],
  modelType: "classifier",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `object`                                                                                       | *"model"*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `created`                                                                                      | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `ownedBy`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `workspaceId`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `root`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `rootVersion`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `archived`                                                                                     | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `description`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `capabilities`                                                                                 | [components.FineTunedModelCapabilities](../../models/components/finetunedmodelcapabilities.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `maxContextLength`                                                                             | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `aliases`                                                                                      | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `job`                                                                                          | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `classifierTargets`                                                                            | [components.ClassifierTargetResult](../../models/components/classifiertargetresult.md)[]       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `modelType`                                                                                    | *"classifier"*                                                                                 | :heavy_check_mark:                                                                             | N/A                                                                                            |