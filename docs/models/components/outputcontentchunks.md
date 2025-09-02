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
  imageUrl: "https://darling-distinction.org",
};
```

### `components.ToolFileChunk`

```typescript
const value: components.ToolFileChunk = {
  tool: "image_generation",
  fileId: "<id>",
};
```

### `components.DocumentURLChunk`

```typescript
const value: components.DocumentURLChunk = {
  documentUrl: "https://other-reach.net",
};
```

### `components.ThinkChunk`

```typescript
const value: components.ThinkChunk = {
  thinking: [],
};
```

### `components.ToolReferenceChunk`

```typescript
const value: components.ToolReferenceChunk = {
  tool: "image_generation",
  title: "<value>",
};
```

