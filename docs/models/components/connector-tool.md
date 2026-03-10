# ConnectorTool

## Example Usage

```typescript
import { ConnectorTool } from "@mistralai/mistralai/models/components";

let value: ConnectorTool = {
  id: "<id>",
  name: "<value>",
  description:
    "naturally usher immaculate deck yet wicked dampen gadzooks yuck stay",
  executionConfig: {
    type: "<value>",
  },
  visibility: "shared_org",
  createdAt: new Date("2026-01-04T16:47:49.652Z"),
  modifiedAt: new Date("2026-10-23T13:08:04.213Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `systemPrompt`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `locale`                                                                                      | [components.ConnectorToolLocale](../../models/components/connector-tool-locale.md)            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `jsonschema`                                                                                  | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `executionConfig`                                                                             | [components.ExecutionConfig](../../models/components/execution-config.md)                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `visibility`                                                                                  | [components.ResourceVisibility](../../models/components/resource-visibility.md)               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `active`                                                                                      | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |