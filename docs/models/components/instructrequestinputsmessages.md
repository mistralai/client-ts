# InstructRequestInputsMessages


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
      text: "<value>",
      type: "text",
    },
  ],
};
```

### `components.UserMessage`

```typescript
const value: components.UserMessage = {
  content: [
    {
      imageUrl: {
        url: "https://lean-packaging.com/",
      },
      type: "image_url",
    },
  ],
};
```

