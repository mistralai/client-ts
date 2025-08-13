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
    url: "https://minty-airman.biz/",
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
  documentUrl: "https://left-dusk.name/",
};
```

### `components.ToolReferenceChunk`

```typescript
const value: components.ToolReferenceChunk = {
  tool: "document_library",
  title: "<value>",
};
```

### `components.ThinkChunk`

```typescript
const value: components.ThinkChunk = {
  thinking: [
    {
      referenceIds: [
        517379,
      ],
      type: "reference",
    },
  ],
};
```

