# OutputContentChunks


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
    url: "https://hospitable-information.biz/",
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
  documentUrl: "https://clear-cut-league.com",
};
```

### `components.ToolReferenceChunk`

```typescript
const value: components.ToolReferenceChunk = {
  tool: "image_generation",
  title: "<value>",
};
```

