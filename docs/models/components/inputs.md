# Inputs

Chat to classify


## Supported Types

### `components.InstructRequestInputs`

```typescript
const value: components.InstructRequestInputs = {
  messages: [
    {
      content: "<value>",
      role: "system",
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
            imageUrl: "https://enchanting-planula.name",
            type: "image_url",
          },
        ],
        role: "tool",
      },
    ],
  },
];
```

