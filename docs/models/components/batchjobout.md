# BatchJobOut

## Example Usage

```typescript
import { BatchJobOut } from "@mistralai/mistralai/models/components";

let value: BatchJobOut = {
  id: "<id>",
  inputFiles: [
    "b4380365-749d-4182-9b69-2275fcbe189f",
  ],
  endpoint: "<value>",
  model: "Camry",
  errors: [
    {
      message: "<value>",
    },
  ],
  status: "QUEUED",
  createdAt: 16429,
  totalRequests: 929530,
  completedRequests: 669917,
  succeededRequests: 785153,
  failedRequests: 281730,
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
| `model`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
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