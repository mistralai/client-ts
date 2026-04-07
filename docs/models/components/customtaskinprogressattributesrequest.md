# CustomTaskInProgressAttributesRequest

Attributes for custom task in-progress events with streaming updates.

## Example Usage

```typescript
import { CustomTaskInProgressAttributesRequest } from "@mistralai/mistralai/models/components";

let value: CustomTaskInProgressAttributesRequest = {
  customTaskId: "<id>",
  customTaskType: "<value>",
  payload: {
    type: "json_patch",
    value: [
      {
        path: "/usr/libexec",
        value: "<value>",
        op: "replace",
      },
    ],
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `customTaskId`                                                          | *string*                                                                | :heavy_check_mark:                                                      | Unique identifier for the custom task within the workflow.              |
| `customTaskType`                                                        | *string*                                                                | :heavy_check_mark:                                                      | The type/category of the custom task (e.g., 'llm_call', 'api_request'). |
| `payload`                                                               | *components.CustomTaskInProgressAttributesRequestPayload*               | :heavy_check_mark:                                                      | The current state or incremental update for the task.                   |