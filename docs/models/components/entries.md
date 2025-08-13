# Entries


## Supported Types

### `components.MessageInputEntry`

```typescript
const value: components.MessageInputEntry = {
  role: "assistant",
  content: [
    {
      type: "tool_file",
      tool: "web_search",
      fileId: "<id>",
    },
  ],
};
```

### `components.MessageOutputEntry`

```typescript
const value: components.MessageOutputEntry = {
  content: "<value>",
};
```

### `components.FunctionResultEntry`

```typescript
const value: components.FunctionResultEntry = {
  toolCallId: "<id>",
  result: "<value>",
};
```

### `components.FunctionCallEntry`

```typescript
const value: components.FunctionCallEntry = {
  toolCallId: "<id>",
  name: "<value>",
  arguments: "<value>",
};
```

### `components.ToolExecutionEntry`

```typescript
const value: components.ToolExecutionEntry = {
  name: "code_interpreter",
  arguments: "<value>",
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

