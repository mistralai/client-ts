# UsageInfo

## Example Usage

```typescript
import { UsageInfo } from "@mistralai/mistralai/models/components";

let value: UsageInfo = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `promptTokens`                                                             | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `completionTokens`                                                         | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `totalTokens`                                                              | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `promptAudioSeconds`                                                       | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `serviceTier`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | The service tier at which the request was processed: standard or priority. |
| `additionalProperties`                                                     | Record<string, *any*>                                                      | :heavy_minus_sign:                                                         | N/A                                                                        |