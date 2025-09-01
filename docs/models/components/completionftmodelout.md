# CompletionFTModelOut

## Example Usage

```typescript
import { CompletionFTModelOut } from "@mistralai/mistralai/models/components";

let value: CompletionFTModelOut = {
  id: "<id>",
  created: 787475,
  ownedBy: "<value>",
  workspaceId: "<id>",
  root: "<value>",
  rootVersion: "<value>",
  archived: false,
  capabilities: {},
  job: "0f147667-0d54-46fd-934d-6a88bd2ec484",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `object`                                                                                       | [components.CompletionFTModelOutObject](../../models/components/completionftmodeloutobject.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `created`                                                                                      | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `ownedBy`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `workspaceId`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `root`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `rootVersion`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `archived`                                                                                     | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `description`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `capabilities`                                                                                 | [components.FTModelCapabilitiesOut](../../models/components/ftmodelcapabilitiesout.md)         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `maxContextLength`                                                                             | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `aliases`                                                                                      | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `job`                                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `modelType`                                                                                    | [components.ModelType](../../models/components/modeltype.md)                                   | :heavy_minus_sign:                                                                             | N/A                                                                                            |