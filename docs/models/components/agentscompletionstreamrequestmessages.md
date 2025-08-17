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
      text: "<value>",
      type: "text",
    },
  ],
};
```

### `components.ToolMessage`

```typescript
const value: components.ToolMessage = {
  content: [
    {
      inputAudio: "<value>",
      type: "input_audio",
    },
  ],
};
```

### `components.UserMessage`

```typescript
const value: components.UserMessage = {
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

