# ExecutionLogSearchResponse

## Example Usage

```typescript
import { ExecutionLogSearchResponse } from "@mistralai/mistralai/models/components";

let value: ExecutionLogSearchResponse = {
  results: [
    {
      timestamp: new Date("2026-12-17T01:13:34.480Z"),
      traceId: "<id>",
      spanId: "<id>",
      severityText: "<value>",
      body: "<value>",
      logAttributes: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `results`                                                                        | [components.ExecutionLogRecord](../../models/components/executionlogrecord.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `nextCursor`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |