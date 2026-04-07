# ActivityTaskCompletedAttributesRequest

Attributes for activity task completed events.

## Example Usage

```typescript
import { ActivityTaskCompletedAttributesRequest } from "@mistralai/mistralai/models/components";

let value: ActivityTaskCompletedAttributesRequest = {
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
| `result`                                                                                       | [components.JSONPayloadRequest](../../models/components/jsonpayloadrequest.md)                 | :heavy_check_mark:                                                                             | A payload containing arbitrary JSON data.<br/><br/>Used for complete state snapshots or final results. |