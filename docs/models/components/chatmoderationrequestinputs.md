# ChatModerationRequestInputs

Chat to classify


## Supported Types

### `components.One[]`

```typescript
const value: components.One[] = [
  {
    content: "<value>",
    role: "system",
  },
];
```

### `components.Two[][]`

```typescript
const value: components.Two[][] = [
  [
    {
      content: [
        {
          text: "<value>",
          type: "text",
        },
      ],
      role: "tool",
    },
  ],
];
```

