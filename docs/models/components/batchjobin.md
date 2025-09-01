# BatchJobIn

## Example Usage

```typescript
import { BatchJobIn } from "@mistralai/mistralai/models/components";

let value: BatchJobIn = {
  inputFiles: [
    "7f16333a-2967-488a-ae48-e45fd08dcc6a",
  ],
  endpoint: "/v1/embeddings",
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