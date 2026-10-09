# ListWorkflowEventResponse

## Example Usage

```typescript
import { ListWorkflowEventResponse } from "@mistralai/mistralai/models/components";

let value: ListWorkflowEventResponse = {
  events: [
    {
      eventId: "<id>",
      eventTimestamp: 99891,
      rootWorkflowExecId: "<id>",
      parentWorkflowExecId: "<id>",
      workflowExecId: "<id>",
      workflowRunId: "<id>",
      workflowName: "<value>",
      attributes: {
        customTaskId: "<id>",
        customTaskType: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `events`                                      | *components.ListWorkflowEventResponseEvent*[] | :heavy_check_mark:                            | List of workflow events.                      |
| `nextCursor`                                  | *string*                                      | :heavy_minus_sign:                            | Cursor for pagination.                        |