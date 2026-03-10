# ConnectorToolCallResponseContent


## Supported Types

### `components.TextContent`

```typescript
const value: components.TextContent = {
  type: "text",
  text: "<value>",
};
```

### `components.ImageContent`

```typescript
const value: components.ImageContent = {
  type: "image",
  data: "<value>",
  mimeType: "<value>",
};
```

### `components.AudioContent`

```typescript
const value: components.AudioContent = {
  type: "audio",
  data: "<value>",
  mimeType: "<value>",
};
```

### `components.ResourceLink`

```typescript
const value: components.ResourceLink = {
  name: "<value>",
  uri: "https://puzzled-steak.info/",
  type: "resource_link",
};
```

### `components.EmbeddedResource`

```typescript
const value: components.EmbeddedResource = {
  type: "resource",
  resource: {
    uri: "https://pointless-contractor.org/",
    text: "<value>",
  },
};
```

