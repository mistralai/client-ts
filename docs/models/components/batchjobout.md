# BatchJobOut

## Example Usage

```typescript
import { BatchJobOut } from "@mistralai/mistralai/models/components";

let value: BatchJobOut = {
  id: "<id>",
  inputFiles: [
    "788a5152-85ff-499f-8ec5-537fe10e83aa",
  ],
  endpoint: "<value>",
  errors: [
    {
      message: "<value>",
    },
  ],
  status: "RUNNING",
  createdAt: 60078,
  totalRequests: 209860,
  completedRequests: 132305,
  succeededRequests: 193236,
  failedRequests: 685467,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `object`                                                                     | [components.BatchJobOutObject](../../models/components/batchjoboutobject.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `inputFiles`                                                                 | *string*[]                                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `metadata`                                                                   | Record<string, *any*>                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `endpoint`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `model`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `agentId`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `outputFile`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `errorFile`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `errors`                                                                     | [components.BatchError](../../models/components/batcherror.md)[]             | :heavy_check_mark:                                                           | N/A                                                                          |
| `status`                                                                     | [components.BatchJobStatus](../../models/components/batchjobstatus.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `createdAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `totalRequests`                                                              | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `completedRequests`                                                          | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `succeededRequests`                                                          | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `failedRequests`                                                             | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `startedAt`                                                                  | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `completedAt`                                                                | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |