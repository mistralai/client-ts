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
          text: "<value>",
          type: "text",
        },
      ],
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
            imageUrl: {
              url: "https://determined-sesame.net/",
            },
            type: "image_url",
          },
        ],
        role: "user",
      },
    ],
  },
];
```

