# Inputs

Chat to classify


## Supported Types

### `components.InstructRequestInputs`

```typescript
const value: components.InstructRequestInputs = {
  messages: [
    {
      content: [
        {
          imageUrl: "https://esteemed-citizen.biz/",
          type: "image_url",
        },
      ],
      role: "user",
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
            referenceIds: [
              959696,
            ],
            type: "reference",
          },
        ],
        role: "tool",
      },
    ],
  },
];
```

