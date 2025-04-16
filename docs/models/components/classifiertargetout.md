# ClassifierTargetOut

## Example Usage

```typescript
import { ClassifierTargetOut } from "@mistralai/mistralai/models/components";

let value: ClassifierTargetOut = {
  name: "<value>",
  labels: [
    "<value>",
  ],
  weight: 391.87,
  lossFunction: "single_class",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `labels`                                                                                   | *string*[]                                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `weight`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `lossFunction`                                                                             | [components.FTClassifierLossFunction](../../models/components/ftclassifierlossfunction.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |