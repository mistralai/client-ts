# BatchJobIn

## Example Usage

```typescript
import { BatchJobIn } from "@mistralai/mistralai/models/components";

let value: BatchJobIn = {
  inputFiles: [
    "12544cf8-f616-447a-97ee-b726b41eb9cd",
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