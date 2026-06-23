# DeploymentLogSearchResponse

## Example Usage

```typescript
import { DeploymentLogSearchResponse } from "@mistralai/mistralai/models/components";

let value: DeploymentLogSearchResponse = {
  results: [
    {
      timestamp: new Date("2025-12-01T15:29:41.080Z"),
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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `results`                                                                          | [components.DeploymentLogRecord](../../models/components/deploymentlogrecord.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `nextCursor`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |