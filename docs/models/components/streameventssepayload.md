# StreamEventSsePayload

## Example Usage

```typescript
import { StreamEventSsePayload } from "@mistralai/mistralai/models/components";

let value: StreamEventSsePayload = {
  stream: "<value>",
  data: {
    eventId: "<id>",
    eventTimestamp: 739782,
    rootWorkflowExecId: "<id>",
    parentWorkflowExecId: "<id>",
    workflowExecId: "<id>",
    workflowRunId: "<id>",
    workflowName: "<value>",
    attributes: {
      taskId: "<id>",
      failure: {
        message: "<value>",
      },
    },
  },
  workflowContext: {
    namespace: "<value>",
    workflowName: "<value>",
    workflowExecId: "<id>",
  },
  brokerSequence: 536602,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `stream`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `timestamp`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `data`                                                                                         | *components.StreamEventSsePayloadData*                                                         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `workflowContext`                                                                              | [components.StreamEventWorkflowContext](../../models/components/streameventworkflowcontext.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | Record<string, *any*>                                                                          | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `brokerSequence`                                                                               | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |