# DeploymentLogRecord

## Example Usage

```typescript
import { DeploymentLogRecord } from "@mistralai/mistralai/models/components";

let value: DeploymentLogRecord = {
  timestamp: new Date("2024-04-20T04:38:02.873Z"),
  traceId: "<id>",
  spanId: "<id>",
  severityText: "<value>",
  body: "<value>",
  logAttributes: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `traceId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `spanId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `severityText`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `body`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `logAttributes`                                                                               | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |