# Result


## Supported Types

### `components.AcceptedDocumentResponse`

```typescript
const value: components.AcceptedDocumentResponse = {
  status: "accepted",
  position: 816562,
  documentId: "<id>",
  chunkCount: 502356,
};
```

### `components.RejectedDocumentResponse`

```typescript
const value: components.RejectedDocumentResponse = {
  status: "rejected",
  position: 498122,
  errors: [
    {
      location: [
        "<value>",
      ],
      type: "<value>",
      message: "<value>",
    },
  ],
};
```

