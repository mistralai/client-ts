# MessageEntries


## Supported Types

### `components.MessageInputEntry`

```typescript
const value: components.MessageInputEntry = {
  role: "assistant",
  content: [
    {
      type: "tool_file",
      tool: "web_search_premium",
      fileId: "<id>",
    },
  ],
};
```

### `components.MessageOutputEntry`

```typescript
const value: components.MessageOutputEntry = {
  content: [
    {
      documentUrl: "https://overcooked-ravioli.biz",
      type: "document_url",
    },
  ],
};
```

