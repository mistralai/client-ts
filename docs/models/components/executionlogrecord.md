# ExecutionLogRecord

## Example Usage

```typescript
import { ExecutionLogRecord } from "@mistralai/mistralai/models/components";

let value: ExecutionLogRecord = {
  timestamp: new Date("2024-09-14T23:41:22.398Z"),
  traceId: "<id>",
  spanId: "<id>",
  severityText: "<value>",
  body: "<value>",
  logAttributes: {
    "key": "<value>",
    "key1": "<value>",
  },
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