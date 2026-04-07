# Payload

The current state or incremental update for the task.


## Supported Types

### `components.JSONPayloadResponse`

```typescript
const value: components.JSONPayloadResponse = {
  value: "<value>",
};
```

### `components.JSONPatchPayloadResponse`

```typescript
const value: components.JSONPatchPayloadResponse = {
  type: "json_patch",
  value: [
    {
      path: "/opt/lib",
      value: "<value>",
      op: "replace",
    },
  ],
};
```

