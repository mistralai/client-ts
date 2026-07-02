# UpdateJudgeV1ObservabilityJudgesJudgeIdPutRequest

## Example Usage

```typescript
import { UpdateJudgeV1ObservabilityJudgesJudgeIdPutRequest } from "@mistralai/mistralai/models/operations";

let value: UpdateJudgeV1ObservabilityJudgesJudgeIdPutRequest = {
  judgeId: "380ce33d-4f3c-482f-a8df-8cd9d091f67a",
  updateJudgeRequest: {
    name: "<value>",
    description: "awkwardly always formamide only annually terribly",
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
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `judgeId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `updateJudgeRequest`                                                           | [components.UpdateJudgeRequest](../../models/components/updatejudgerequest.md) | :heavy_check_mark:                                                             | N/A                                                                            |