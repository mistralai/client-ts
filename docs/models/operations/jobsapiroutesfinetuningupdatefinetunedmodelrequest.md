# JobsApiRoutesFineTuningUpdateFineTunedModelRequest

## Example Usage

```typescript
import { JobsApiRoutesFineTuningUpdateFineTunedModelRequest } from "@mistralai/mistralai/models/operations";

let value: JobsApiRoutesFineTuningUpdateFineTunedModelRequest = {
  modelId: "ft:open-mistral-7b:587a6b29:20240514:7e773925",
  updateModelRequest: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `modelId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | The ID of the model to update.                                                 | ft:open-mistral-7b:587a6b29:20240514:7e773925                                  |
| `updateModelRequest`                                                           | [components.UpdateModelRequest](../../models/components/updatemodelrequest.md) | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |