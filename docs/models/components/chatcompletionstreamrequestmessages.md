# ChatCompletionStreamRequestMessages


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
      imageUrl: {
        url: "https://whimsical-impostor.name",
      },
      type: "image_url",
    },
  ],
};
```

### `components.UserMessage`

```typescript
const value: components.UserMessage = {
  content: [
    {
      documentUrl: "https://optimistic-slide.org",
      type: "document_url",
    },
  ],
};
```

