# AgentsCompletionRequestMessages


## Supported Types

### `components.AssistantMessage`

```typescript
const value: components.AssistantMessage = {};
```

### `components.SystemMessage`

```typescript
const value: components.SystemMessage = {
  content: "<value>",
};
```

### `components.ToolMessage`

```typescript
const value: components.ToolMessage = {
  content: [
    {
      documentUrl: "https://insistent-disk.org/",
      type: "document_url",
    },
  ],
};
```

### `components.UserMessage`

```typescript
const value: components.UserMessage = {
  content: "<value>",
};
```

