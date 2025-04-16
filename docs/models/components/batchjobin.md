# BatchJobIn

## Example Usage

```typescript
import { BatchJobIn } from "@mistralai/mistralai/models/components";

let value: BatchJobIn = {
  inputFiles: [
    "e2a71b30-00eb-4ea8-94f5-76f25a197438",
  ],
  endpoint: "/v1/fim/completions",
  model: "Countach",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `inputFiles`                                                     | *string*[]                                                       | :heavy_check_mark:                                               | N/A                                                              |
| `endpoint`                                                       | [components.ApiEndpoint](../../models/components/apiendpoint.md) | :heavy_check_mark:                                               | N/A                                                              |
| `model`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `metadata`                                                       | Record<string, *string*>                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `timeoutHours`                                                   | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |