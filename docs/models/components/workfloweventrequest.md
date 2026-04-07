# WorkflowEventRequest

Request model containing a workflow event.

## Example Usage

```typescript
import { WorkflowEventRequest } from "@mistralai/mistralai/models/components";

let value: WorkflowEventRequest = {
  event: {
    eventId: "<id>",
    rootWorkflowExecId: "<id>",
    workflowExecId: "<id>",
    workflowRunId: "<id>",
    workflowName: "<value>",
    attributes: {
      taskId: "<id>",
    },
  },
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `event`                                | *components.WorkflowEventRequestEvent* | :heavy_check_mark:                     | The workflow event payload.            |