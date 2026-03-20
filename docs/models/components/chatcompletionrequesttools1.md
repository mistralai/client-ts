# ChatCompletionRequestTools1


## Supported Types

### `components.WebSearchTool`

```typescript
const value: components.WebSearchTool = {};
```

### `components.WebSearchPremiumTool`

```typescript
const value: components.WebSearchPremiumTool = {};
```

### `components.CodeInterpreterTool`

```typescript
const value: components.CodeInterpreterTool = {};
```

### `components.ImageGenerationTool`

```typescript
const value: components.ImageGenerationTool = {};
```

### `components.DocumentLibraryTool`

```typescript
const value: components.DocumentLibraryTool = {
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
  connectorId: "<id>",
};
```

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

