# CustomTaskCompletedAttributesResponse

Attributes for custom task completed events.

## Example Usage

```typescript
import { CustomTaskCompletedAttributesResponse } from "@mistralai/mistralai/models/components";

let value: CustomTaskCompletedAttributesResponse = {
  customTaskId: "<id>",
  customTaskType: "<value>",
  payload: {
    value: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `customTaskId`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | Unique identifier for the custom task within the workflow.                                     |
| `customTaskType`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | The type/category of the custom task (e.g., 'llm_call', 'api_request').                        |
| `payload`                                                                                      | [components.JSONPayloadResponse](../../models/components/jsonpayloadresponse.md)               | :heavy_check_mark:                                                                             | A payload containing arbitrary JSON data.<br/><br/>Used for complete state snapshots or final results. |