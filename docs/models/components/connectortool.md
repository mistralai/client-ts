# ConnectorTool

## Example Usage

```typescript
import { ConnectorTool } from "@mistralai/mistralai/models/components";

let value: ConnectorTool = {
  id: "<id>",
  name: "<value>",
  description: "who acidic since now lazily",
  executionConfig: {
    type: "<value>",
  },
  visibility: "shared_org",
  createdAt: new Date("2025-09-16T20:43:35.562Z"),
  modifiedAt: new Date("2026-10-28T04:35:49.624Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `systemPrompt`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `locale`                                                                                      | [components.ConnectorToolLocale](../../models/components/connectortoollocale.md)              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `jsonschema`                                                                                  | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `executionConfig`                                                                             | [components.ExecutionConfig](../../models/components/executionconfig.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `visibility`                                                                                  | [components.ResourceVisibility](../../models/components/resourcevisibility.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `active`                                                                                      | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |