# UpdateJudgeV1ObservabilityJudgesJudgeIdPutRequest

## Example Usage

```typescript
import { UpdateJudgeV1ObservabilityJudgesJudgeIdPutRequest } from "@mistralai/mistralai/models/operations";

let value: UpdateJudgeV1ObservabilityJudgesJudgeIdPutRequest = {
  judgeId: "380ce33d-4f3c-482f-a8df-8cd9d091f67a",
  putJudgeInSchema: {
    name: "<value>",
    description: "awkwardly always formamide only annually terribly",
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
    tools: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `judgeId`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `putJudgeInSchema`                                                         | [components.PutJudgeInSchema](../../models/components/putjudgeinschema.md) | :heavy_check_mark:                                                         | N/A                                                                        |