# CountResponseInputTokensRequestInput1


## Supported Types

### `components.ResponsesEasyInputMessage`

```typescript
const value: components.ResponsesEasyInputMessage = {
  content: "<value>",
  role: "developer",
};
```

### `components.ResponsesMessage`

```typescript
const value: components.ResponsesMessage = {
  content: [],
  role: "user",
};
```

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

### `components.ResponsesFunctionCallOutput`

```typescript
const value: components.ResponsesFunctionCallOutput = {
  callId: "<id>",
  output: [],
  type: "function_call_output",
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

