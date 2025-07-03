# BatchJobOut

## Example Usage

```typescript
import { BatchJobOut } from "@mistralai/mistralai/models/components";

let value: BatchJobOut = {
  id: "<id>",
  inputFiles: [
    "fe10e83a-a140-4323-9a01-2544cf8f6164",
  ],
  endpoint: "<value>",
  model: "Malibu",
  errors: [
    {
      message: "<value>",
    },
  ],
  status: "FAILED",
  createdAt: 935161,
  totalRequests: 884765,
  completedRequests: 701978,
  succeededRequests: 489685,
  failedRequests: 131687,
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