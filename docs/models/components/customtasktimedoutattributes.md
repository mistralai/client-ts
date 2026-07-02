# CustomTaskTimedOutAttributes

Attributes for custom task timed out events.

## Example Usage

```typescript
import { CustomTaskTimedOutAttributes } from "@mistralai/mistralai/models/components";

let value: CustomTaskTimedOutAttributes = {
  customTaskId: "<id>",
  customTaskType: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `customTaskId`                                                          | *string*                                                                | :heavy_check_mark:                                                      | Unique identifier for the custom task within the workflow.              |
| `customTaskType`                                                        | *string*                                                                | :heavy_check_mark:                                                      | The type/category of the custom task (e.g., 'llm_call', 'api_request'). |
| `timeoutType`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | The type of timeout that occurred.                                      |