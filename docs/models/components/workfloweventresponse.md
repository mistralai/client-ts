# WorkflowEventResponse

Response model for workflow event reception.

## Example Usage

```typescript
import { WorkflowEventResponse } from "@mistralai/mistralai/models/components";

let value: WorkflowEventResponse = {
  status: "success",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `status`                                                                                         | [components.WorkflowEventResponseStatus](../../models/components/workfloweventresponsestatus.md) | :heavy_check_mark:                                                                               | Status of the event reception                                                                    |
| `message`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | Optional message                                                                                 |