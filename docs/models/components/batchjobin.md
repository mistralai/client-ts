# BatchJobIn

## Example Usage

```typescript
import { BatchJobIn } from "@mistralai/mistralai/models/components";

let value: BatchJobIn = {
  inputFiles: [
    "17fe5f3f-fcad-44d9-b052-f77a52d3831d",
  ],
  endpoint: "/v1/moderations",
  model: "Taurus",
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