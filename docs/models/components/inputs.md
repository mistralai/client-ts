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
            documentUrl: "https://shocked-characterization.org",
            type: "document_url",
          },
        ],
        role: "user",
      },
    ],
  },
];
```

