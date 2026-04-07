# ChatCompletionRequestTool


## Supported Types

### `components.Tool`

```typescript
const value: components.Tool = {
  type: "function",
  function: {
    name: "<value>",
    parameters: {
      "key": "<value>",
    },
  },
};
```

### `components.WebSearchTool`

```typescript
const value: components.WebSearchTool = {
  type: "web_search",
};
```

### `components.WebSearchPremiumTool`

```typescript
const value: components.WebSearchPremiumTool = {
  type: "web_search_premium",
};
```

### `components.CodeInterpreterTool`

```typescript
const value: components.CodeInterpreterTool = {
  type: "code_interpreter",
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

