# UpdateJudgeRequest

## Example Usage

```typescript
import { UpdateJudgeRequest } from "@mistralai/mistralai/models/components";

let value: UpdateJudgeRequest = {
  name: "<value>",
  description: "minus anti yowza powerfully puritan",
  modelName: "<value>",
  output: {
    type: "CLASSIFICATION",
    options: [],
  },
  instructions: "<value>",
  tools: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `name`                                | *string*                              | :heavy_check_mark:                    | N/A                                   |
| `description`                         | *string*                              | :heavy_check_mark:                    | N/A                                   |
| `modelName`                           | *string*                              | :heavy_check_mark:                    | N/A                                   |
| `output`                              | *components.UpdateJudgeRequestOutput* | :heavy_check_mark:                    | N/A                                   |
| `instructions`                        | *string*                              | :heavy_check_mark:                    | N/A                                   |
| `tools`                               | *string*[]                            | :heavy_check_mark:                    | N/A                                   |