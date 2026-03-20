# JudgeDatasetRecordRequest

## Example Usage

```typescript
import { JudgeDatasetRecordRequest } from "@mistralai/mistralai/models/components";

let value: JudgeDatasetRecordRequest = {
  judgeDefinition: {
    name: "<value>",
    description:
      "while runny briefly kaleidoscopic zowie yahoo nor nor above neglect",
    modelName: "<value>",
    output: {
      type: "CLASSIFICATION",
      options: [
        {
          value: "<value>",
          description:
            "round whether like yet midst than inquisitively resource cafe",
        },
      ],
    },
    instructions: "<value>",
    tools: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `judgeDefinition`                                                              | [components.CreateJudgeRequest](../../models/components/createjudgerequest.md) | :heavy_check_mark:                                                             | N/A                                                                            |