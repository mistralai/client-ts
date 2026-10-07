# ChatCompletionRequestTool


## Supported Types

### `components.Tool`

```typescript
const value: components.Tool = {
  function: {
    name: "<value>",
    parameters: {
      "key": "<value>",
    },
  },
};
```

### `components.ImageGenerationTool`

```typescript
const value: components.ImageGenerationTool = {
  type: "image_generation",
};
```

### `components.DocumentLibraryTool`

```typescript
const value: components.DocumentLibraryTool = {
  type: "document_library",
  libraryIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `components.CustomConnector`

```typescript
const value: components.CustomConnector = {
  type: "connector",
  connectorId: "<id>",
};
```

