# CompletionFineTunedModel

## Example Usage

```typescript
import { CompletionFineTunedModel } from "@mistralai/mistralai/models/components";

let value: CompletionFineTunedModel = {
  id: "<id>",
  created: 986465,
  ownedBy: "<value>",
  workspaceId: "<id>",
  root: "<value>",
  rootVersion: "<value>",
  archived: true,
  capabilities: {},
  modelType: "completion",
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
| `modelType`                                                                                    | *"completion"*                                                                                 | :heavy_check_mark:                                                                             | N/A                                                                                            |