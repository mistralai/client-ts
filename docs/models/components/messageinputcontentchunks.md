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
    url: "https://cluttered-steak.net",
  },
};
```

### `components.ToolFileChunk`

```typescript
const value: components.ToolFileChunk = {
  tool: "code_interpreter",
  fileId: "<id>",
};
```

### `components.DocumentURLChunk`

```typescript
const value: components.DocumentURLChunk = {
  documentUrl: "https://black-and-white-postbox.info/",
};
```

### `components.ThinkChunk`

```typescript
const value: components.ThinkChunk = {
  thinking: [
    {
      text: "<value>",
      type: "text",
    },
  ],
};
```

