# CustomTaskStartedAttributesRequest

Attributes for custom task started events.

## Example Usage

```typescript
import { CustomTaskStartedAttributesRequest } from "@mistralai/mistralai/models/components";

let value: CustomTaskStartedAttributesRequest = {
  customTaskId: "<id>",
  customTaskType: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `customTaskId`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | Unique identifier for the custom task within the workflow.                                     |
| `customTaskType`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | The type/category of the custom task (e.g., 'llm_call', 'api_request').                        |
| `payload`                                                                                      | [components.JSONPayloadRequest](../../models/components/jsonpayloadrequest.md)                 | :heavy_minus_sign:                                                                             | A payload containing arbitrary JSON data.<br/><br/>Used for complete state snapshots or final results. |