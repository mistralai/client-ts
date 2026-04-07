# ActivityTaskCompletedAttributesResponse

Attributes for activity task completed events.

## Example Usage

```typescript
import { ActivityTaskCompletedAttributesResponse } from "@mistralai/mistralai/models/components";

let value: ActivityTaskCompletedAttributesResponse = {
  taskId: "<id>",
  activityName: "<value>",
  result: {
    value: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `taskId`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | Unique identifier for the activity task within the workflow.                                   |
| `activityName`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | The registered name of the activity being executed.                                            |
| `result`                                                                                       | [components.JSONPayloadResponse](../../models/components/jsonpayloadresponse.md)               | :heavy_check_mark:                                                                             | A payload containing arbitrary JSON data.<br/><br/>Used for complete state snapshots or final results. |