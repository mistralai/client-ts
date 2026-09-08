# OTLPDestination

## Example Usage

```typescript
import { OTLPDestination } from "@mistralai/mistralai/models/components";

let value: OTLPDestination = {
  protocol: "<value>",
  endpoint: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `protocol`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `endpoint`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `insecure`                                                                                         | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `headers`                                                                                          | Record<string, [components.PipelineConfigHeader](../../models/components/pipelineconfigheader.md)> | :heavy_minus_sign:                                                                                 | N/A                                                                                                |