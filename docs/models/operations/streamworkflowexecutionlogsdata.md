# StreamWorkflowExecutionLogsData


## Supported Types

### `components.ExecutionLogRecord`

```typescript
const value: components.ExecutionLogRecord = {
  timestamp: new Date("2024-09-14T23:41:22.398Z"),
  traceId: "<id>",
  spanId: "<id>",
  severityText: "<value>",
  body: "<value>",
  logAttributes: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `components.StreamError`

```typescript
const value: components.StreamError = {
  error: "<value>",
};
```

