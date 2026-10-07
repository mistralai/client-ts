# MistralEmbeddingModel

## Example Usage

```typescript
import { MistralEmbeddingModel } from "@mistralai/mistralai/models/components";

let value: MistralEmbeddingModel = {
  type: "mistral",
  name: "<value>",
  dimensions: 112503,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | *"mistral"*                                                            | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `dtype`                                                                | [components.VectorDType](../../models/components/vectordtype.md)       | :heavy_minus_sign:                                                     | N/A                                                                    |
| `dimensions`                                                           | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `distanceMetric`                                                       | [components.DistanceMetric](../../models/components/distancemetric.md) | :heavy_minus_sign:                                                     | N/A                                                                    |