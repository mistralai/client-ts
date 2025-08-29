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
          thinking: [
            {
              referenceIds: [
                307874,
              ],
              type: "reference",
            },
          ],
          type: "thinking",
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
        content: "<value>",
        role: "user",
      },
    ],
  },
];
```

