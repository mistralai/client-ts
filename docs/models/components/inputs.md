# Inputs

Chat to classify


## Supported Types

### `components.InstructRequestInputs`

```typescript
const value: components.InstructRequestInputs = {
  messages: [
    {
      content: "<value>",
      role: "tool",
    },
  ],
};
```

### `components.InstructRequest[]`

```typescript
const value: components.InstructRequest[] = [
  {
    messages: [
      {
        content: [
          {
            thinking: [
              {
                text: "<value>",
                type: "text",
              },
            ],
            type: "thinking",
          },
        ],
        role: "tool",
      },
    ],
  },
];
```

