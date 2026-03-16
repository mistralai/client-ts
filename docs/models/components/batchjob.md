# BatchJob

## Example Usage

```typescript
import { BatchJob } from "@mistralai/mistralai/models/components";

let value: BatchJob = {
  id: "<id>",
  inputFiles: [
    "183af087-edf7-4360-a68e-69ea6c6c1f99",
    "ba9cbc1b-2688-4c58-a6a6-098ac3917386",
    "bcda27c0-bcf5-45c5-a6e8-b51b01f81cf7",
  ],
  endpoint: "<value>",
  errors: [],
  status: "SUCCESS",
  createdAt: 290399,
  totalRequests: 821370,
  completedRequests: 562714,
  succeededRequests: 290589,
  failedRequests: 548093,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `object`                                                               | *"batch"*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `inputFiles`                                                           | *string*[]                                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `metadata`                                                             | Record<string, *any*>                                                  | :heavy_minus_sign:                                                     | N/A                                                                    |
| `endpoint`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `model`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `agentId`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `outputFile`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `errorFile`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `errors`                                                               | [components.BatchError](../../models/components/batcherror.md)[]       | :heavy_check_mark:                                                     | N/A                                                                    |
| `outputs`                                                              | Record<string, *any*>[]                                                | :heavy_minus_sign:                                                     | N/A                                                                    |
| `status`                                                               | [components.BatchJobStatus](../../models/components/batchjobstatus.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `createdAt`                                                            | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `totalRequests`                                                        | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `completedRequests`                                                    | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `succeededRequests`                                                    | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `failedRequests`                                                       | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `startedAt`                                                            | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `completedAt`                                                          | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |