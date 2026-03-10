# JudgeDatasetRecordRequest

## Example Usage

```typescript
import { JudgeDatasetRecordRequest } from "@mistralai/mistralai/models/components";

let value: JudgeDatasetRecordRequest = {
  judgeDefinition: {
    name: "<value>",
    description: "wherever ha than",
    modelName: "<value>",
    output: {
      type: "REGRESSION",
      min: 0,
      minDescription: "<value>",
      max: 1,
      maxDescription: "<value>",
    },
    instructions: "<value>",
    tools: [],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `judgeDefinition`                                                                | [components.CreateJudgeRequest](../../models/components/create-judge-request.md) | :heavy_check_mark:                                                               | N/A                                                                              |