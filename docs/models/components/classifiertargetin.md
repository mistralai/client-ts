# ClassifierTargetIn

## Example Usage

```typescript
import { ClassifierTargetIn } from "@mistralai/mistralai/models/components";

let value: ClassifierTargetIn = {
  name: "<value>",
  labels: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `labels`                                                                                   | *string*[]                                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `weight`                                                                                   | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `lossFunction`                                                                             | [components.FTClassifierLossFunction](../../models/components/ftclassifierlossfunction.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |