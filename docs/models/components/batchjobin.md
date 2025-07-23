# BatchJobIn

## Example Usage

```typescript
import { BatchJobIn } from "@mistralai/mistralai/models/components";

let value: BatchJobIn = {
  inputFiles: [
    "6b41eb9c-d7ee-4498-98f4-fe7dca53ad0a",
  ],
  endpoint: "/v1/chat/moderations",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `inputFiles`                                                     | *string*[]                                                       | :heavy_check_mark:                                               | N/A                                                              |
| `endpoint`                                                       | [components.ApiEndpoint](../../models/components/apiendpoint.md) | :heavy_check_mark:                                               | N/A                                                              |
| `model`                                                          | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `agentId`                                                        | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `metadata`                                                       | Record<string, *string*>                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `timeoutHours`                                                   | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |