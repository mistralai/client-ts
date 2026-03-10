# ModelConversationTool


## Supported Types

### `components.CodeInterpreterTool`

```typescript
const value: components.CodeInterpreterTool = {
  type: "code_interpreter",
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
const value: components.ImageGenerationTool = {
  type: "image_generation",
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

