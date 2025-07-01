# Entries


## Supported Types

### `components.MessageInputEntry`

```typescript
const value: components.MessageInputEntry = {
  role: "user",
  content: [
    {
      imageUrl: {
        url: "https://descriptive-unblinking.net/",
      },
      type: "image_url",
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
  arguments: {
    "key": "<value>",
  },
};
```

### `components.ToolExecutionEntry`

```typescript
const value: components.ToolExecutionEntry = {
  name: "web_search_premium",
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

