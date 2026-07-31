# UpdateIndexMetricsV1RagIndexesIndexIdMetricsPutRequest

## Example Usage

```typescript
import { UpdateIndexMetricsV1RagIndexesIndexIdMetricsPutRequest } from "@mistralai/mistralai/models/operations";

let value: UpdateIndexMetricsV1RagIndexesIndexIdMetricsPutRequest = {
  indexId: "11c5c223-6ddb-4869-805a-5b9123ad145a",
  requestBody: {
    status: "offline",
    clearMetrics: false,
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `indexId`                | *string*                 | :heavy_check_mark:       | N/A                      |
| `requestBody`            | *operations.MetricsData* | :heavy_check_mark:       | N/A                      |