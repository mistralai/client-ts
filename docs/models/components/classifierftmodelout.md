# ClassifierFTModelOut

## Example Usage

```typescript
import { ClassifierFTModelOut } from "@mistralai/mistralai/models/components";

let value: ClassifierFTModelOut = {
  id: "<id>",
  created: 111228,
  ownedBy: "<value>",
  workspaceId: "<id>",
  root: "<value>",
  rootVersion: "<value>",
  archived: true,
  capabilities: {},
  job: "b1e6e408-c7c5-4c7c-9c65-efca1702bf4b",
  classifierTargets: [],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `object`                                                                                             | [components.ClassifierFTModelOutObject](../../models/components/classifierftmodeloutobject.md)       | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `created`                                                                                            | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `ownedBy`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `workspaceId`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `root`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `rootVersion`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `archived`                                                                                           | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `name`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `capabilities`                                                                                       | [components.FTModelCapabilitiesOut](../../models/components/ftmodelcapabilitiesout.md)               | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `maxContextLength`                                                                                   | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `aliases`                                                                                            | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `job`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `classifierTargets`                                                                                  | [components.ClassifierTargetOut](../../models/components/classifiertargetout.md)[]                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `modelType`                                                                                          | [components.ClassifierFTModelOutModelType](../../models/components/classifierftmodeloutmodeltype.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |