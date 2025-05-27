# ConversationInputs


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `components.InputEntries[]`

```typescript
const value: components.InputEntries[] = [
  {
    object: "entry",
    type: "function.result",
    toolCallId: "<id>",
    result: "<value>",
  },
];
```

