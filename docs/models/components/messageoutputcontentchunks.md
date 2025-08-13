# MessageOutputContentChunks


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
  imageUrl: "https://optimistic-travel.biz/",
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
  documentUrl: "https://second-hand-elevation.biz/",
};
```

### `components.ToolReferenceChunk`

```typescript
const value: components.ToolReferenceChunk = {
  tool: "code_interpreter",
  title: "<value>",
};
```

### `components.ThinkChunk`

```typescript
const value: components.ThinkChunk = {
  thinking: [
    {
      referenceIds: [
        828940,
      ],
      type: "reference",
    },
  ],
};
```

