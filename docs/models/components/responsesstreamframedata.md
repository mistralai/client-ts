# ResponsesStreamFrameData


## Supported Types

### `components.ResponsesCreatedEvent`

```typescript
const value: components.ResponsesCreatedEvent = {
  response: {
    id: "<id>",
    createdAt: 1930.59,
    model: "A4",
    object: "response",
    output: [
      {
        id: "<id>",
        content: [
          {
            refusal: "<value>",
            type: "refusal",
          },
        ],
        role: "assistant",
        status: "incomplete",
        type: "message",
        phase: null,
      },
    ],
    parallelToolCalls: false,
    toolChoice: "none",
    tools: [
      {
        name: "<value>",
        strict: null,
        type: "function",
        deferLoading: null,
        description: null,
      },
    ],
  },
  sequenceNumber: 461935,
  type: "response.created",
};
```

### `components.ResponsesInProgressEvent`

```typescript
const value: components.ResponsesInProgressEvent = {
  response: {
    id: "<id>",
    createdAt: 1930.59,
    model: "A4",
    object: "response",
    output: [
      {
        id: "<id>",
        content: [
          {
            refusal: "<value>",
            type: "refusal",
          },
        ],
        role: "assistant",
        status: "incomplete",
        type: "message",
        phase: null,
      },
    ],
    parallelToolCalls: false,
    toolChoice: "none",
    tools: [
      {
        name: "<value>",
        strict: null,
        type: "function",
        deferLoading: null,
        description: null,
      },
    ],
  },
  sequenceNumber: 922453,
  type: "response.in_progress",
};
```

### `components.ResponsesCompletedEvent`

```typescript
const value: components.ResponsesCompletedEvent = {
  response: {
    id: "<id>",
    createdAt: 1930.59,
    model: "A4",
    object: "response",
    output: [
      {
        id: "<id>",
        content: [
          {
            refusal: "<value>",
            type: "refusal",
          },
        ],
        role: "assistant",
        status: "incomplete",
        type: "message",
        phase: null,
      },
    ],
    parallelToolCalls: false,
    toolChoice: "none",
    tools: [
      {
        name: "<value>",
        strict: null,
        type: "function",
        deferLoading: null,
        description: null,
      },
    ],
  },
  sequenceNumber: 514896,
  type: "response.completed",
};
```

### `components.ResponsesIncompleteEvent`

```typescript
const value: components.ResponsesIncompleteEvent = {
  response: {
    id: "<id>",
    createdAt: 1930.59,
    model: "A4",
    object: "response",
    output: [
      {
        id: "<id>",
        content: [
          {
            refusal: "<value>",
            type: "refusal",
          },
        ],
        role: "assistant",
        status: "incomplete",
        type: "message",
        phase: null,
      },
    ],
    parallelToolCalls: false,
    toolChoice: "none",
    tools: [
      {
        name: "<value>",
        strict: null,
        type: "function",
        deferLoading: null,
        description: null,
      },
    ],
  },
  sequenceNumber: 146216,
  type: "response.incomplete",
};
```

### `components.ResponsesFailedEvent`

```typescript
const value: components.ResponsesFailedEvent = {
  response: {
    id: "<id>",
    createdAt: 1930.59,
    model: "A4",
    object: "response",
    output: [
      {
        id: "<id>",
        content: [
          {
            refusal: "<value>",
            type: "refusal",
          },
        ],
        role: "assistant",
        status: "incomplete",
        type: "message",
        phase: null,
      },
    ],
    parallelToolCalls: false,
    toolChoice: "none",
    tools: [
      {
        name: "<value>",
        strict: null,
        type: "function",
        deferLoading: null,
        description: null,
      },
    ],
  },
  sequenceNumber: 602884,
  type: "response.failed",
};
```

### `components.ResponsesErrorEvent`

```typescript
const value: components.ResponsesErrorEvent = {
  message: "<value>",
  sequenceNumber: 998862,
  type: "error",
};
```

### `components.ResponsesOutputItemAddedEvent`

```typescript
const value: components.ResponsesOutputItemAddedEvent = {
  item: {
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
    phase: null,
  },
  outputIndex: 570752,
  sequenceNumber: 851617,
  type: "response.output_item.added",
};
```

### `components.ResponsesOutputItemDoneEvent`

```typescript
const value: components.ResponsesOutputItemDoneEvent = {
  item: {
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
    phase: null,
  },
  outputIndex: 125329,
  sequenceNumber: 145204,
  type: "response.output_item.done",
};
```

### `components.ResponsesContentPartAddedEvent`

```typescript
const value: components.ResponsesContentPartAddedEvent = {
  contentIndex: 812409,
  itemId: "<id>",
  outputIndex: 364166,
  part: {
    text: "<value>",
    type: "reasoning_text",
  },
  sequenceNumber: 33578,
  type: "response.content_part.added",
};
```

### `components.ResponsesContentPartDoneEvent`

```typescript
const value: components.ResponsesContentPartDoneEvent = {
  contentIndex: 901573,
  itemId: "<id>",
  outputIndex: 275583,
  part: {
    text: "<value>",
    type: "reasoning_text",
  },
  sequenceNumber: 509241,
  type: "response.content_part.done",
};
```

### `components.ResponsesTextDeltaEvent`

```typescript
const value: components.ResponsesTextDeltaEvent = {
  contentIndex: 680638,
  delta: "<value>",
  itemId: "<id>",
  logprobs: [],
  outputIndex: 11119,
  sequenceNumber: 489189,
  type: "response.output_text.delta",
};
```

### `components.ResponsesTextDoneEvent`

```typescript
const value: components.ResponsesTextDoneEvent = {
  contentIndex: 991206,
  itemId: "<id>",
  logprobs: [
    {
      token: "<value>",
      logprob: 7030.36,
    },
  ],
  outputIndex: 594425,
  sequenceNumber: 174333,
  text: "<value>",
  type: "response.output_text.done",
};
```

### `components.ResponsesReasoningTextDeltaEvent`

```typescript
const value: components.ResponsesReasoningTextDeltaEvent = {
  contentIndex: 45372,
  delta: "<value>",
  itemId: "<id>",
  outputIndex: 38371,
  sequenceNumber: 179859,
  type: "response.reasoning_text.delta",
};
```

### `components.ResponsesReasoningTextDoneEvent`

```typescript
const value: components.ResponsesReasoningTextDoneEvent = {
  contentIndex: 190692,
  itemId: "<id>",
  outputIndex: 386416,
  sequenceNumber: 216265,
  text: "<value>",
  type: "response.reasoning_text.done",
};
```

### `components.ResponsesFunctionCallArgumentsDeltaEvent`

```typescript
const value: components.ResponsesFunctionCallArgumentsDeltaEvent = {
  delta: "<value>",
  itemId: "<id>",
  outputIndex: 77967,
  sequenceNumber: 864644,
  type: "response.function_call_arguments.delta",
};
```

### `components.ResponsesFunctionCallArgumentsDoneEvent`

```typescript
const value: components.ResponsesFunctionCallArgumentsDoneEvent = {
  arguments: "<value>",
  itemId: "<id>",
  name: "<value>",
  outputIndex: 735260,
  sequenceNumber: 73998,
  type: "response.function_call_arguments.done",
};
```

