# ConversationEventsData


## Supported Types

### `components.FunctionCallEvent`

```typescript
const value: components.FunctionCallEvent = {
  id: "<id>",
  name: "<value>",
  toolCallId: "<id>",
  arguments: "<value>",
};
```

### `components.AgentHandoffDoneEvent`

```typescript
const value: components.AgentHandoffDoneEvent = {
  id: "<id>",
  nextAgentId: "<id>",
  nextAgentName: "<value>",
};
```

### `components.AgentHandoffStartedEvent`

```typescript
const value: components.AgentHandoffStartedEvent = {
  id: "<id>",
  previousAgentId: "<id>",
  previousAgentName: "<value>",
};
```

### `components.ToolExecutionDeltaEvent`

```typescript
const value: components.ToolExecutionDeltaEvent = {
  id: "<id>",
  name: "code_interpreter",
  arguments: "<value>",
};
```

### `components.ToolExecutionStartedEvent`

```typescript
const value: components.ToolExecutionStartedEvent = {
  id: "<id>",
  name: "web_search_premium",
  arguments: "<value>",
};
```

### `components.ResponseErrorEvent`

```typescript
const value: components.ResponseErrorEvent = {
  message: "<value>",
  code: 451589,
};
```

### `components.MessageOutputEvent`

```typescript
const value: components.MessageOutputEvent = {
  id: "<id>",
  content: {
    thinking: [],
    type: "thinking",
  },
};
```

### `components.ToolExecutionDoneEvent`

```typescript
const value: components.ToolExecutionDoneEvent = {
  id: "<id>",
  name: "code_interpreter",
};
```

### `components.ResponseDoneEvent`

```typescript
const value: components.ResponseDoneEvent = {
  usage: {},
};
```

### `components.ResponseStartedEvent`

```typescript
const value: components.ResponseStartedEvent = {
  conversationId: "<id>",
};
```

