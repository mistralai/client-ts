# BatchJobOut

## Example Usage

```typescript
import { BatchJobOut } from "@mistralai/mistralai/models/components";

let value: BatchJobOut = {
  id: "<id>",
  inputFiles: [
    "c5537fe1-0e83-4aa1-b403-23a012544cf8",
  ],
  endpoint: "<value>",
  errors: [
    {
      message: "<value>",
    },
  ],
  status: "SUCCESS",
  createdAt: 106682,
  totalRequests: 408774,
  completedRequests: 296128,
  succeededRequests: 493407,
  failedRequests: 657044,
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