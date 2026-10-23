# ResponsesOutputItemDoneEventItem


## Supported Types

### `components.ResponsesOutputMessage`

```typescript
const value: components.ResponsesOutputMessage = {
  id: "<id>",
  content: [
    {
      annotations: [],
      text: "<value>",
      type: "output_text",
    },
  ],
  role: "assistant",
  status: "in_progress",
  type: "message",
};
```

### `components.ResponsesFunctionToolCall`

```typescript
const value: components.ResponsesFunctionToolCall = {
  arguments: "<value>",
  callId: "<id>",
  name: "<value>",
  type: "function_call",
};
```

### `components.ResponsesReasoningItem`

```typescript
const value: components.ResponsesReasoningItem = {
  id: "<id>",
  summary: [],
  type: "reasoning",
};
```

