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
    type: "message.output",
    role: "assistant",
    content: [
      {
        imageUrl: "https://concrete-equal.name/",
        type: "image_url",
      },
    ],
  },
];
```

