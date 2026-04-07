# CustomTaskFailedAttributes

Attributes for custom task failed events.

## Example Usage

```typescript
import { CustomTaskFailedAttributes } from "@mistralai/mistralai/models/components";

let value: CustomTaskFailedAttributes = {
  customTaskId: "<id>",
  customTaskType: "<value>",
  failure: {
    message: "<value>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `customTaskId`                                                          | *string*                                                                | :heavy_check_mark:                                                      | Unique identifier for the custom task within the workflow.              |
| `customTaskType`                                                        | *string*                                                                | :heavy_check_mark:                                                      | The type/category of the custom task (e.g., 'llm_call', 'api_request'). |
| `failure`                                                               | [components.Failure](../../models/components/failure.md)                | :heavy_check_mark:                                                      | Represents an error or exception that occurred during execution.        |