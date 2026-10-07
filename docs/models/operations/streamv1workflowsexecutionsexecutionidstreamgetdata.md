# StreamV1WorkflowsExecutionsExecutionIdStreamGetData


## Supported Types

### `components.StreamEventSsePayload`

```typescript
const value: components.StreamEventSsePayload = {
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

### `components.WorkflowStreamError`

```typescript
const value: components.WorkflowStreamError = {
  error: "<value>",
  reason: "<value>",
};
```

