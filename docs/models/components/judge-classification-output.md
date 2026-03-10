# JudgeClassificationOutput

## Example Usage

```typescript
import { JudgeClassificationOutput } from "@mistralai/mistralai/models/components";

let value: JudgeClassificationOutput = {
  type: "CLASSIFICATION",
  options: [
    {
      value: "<value>",
      description: "chow limp censor though tennis",
    },
  ],
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                        | *"CLASSIFICATION"*                                                                                            | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `options`                                                                                                     | [components.JudgeClassificationOutputOption](../../models/components/judge-classification-output-option.md)[] | :heavy_check_mark:                                                                                            | N/A                                                                                                           |