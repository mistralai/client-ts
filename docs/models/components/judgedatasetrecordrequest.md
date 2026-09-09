# JudgeDatasetRecordRequest

## Example Usage

```typescript
import { JudgeDatasetRecordRequest } from "@mistralai/mistralai/models/components";

let value: JudgeDatasetRecordRequest = {
  judgeDefinition: {
    name: "<value>",
    description: "collaboration nor yum loosely beyond glow hover entrench",
    modelName: "<value>",
    output: {
      type: "CLASSIFICATION",
      options: [],
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