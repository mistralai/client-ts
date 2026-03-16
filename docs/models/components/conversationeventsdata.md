# ConversationEventsData


## Supported Types

### `components.AgentHandoffDoneEvent`

```typescript
const value: components.AgentHandoffDoneEvent = {
  type: "agent.handoff.done",
  id: "<id>",
  nextAgentId: "<id>",
  nextAgentName: "<value>",
};
```

### `components.AgentHandoffStartedEvent`

```typescript
const value: components.AgentHandoffStartedEvent = {
  type: "agent.handoff.started",
  id: "<id>",
  previousAgentId: "<id>",
  previousAgentName: "<value>",
};
```

### `components.ResponseDoneEvent`

```typescript
const value: components.ResponseDoneEvent = {
  type: "conversation.response.done",
  usage: {},
};
```

### `components.ResponseErrorEvent`

```typescript
const value: components.ResponseErrorEvent = {
  type: "conversation.response.error",
  message: "<value>",
  code: 451589,
};
```

### `components.ResponseStartedEvent`

```typescript
const value: components.ResponseStartedEvent = {
  type: "conversation.response.started",
  conversationId: "<id>",
};
```

### `components.FunctionCallEvent`

```typescript
const value: components.FunctionCallEvent = {
  type: "function.call.delta",
  id: "<id>",
  name: "<value>",
  toolCallId: "<id>",
  arguments: "<value>",
};
```

### `components.MessageOutputEvent`

```typescript
const value: components.MessageOutputEvent = {
  type: "message.output.delta",
  id: "<id>",
  content: {
    thinking: [],
  },
};
```

### `components.ToolExecutionDeltaEvent`

```typescript
const value: components.ToolExecutionDeltaEvent = {
  type: "tool.execution.delta",
  id: "<id>",
  name: "web_search_premium",
  arguments: "<value>",
};
```

### `components.ToolExecutionDoneEvent`

```typescript
const value: components.ToolExecutionDoneEvent = {
  type: "tool.execution.done",
  id: "<id>",
  name: "document_library",
};
```

### `components.ToolExecutionStartedEvent`

```typescript
const value: components.ToolExecutionStartedEvent = {
  type: "tool.execution.started",
  id: "<id>",
  name: "image_generation",
  arguments: "<value>",
};
```

