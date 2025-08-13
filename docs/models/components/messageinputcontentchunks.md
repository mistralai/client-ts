# MessageInputContentChunks


## Supported Types

### `components.TextChunk`

```typescript
const value: components.TextChunk = {
  text: "<value>",
};
```

### `components.ImageURLChunk`

```typescript
const value: components.ImageURLChunk = {
  imageUrl: {
    url: "https://kosher-puppet.org",
  },
};
```

### `components.ToolFileChunk`

```typescript
const value: components.ToolFileChunk = {
  tool: "document_library",
  fileId: "<id>",
};
```

### `components.DocumentURLChunk`

```typescript
const value: components.DocumentURLChunk = {
  documentUrl: "https://advanced-fort.net",
};
```

