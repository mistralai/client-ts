# Outputs


## Supported Types

### `components.MessageOutputEntry`

```typescript
const value: components.MessageOutputEntry = {
  content: "<value>",
};
```

### `components.ToolExecutionEntry`

```typescript
const value: components.ToolExecutionEntry = {
  name: "web_search",
  arguments: "<value>",
};
```

### `components.FunctionCallEntry`

```typescript
const value: components.FunctionCallEntry = {
  toolCallId: "<id>",
  name: "<value>",
  arguments: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

### `components.AgentHandoffEntry`

```typescript
const value: components.AgentHandoffEntry = {
  previousAgentId: "<id>",
  previousAgentName: "<value>",
  nextAgentId: "<id>",
  nextAgentName: "<value>",
};
```

