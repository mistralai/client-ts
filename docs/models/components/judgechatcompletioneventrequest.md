# JudgeChatCompletionEventRequest

## Example Usage

```typescript
import { JudgeChatCompletionEventRequest } from "@mistralai/mistralai/models/components";

let value: JudgeChatCompletionEventRequest = {
  createJudgeRequest: {
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
| `createJudgeRequest`                                                           | [components.CreateJudgeRequest](../../models/components/createjudgerequest.md) | :heavy_check_mark:                                                             | N/A                                                                            |