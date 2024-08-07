# MetricOut

Metrics at the step number during the fine-tuning job. Use these metrics to assess if the training is going smoothly (loss should decrease, token accuracy should increase).


## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `trainLoss`              | *number*                 | :heavy_minus_sign:       | N/A                      |
| `validLoss`              | *number*                 | :heavy_minus_sign:       | N/A                      |
| `validMeanTokenAccuracy` | *number*                 | :heavy_minus_sign:       | N/A                      |