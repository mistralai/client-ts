# WorkflowMetrics

Complete metrics for a specific workflow.

This type combines all metric categories.

## Example Usage

```typescript
import { WorkflowMetrics } from "@mistralai/mistralai/models/components";

let value: WorkflowMetrics = {
  executionCount: {
    value: 383283,
  },
  successCount: {
    value: 710715,
  },
  errorCount: {
    value: 515821,
  },
  averageLatencyMs: {
    value: 9190.57,
  },
  latencyOverTime: {
    value: [
      [
        151354,
      ],
      [],
      [],
    ],
  },
  retryRate: {
    value: 43450,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `executionCount`                                                           | [components.ScalarMetric](../../models/components/scalarmetric.md)         | :heavy_check_mark:                                                         | Scalar metric with a single value.                                         |
| `successCount`                                                             | [components.ScalarMetric](../../models/components/scalarmetric.md)         | :heavy_check_mark:                                                         | Scalar metric with a single value.                                         |
| `errorCount`                                                               | [components.ScalarMetric](../../models/components/scalarmetric.md)         | :heavy_check_mark:                                                         | Scalar metric with a single value.                                         |
| `averageLatencyMs`                                                         | [components.ScalarMetric](../../models/components/scalarmetric.md)         | :heavy_check_mark:                                                         | Scalar metric with a single value.                                         |
| `latencyOverTime`                                                          | [components.TimeSeriesMetric](../../models/components/timeseriesmetric.md) | :heavy_check_mark:                                                         | Time-series metric with timestamp-value pairs.                             |
| `retryRate`                                                                | [components.ScalarMetric](../../models/components/scalarmetric.md)         | :heavy_check_mark:                                                         | Scalar metric with a single value.                                         |