# InputEntries


## Supported Types

### `components.MessageInputEntry`

```typescript
const value: components.MessageInputEntry = {
  role: "assistant",
  content: [
    {
      imageUrl: {
        url: "https://strict-pressure.com",
      },
      type: "image_url",
    },
  ],
};
```

### `components.MessageOutputEntry`

```typescript
const value: components.MessageOutputEntry = {
  content: [
    {
      documentUrl: "https://creative-summary.com",
      type: "document_url",
    },
  ],
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
  name: "web_search",
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

