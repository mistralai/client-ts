# JudgeClassificationOutput

## Example Usage

```typescript
import { JudgeClassificationOutput } from "@mistralai/mistralai/models/components";

let value: JudgeClassificationOutput = {
  type: "CLASSIFICATION",
  options: [
    {
      value: "<value>",
      description:
        "round whether like yet midst than inquisitively resource cafe",
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | *"CLASSIFICATION"*                                                                                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `options`                                                                                                  | [components.JudgeClassificationOutputOption](../../models/components/judgeclassificationoutputoption.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |