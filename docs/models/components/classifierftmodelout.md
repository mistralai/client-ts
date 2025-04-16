# ClassifierFTModelOut

## Example Usage

```typescript
import { ClassifierFTModelOut } from "@mistralai/mistralai/models/components";

let value: ClassifierFTModelOut = {
  id: "<id>",
  created: 437032,
  ownedBy: "<value>",
  root: "<value>",
  archived: false,
  capabilities: {},
  job: "b0aa3255-97f1-432a-b473-21a235d1d1f7",
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 6048.46,
      lossFunction: "multi_class",
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `object`                                                                                             | [components.ClassifierFTModelOutObject](../../models/components/classifierftmodeloutobject.md)       | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `created`                                                                                            | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `ownedBy`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `root`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `archived`                                                                                           | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `name`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `capabilities`                                                                                       | [components.FTModelCapabilitiesOut](../../models/components/ftmodelcapabilitiesout.md)               | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `maxContextLength`                                                                                   | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `aliases`                                                                                            | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `job`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `classifierTargets`                                                                                  | [components.ClassifierTargetOut](../../models/components/classifiertargetout.md)[]                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `modelType`                                                                                          | [components.ClassifierFTModelOutModelType](../../models/components/classifierftmodeloutmodeltype.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |