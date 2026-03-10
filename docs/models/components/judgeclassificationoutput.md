# JudgeClassificationOutput

## Example Usage

```typescript
import { JudgeClassificationOutput } from "@mistralai/mistralai/models/components";

let value: JudgeClassificationOutput = {
  options: [
    {
      value: "<value>",
      description: "without indeed because",
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | *"CLASSIFICATION"*                                                                                         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `options`                                                                                                  | [components.JudgeClassificationOutputOption](../../models/components/judgeclassificationoutputoption.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |