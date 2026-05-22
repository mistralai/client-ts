# ListFineTuningJobsResponse

## Example Usage

```typescript
import { ListFineTuningJobsResponse } from "@mistralai/mistralai/models/components";

let value: ListFineTuningJobsResponse = {
  data: [
    {
      id: "9b7b7e0d-5ce9-4b38-844b-dac005dea291",
      autoStart: false,
      model: "Accord",
      status: "CANCELLATION_REQUESTED",
      createdAt: 492349,
      modifiedAt: 432376,
      trainingFiles: [],
      jobType: "completion",
      hyperparameters: {
        learningRate: 0.0001,
      },
    },
  ],
  total: 555783,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `data`                                        | *components.ListFineTuningJobsResponseData*[] | :heavy_minus_sign:                            | N/A                                           |
| `object`                                      | *"list"*                                      | :heavy_minus_sign:                            | N/A                                           |
| `total`                                       | *number*                                      | :heavy_check_mark:                            | N/A                                           |