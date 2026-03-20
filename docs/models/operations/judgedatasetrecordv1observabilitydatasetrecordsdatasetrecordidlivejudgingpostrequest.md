# JudgeDatasetRecordV1ObservabilityDatasetRecordsDatasetRecordIdLiveJudgingPostRequest

## Example Usage

```typescript
import {
  JudgeDatasetRecordV1ObservabilityDatasetRecordsDatasetRecordIdLiveJudgingPostRequest,
} from "@mistralai/mistralai/models/operations";

let value:
  JudgeDatasetRecordV1ObservabilityDatasetRecordsDatasetRecordIdLiveJudgingPostRequest =
    {
      datasetRecordId: "5fc84a2f-83f7-404e-9fd1-6a28eecb84cd",
      judgeDatasetRecordRequest: {
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
      },
    };
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `datasetRecordId`                                                                            | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `judgeDatasetRecordRequest`                                                                  | [components.JudgeDatasetRecordRequest](../../models/components/judgedatasetrecordrequest.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |