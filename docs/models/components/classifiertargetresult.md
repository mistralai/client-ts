# ClassifierTargetResult

## Example Usage

```typescript
import { ClassifierTargetResult } from "@mistralai/mistralai/models/components";

let value: ClassifierTargetResult = {
  name: "<value>",
  labels: [],
  weight: 1314.32,
  lossFunction: "multi_class",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `labels`                                                                                   | *string*[]                                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `weight`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `lossFunction`                                                                             | [components.FTClassifierLossFunction](../../models/components/ftclassifierlossfunction.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |