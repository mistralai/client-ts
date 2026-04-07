# ActivityTaskStartedAttributesResponse

Attributes for activity task started events.

## Example Usage

```typescript
import { ActivityTaskStartedAttributesResponse } from "@mistralai/mistralai/models/components";

let value: ActivityTaskStartedAttributesResponse = {
  taskId: "<id>",
  activityName: "<value>",
  input: {
    value: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `taskId`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | Unique identifier for the activity task within the workflow.                                   |
| `activityName`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | The registered name of the activity being executed.                                            |
| `input`                                                                                        | [components.JSONPayloadResponse](../../models/components/jsonpayloadresponse.md)               | :heavy_check_mark:                                                                             | A payload containing arbitrary JSON data.<br/><br/>Used for complete state snapshots or final results. |