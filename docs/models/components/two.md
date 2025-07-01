# Two


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
  content: "<value>",
};
```

### `components.UserMessage`

```typescript
const value: components.UserMessage = {
  content: [
    {
      documentUrl: "https://artistic-finger.com",
      type: "document_url",
    },
  ],
};
```

