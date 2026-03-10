# ToolMessageContent


## Supported Types

### `components.TextContent`

```typescript
const value: components.TextContent = {
  text: "<value>",
};
```

### `components.ImageContent`

```typescript
const value: components.ImageContent = {
  data: "<value>",
  mimeType: "<value>",
};
```

### `components.AudioContent`

```typescript
const value: components.AudioContent = {
  data: "<value>",
  mimeType: "<value>",
};
```

### `components.ResourceLink`

```typescript
const value: components.ResourceLink = {
  name: "<value>",
  uri: "https://puzzled-steak.info/",
};
```

### `components.EmbeddedResource`

```typescript
const value: components.EmbeddedResource = {
  resource: {
    uri: "https://pointless-contractor.org/",
    text: "<value>",
  },
};
```

