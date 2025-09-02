# AgentsCompletionStreamRequestMessages


## Supported Types

### `components.AssistantMessage`

```typescript
const value: components.AssistantMessage = {};
```

### `components.SystemMessage`

```typescript
const value: components.SystemMessage = {
  content: [
    {
      thinking: [
        {
          text: "<value>",
          type: "text",
        },
      ],
      type: "thinking",
    },
  ],
};
```

### `components.ToolMessage`

```typescript
const value: components.ToolMessage = {
  content: [
    {
      thinking: [
        {
          text: "<value>",
          type: "text",
        },
      ],
      type: "thinking",
    },
  ],
};
```

### `components.UserMessage`

```typescript
const value: components.UserMessage = {
  content: [
    {
      inputAudio: "<value>",
      type: "input_audio",
    },
  ],
};
```

