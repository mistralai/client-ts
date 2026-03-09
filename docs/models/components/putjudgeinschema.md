# PutJudgeInSchema

## Example Usage

```typescript
import { PutJudgeInSchema } from "@mistralai/mistralai/models/components";

let value: PutJudgeInSchema = {
  name: "<value>",
  description: "energetically broadly mundane",
  modelName: "<value>",
  output: {
    options: [
      {
        value: "<value>",
        description: "without indeed because",
      },
    ],
  },
  instructions: "<value>",
  tools: [],
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `name`                              | *string*                            | :heavy_check_mark:                  | N/A                                 |
| `description`                       | *string*                            | :heavy_check_mark:                  | N/A                                 |
| `modelName`                         | *string*                            | :heavy_check_mark:                  | N/A                                 |
| `output`                            | *components.PutJudgeInSchemaOutput* | :heavy_check_mark:                  | N/A                                 |
| `instructions`                      | *string*                            | :heavy_check_mark:                  | N/A                                 |
| `tools`                             | *string*[]                          | :heavy_check_mark:                  | N/A                                 |