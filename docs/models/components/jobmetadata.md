# JobMetadata

## Example Usage

```typescript
import { JobMetadata } from "@mistralai/mistralai/models/components";

let value: JobMetadata = {
  expectedDurationSeconds: 220,
  cost: 10,
  costCurrency: "EUR",
  trainTokensPerStep: 131072,
  trainTokens: 1310720,
  dataTokens: 305375,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `expectedDurationSeconds`                                                   | *number*                                                                    | :heavy_minus_sign:                                                          | The approximated time (in seconds) for the fine-tuning process to complete. | 220                                                                         |
| `cost`                                                                      | *number*                                                                    | :heavy_minus_sign:                                                          | The cost of the fine-tuning job.                                            | 10                                                                          |
| `costCurrency`                                                              | *string*                                                                    | :heavy_minus_sign:                                                          | The currency used for the fine-tuning job cost.                             | EUR                                                                         |
| `trainTokensPerStep`                                                        | *number*                                                                    | :heavy_minus_sign:                                                          | The number of tokens consumed by one training step.                         | 131072                                                                      |
| `trainTokens`                                                               | *number*                                                                    | :heavy_minus_sign:                                                          | The total number of tokens used during the fine-tuning process.             | 1310720                                                                     |
| `dataTokens`                                                                | *number*                                                                    | :heavy_minus_sign:                                                          | The total number of tokens in the training dataset.                         | 305375                                                                      |
| `estimatedStartTime`                                                        | *number*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |                                                                             |