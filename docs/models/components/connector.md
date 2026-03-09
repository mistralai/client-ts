# Connector

## Example Usage

```typescript
import { Connector } from "@mistralai/mistralai/models/components";

let value: Connector = {
  id: "9ccb7276-cd07-461a-bc1e-8bca704da6ae",
  name: "<value>",
  description: "than qua thongs replicate interviewer since until fortunately",
  createdAt: new Date("2026-10-17T04:54:37.964Z"),
  modifiedAt: new Date("2026-01-15T22:48:57.456Z"),
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `description`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `createdAt`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `modifiedAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `server`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `authType`                                                                                               | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `tools`                                                                                                  | [components.IntegrationsSchemasApiToolTool](../../models/components/integrationsschemasapitooltool.md)[] | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |