# WorkflowEventBatchRequestEvent


## Supported Types

### `components.WorkflowExecutionStartedRequest`

```typescript
const value: components.WorkflowExecutionStartedRequest = {
  eventId: "<id>",
  rootWorkflowExecId: "<id>",
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

### `components.WorkflowExecutionCompletedRequest`

```typescript
const value: components.WorkflowExecutionCompletedRequest = {
  eventId: "<id>",
  rootWorkflowExecId: "<id>",
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

### `components.WorkflowExecutionFailedRequest`

```typescript
const value: components.WorkflowExecutionFailedRequest = {
  eventId: "<id>",
  rootWorkflowExecId: "<id>",
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

### `components.WorkflowExecutionCanceledRequest`

```typescript
const value: components.WorkflowExecutionCanceledRequest = {
  eventId: "<id>",
  rootWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    taskId: "<id>",
  },
};
```

### `components.WorkflowExecutionContinuedAsNewRequest`

```typescript
const value: components.WorkflowExecutionContinuedAsNewRequest = {
  eventId: "<id>",
  rootWorkflowExecId: "<id>",
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

### `components.WorkflowTaskTimedOutRequest`

```typescript
const value: components.WorkflowTaskTimedOutRequest = {
  eventId: "<id>",
  rootWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    taskId: "<id>",
  },
};
```

### `components.WorkflowTaskFailedRequest`

```typescript
const value: components.WorkflowTaskFailedRequest = {
  eventId: "<id>",
  rootWorkflowExecId: "<id>",
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

### `components.CustomTaskStartedRequest`

```typescript
const value: components.CustomTaskStartedRequest = {
  eventId: "<id>",
  rootWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    customTaskId: "<id>",
    customTaskType: "<value>",
  },
};
```

### `components.CustomTaskInProgressRequest`

```typescript
const value: components.CustomTaskInProgressRequest = {
  eventId: "<id>",
  rootWorkflowExecId: "<id>",
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

### `components.CustomTaskCompletedRequest`

```typescript
const value: components.CustomTaskCompletedRequest = {
  eventId: "<id>",
  rootWorkflowExecId: "<id>",
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

### `components.CustomTaskFailedRequest`

```typescript
const value: components.CustomTaskFailedRequest = {
  eventId: "<id>",
  rootWorkflowExecId: "<id>",
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

### `components.CustomTaskTimedOutRequest`

```typescript
const value: components.CustomTaskTimedOutRequest = {
  eventId: "<id>",
  rootWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    customTaskId: "<id>",
    customTaskType: "<value>",
  },
};
```

### `components.CustomTaskCanceledRequest`

```typescript
const value: components.CustomTaskCanceledRequest = {
  eventId: "<id>",
  rootWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    customTaskId: "<id>",
    customTaskType: "<value>",
  },
};
```

### `components.ActivityTaskStartedRequest`

```typescript
const value: components.ActivityTaskStartedRequest = {
  eventId: "<id>",
  rootWorkflowExecId: "<id>",
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

### `components.ActivityTaskCompletedRequest`

```typescript
const value: components.ActivityTaskCompletedRequest = {
  eventId: "<id>",
  rootWorkflowExecId: "<id>",
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

### `components.ActivityTaskRetryingRequest`

```typescript
const value: components.ActivityTaskRetryingRequest = {
  eventId: "<id>",
  rootWorkflowExecId: "<id>",
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

### `components.ActivityTaskFailedRequest`

```typescript
const value: components.ActivityTaskFailedRequest = {
  eventId: "<id>",
  rootWorkflowExecId: "<id>",
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

