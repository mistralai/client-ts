# MessageEntries


## Supported Types

### `components.MessageInputEntry`

```typescript
const value: components.MessageInputEntry = {
  role: "user",
  content: [
    {
      imageUrl: {
        url: "https://baggy-hovercraft.biz/",
      },
      type: "image_url",
    },
  ],
};
```

### `components.MessageOutputEntry`

```typescript
const value: components.MessageOutputEntry = {
  content: [
    {
      type: "tool_file",
      tool: "web_search",
      fileId: "<id>",
    },
  ],
};
```

