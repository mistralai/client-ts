# CustomTaskCanceledAttributes

Attributes for custom task canceled events.

## Example Usage

```typescript
import { CustomTaskCanceledAttributes } from "@mistralai/mistralai/models/components";

let value: CustomTaskCanceledAttributes = {
  customTaskId: "<id>",
  customTaskType: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `customTaskId`                                                          | *string*                                                                | :heavy_check_mark:                                                      | Unique identifier for the custom task within the workflow.              |
| `customTaskType`                                                        | *string*                                                                | :heavy_check_mark:                                                      | The type/category of the custom task (e.g., 'llm_call', 'api_request'). |
| `reason`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | Optional reason provided for the cancellation.                          |