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
  imageUrl: "https://ajar-reward.biz/",
};
```

### `components.ToolFileChunk`

```typescript
const value: components.ToolFileChunk = {
  tool: "web_search_premium",
  fileId: "<id>",
};
```

### `components.DocumentURLChunk`

```typescript
const value: components.DocumentURLChunk = {
  documentUrl: "https://swift-ostrich.org",
};
```

### `components.ThinkChunk`

```typescript
const value: components.ThinkChunk = {
  thinking: [
    {
      referenceIds: [
        798047,
      ],
      type: "reference",
    },
  ],
};
```

### `components.ToolReferenceChunk`

```typescript
const value: components.ToolReferenceChunk = {
  tool: "web_search",
  title: "<value>",
};
```

