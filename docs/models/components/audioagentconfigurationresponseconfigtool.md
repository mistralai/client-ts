# AudioAgentConfigurationResponseConfigTool


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

### `components.VoiceAgentFunctionTool`

```typescript
const value: components.VoiceAgentFunctionTool = {
  function: {
    name: "<value>",
    parameters: {
      "key": "<value>",
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

