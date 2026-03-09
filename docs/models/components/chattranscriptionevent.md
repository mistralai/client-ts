# ChatTranscriptionEvent

## Example Usage

```typescript
import { ChatTranscriptionEvent } from "@mistralai/mistralai/models/components";

let value: ChatTranscriptionEvent = {
  audioUrl: "https://outstanding-sundae.net/",
  model: "Alpine",
  responseMessage: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `audioUrl`            | *string*              | :heavy_check_mark:    | N/A                   |
| `model`               | *string*              | :heavy_check_mark:    | N/A                   |
| `responseMessage`     | Record<string, *any*> | :heavy_check_mark:    | N/A                   |