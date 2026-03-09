# RealtimeTranscriptionErrorDetail

## Example Usage

```typescript
import { RealtimeTranscriptionErrorDetail } from "@mistralai/mistralai/models/components";

let value: RealtimeTranscriptionErrorDetail = {
  message: "<value>",
  code: 794920,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `message`                          | *components.Message*               | :heavy_check_mark:                 | Human-readable error message.      |
| `code`                             | *number*                           | :heavy_check_mark:                 | Internal error code for debugging. |