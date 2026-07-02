# UpdateIndexMetricsV1RagIndexesIndexIndexIdMetricsPutRequest

## Example Usage

```typescript
import { UpdateIndexMetricsV1RagIndexesIndexIndexIdMetricsPutRequest } from "@mistralai/mistralai/models/operations";

let value: UpdateIndexMetricsV1RagIndexesIndexIndexIdMetricsPutRequest = {
  indexId: "31587b03-c074-4d72-a558-18c100c43d4e",
  requestBody: {
    status: "online",
    documentCount: 196375,
    schemaMetrics: [],
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `indexId`                | *string*                 | :heavy_check_mark:       | N/A                      |
| `requestBody`            | *operations.MetricsData* | :heavy_check_mark:       | N/A                      |