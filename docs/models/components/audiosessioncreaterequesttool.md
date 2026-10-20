# AudioSessionCreateRequestTool


## Supported Types

### `components.VoiceAgentCustomConnector`

```typescript
const value: components.VoiceAgentCustomConnector = {
  type: "connector",
  connectorId: "<id>",
};
```

### `components.VoiceAgentDocumentLibraryTool`

```typescript
const value: components.VoiceAgentDocumentLibraryTool = {
  type: "document_library",
  libraryIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `components.VoiceAgentFunctionToolRequest`

```typescript
const value: components.VoiceAgentFunctionToolRequest = {
  type: "function",
  function: {
    name: "<value>",
    parameters: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  },
};
```

### `components.HangUpTool`

```typescript
const value: components.HangUpTool = {
  type: "hang_up",
};
```

### `components.TransferCallTool`

```typescript
const value: components.TransferCallTool = {
  type: "transfer_call",
  destinations: [],
};
```

### `components.VoiceAgentWebSearchTool`

```typescript
const value: components.VoiceAgentWebSearchTool = {
  type: "web_search",
};
```

