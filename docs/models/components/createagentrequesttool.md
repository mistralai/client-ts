# CreateAgentRequestTool


## Supported Types

### `components.CodeInterpreterTool`

```typescript
const value: components.CodeInterpreterTool = {};
```

### `components.CustomConnector`

```typescript
const value: components.CustomConnector = {
  connectorId: "<id>",
};
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

### `components.FunctionTool`

```typescript
const value: components.FunctionTool = {
  type: "function",
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
const value: components.ImageGenerationTool = {};
```

### `components.WebSearchTool`

```typescript
const value: components.WebSearchTool = {};
```

### `components.WebSearchPremiumTool`

```typescript
const value: components.WebSearchPremiumTool = {};
```

