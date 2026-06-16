# GetLog

## Example Usage

```typescript
import { GetLog } from "@mistralai/mistralai/models/components";

let value: GetLog = {
  customerId: "<id>",
  organizationId: "<id>",
  workspaceId: "<id>",
  userId: "<id>",
  timestamp: new Date("2024-02-09T01:30:51.669Z"),
  traceId: "<id>",
  spanId: "<id>",
  traceFlags: 379064,
  severityText: "<value>",
  severityNumber: 958727,
  serviceName: "<value>",
  body: "<value>",
  eventName: "<value>",
  resourceSchemaUrl: "https://disloyal-exasperation.info/",
  resourceAttributes: {
    "key": "<value>",
    "key1": "<value>",
  },
  scopeSchemaUrl: "https://grizzled-repeat.biz/",
  scopeName: "<value>",
  scopeVersion: "<value>",
  scopeAttributes: {},
  logAttributes: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `traceId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `spanId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `traceFlags`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `severityText`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `severityNumber`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `serviceName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `body`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `eventName`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `resourceSchemaUrl`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `resourceAttributes`                                                                          | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scopeSchemaUrl`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scopeName`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scopeVersion`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scopeAttributes`                                                                             | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `logAttributes`                                                                               | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |