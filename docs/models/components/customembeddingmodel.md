# CustomEmbeddingModel

## Example Usage

```typescript
import { CustomEmbeddingModel } from "@mistralai/mistralai/models/components";

let value: CustomEmbeddingModel = {
  type: "custom",
  name: "<value>",
  dimensions: 871712,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | *"custom"*                                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `dtype`                                                                | [components.VectorDType](../../models/components/vectordtype.md)       | :heavy_minus_sign:                                                     | N/A                                                                    |
| `dimensions`                                                           | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `distanceMetric`                                                       | [components.DistanceMetric](../../models/components/distancemetric.md) | :heavy_minus_sign:                                                     | N/A                                                                    |