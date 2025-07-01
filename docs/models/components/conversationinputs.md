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
    type: "function.call",
    toolCallId: "<id>",
    name: "<value>",
    arguments: "<value>",
  },
];
```

