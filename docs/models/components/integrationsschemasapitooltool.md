# IntegrationsSchemasApiToolTool

## Example Usage

```typescript
import { IntegrationsSchemasApiToolTool } from "@mistralai/mistralai/models/components";

let value: IntegrationsSchemasApiToolTool = {
  id: "<id>",
  name: "<value>",
  description: "boiling vista why down whoa",
  executionConfig: {
    type: "<value>",
  },
  visibility: "private",
  createdAt: new Date("2026-05-02T03:33:29.549Z"),
  modifiedAt: new Date("2024-02-04T07:21:02.125Z"),
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `description`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `systemPrompt`                                                                                                     | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `locale`                                                                                                           | [components.IntegrationsSchemasTurbineToolLocale](../../models/components/integrationsschemasturbinetoollocale.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `jsonschema`                                                                                                       | Record<string, *any*>                                                                                              | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `executionConfig`                                                                                                  | [components.ExecutionConfig](../../models/components/executionconfig.md)                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `visibility`                                                                                                       | [components.ResourceVisibility](../../models/components/resourcevisibility.md)                                     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `createdAt`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `modifiedAt`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `active`                                                                                                           | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |