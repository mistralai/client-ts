# GetWorkflowEventsV1WorkflowsEventsListGetRequest

## Example Usage

```typescript
import { GetWorkflowEventsV1WorkflowsEventsListGetRequest } from "@mistralai/mistralai/models/operations";

let value: GetWorkflowEventsV1WorkflowsEventsListGetRequest = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `rootWorkflowExecId`                                                   | *string*                                                               | :heavy_minus_sign:                                                     | Execution ID of the root workflow that initiated this execution chain. |
| `workflowExecId`                                                       | *string*                                                               | :heavy_minus_sign:                                                     | Execution ID of the workflow that emitted this event.                  |
| `workflowRunId`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | Run ID of the workflow that emitted this event.                        |
| `limit`                                                                | *number*                                                               | :heavy_minus_sign:                                                     | Maximum number of events to return.                                    |
| `cursor`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | Cursor for pagination.                                                 |