# JudgeRegressionOutput

## Example Usage

```typescript
import { JudgeRegressionOutput } from "@mistralai/mistralai/models/components";

let value: JudgeRegressionOutput = {
  type: "REGRESSION",
  minDescription: "<value>",
  maxDescription: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"REGRESSION"*     | :heavy_check_mark: | N/A                |
| `min`              | *number*           | :heavy_minus_sign: | N/A                |
| `minDescription`   | *string*           | :heavy_check_mark: | N/A                |
| `max`              | *number*           | :heavy_minus_sign: | N/A                |
| `maxDescription`   | *string*           | :heavy_check_mark: | N/A                |