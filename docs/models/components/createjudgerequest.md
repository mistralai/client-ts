# CreateJudgeRequest

## Example Usage

```typescript
import { CreateJudgeRequest } from "@mistralai/mistralai/models/components";

let value: CreateJudgeRequest = {
  name: "<value>",
  description: "duh how over",
  modelName: "<value>",
  output: {
    type: "REGRESSION",
    min: 0,
    minDescription: "<value>",
    max: 1,
    maxDescription: "<value>",
  },
  instructions: "<value>",
  tools: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `name`                                | *string*                              | :heavy_check_mark:                    | N/A                                   |
| `description`                         | *string*                              | :heavy_check_mark:                    | N/A                                   |
| `modelName`                           | *string*                              | :heavy_check_mark:                    | N/A                                   |
| `output`                              | *components.CreateJudgeRequestOutput* | :heavy_check_mark:                    | N/A                                   |
| `instructions`                        | *string*                              | :heavy_check_mark:                    | N/A                                   |
| `tools`                               | *string*[]                            | :heavy_check_mark:                    | N/A                                   |