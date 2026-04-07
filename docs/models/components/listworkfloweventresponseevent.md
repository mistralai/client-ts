# ListWorkflowEventResponseEvent


## Supported Types

### `components.WorkflowExecutionStartedResponse`

```typescript
const value: components.WorkflowExecutionStartedResponse = {
  eventId: "<id>",
  eventTimestamp: 905754,
  rootWorkflowExecId: "<id>",
  parentWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    taskId: "<id>",
    workflowName: "<value>",
    input: {
      value: "<value>",
    },
  },
};
```

### `components.WorkflowExecutionCompletedResponse`

```typescript
const value: components.WorkflowExecutionCompletedResponse = {
  eventId: "<id>",
  eventTimestamp: 607286,
  rootWorkflowExecId: "<id>",
  parentWorkflowExecId: null,
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    taskId: "<id>",
    result: {
      value: "<value>",
    },
  },
};
```

### `components.WorkflowExecutionFailedResponse`

```typescript
const value: components.WorkflowExecutionFailedResponse = {
  eventId: "<id>",
  eventTimestamp: 614189,
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
};
```

### `components.WorkflowExecutionCanceledResponse`

```typescript
const value: components.WorkflowExecutionCanceledResponse = {
  eventId: "<id>",
  eventTimestamp: 273716,
  rootWorkflowExecId: "<id>",
  parentWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    taskId: "<id>",
  },
};
```

### `components.WorkflowExecutionContinuedAsNewResponse`

```typescript
const value: components.WorkflowExecutionContinuedAsNewResponse = {
  eventId: "<id>",
  eventTimestamp: 167604,
  rootWorkflowExecId: "<id>",
  parentWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    taskId: "<id>",
    newExecutionRunId: "<id>",
    workflowName: "<value>",
    input: {
      value: "<value>",
    },
  },
};
```

### `components.WorkflowTaskTimedOutResponse`

```typescript
const value: components.WorkflowTaskTimedOutResponse = {
  eventId: "<id>",
  eventTimestamp: 269562,
  rootWorkflowExecId: "<id>",
  parentWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    taskId: "<id>",
  },
};
```

### `components.WorkflowTaskFailedResponse`

```typescript
const value: components.WorkflowTaskFailedResponse = {
  eventId: "<id>",
  eventTimestamp: 327239,
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
};
```

### `components.CustomTaskStartedResponse`

```typescript
const value: components.CustomTaskStartedResponse = {
  eventId: "<id>",
  eventTimestamp: 189727,
  rootWorkflowExecId: "<id>",
  parentWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    customTaskId: "<id>",
    customTaskType: "<value>",
  },
};
```

### `components.CustomTaskInProgressResponse`

```typescript
const value: components.CustomTaskInProgressResponse = {
  eventId: "<id>",
  eventTimestamp: 272252,
  rootWorkflowExecId: "<id>",
  parentWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    customTaskId: "<id>",
    customTaskType: "<value>",
    payload: {
      value: "<value>",
    },
  },
};
```

### `components.CustomTaskCompletedResponse`

```typescript
const value: components.CustomTaskCompletedResponse = {
  eventId: "<id>",
  eventTimestamp: 493251,
  rootWorkflowExecId: "<id>",
  parentWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    customTaskId: "<id>",
    customTaskType: "<value>",
    payload: {
      value: "<value>",
    },
  },
};
```

### `components.CustomTaskFailedResponse`

```typescript
const value: components.CustomTaskFailedResponse = {
  eventId: "<id>",
  eventTimestamp: 772101,
  rootWorkflowExecId: "<id>",
  parentWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    customTaskId: "<id>",
    customTaskType: "<value>",
    failure: {
      message: "<value>",
    },
  },
};
```

### `components.CustomTaskTimedOutResponse`

```typescript
const value: components.CustomTaskTimedOutResponse = {
  eventId: "<id>",
  eventTimestamp: 898323,
  rootWorkflowExecId: "<id>",
  parentWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    customTaskId: "<id>",
    customTaskType: "<value>",
  },
};
```

### `components.CustomTaskCanceledResponse`

```typescript
const value: components.CustomTaskCanceledResponse = {
  eventId: "<id>",
  eventTimestamp: 722803,
  rootWorkflowExecId: "<id>",
  parentWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    customTaskId: "<id>",
    customTaskType: "<value>",
  },
};
```

### `components.ActivityTaskStartedResponse`

```typescript
const value: components.ActivityTaskStartedResponse = {
  eventId: "<id>",
  eventTimestamp: 462358,
  rootWorkflowExecId: "<id>",
  parentWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    taskId: "<id>",
    activityName: "<value>",
    input: {
      value: "<value>",
    },
  },
};
```

### `components.ActivityTaskCompletedResponse`

```typescript
const value: components.ActivityTaskCompletedResponse = {
  eventId: "<id>",
  eventTimestamp: 612202,
  rootWorkflowExecId: "<id>",
  parentWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    taskId: "<id>",
    activityName: "<value>",
    result: {
      value: "<value>",
    },
  },
};
```

### `components.ActivityTaskRetryingResponse`

```typescript
const value: components.ActivityTaskRetryingResponse = {
  eventId: "<id>",
  eventTimestamp: 900411,
  rootWorkflowExecId: "<id>",
  parentWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    taskId: "<id>",
    activityName: "<value>",
    attempt: 660911,
    failure: {
      message: "<value>",
    },
  },
};
```

### `components.ActivityTaskFailedResponse`

```typescript
const value: components.ActivityTaskFailedResponse = {
  eventId: "<id>",
  eventTimestamp: 207483,
  rootWorkflowExecId: "<id>",
  parentWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    taskId: "<id>",
    activityName: "<value>",
    attempt: 982208,
    failure: {
      message: "<value>",
    },
  },
};
```

