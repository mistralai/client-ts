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
      },
    };
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `datasetRecordId`                                                                               | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `judgeDatasetRecordRequest`                                                                     | [components.JudgeDatasetRecordRequest](../../models/components/judge-dataset-record-request.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |