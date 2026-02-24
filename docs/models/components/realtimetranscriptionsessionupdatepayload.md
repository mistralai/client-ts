# RealtimeTranscriptionSessionUpdatePayload

## Example Usage

```typescript
import { RealtimeTranscriptionSessionUpdatePayload } from "@mistralai/mistralai/models/components";

let value: RealtimeTranscriptionSessionUpdatePayload = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `audioFormat`                                                                      | [components.AudioFormat](../../models/components/audioformat.md)                   | :heavy_minus_sign:                                                                 | Set before sending audio. Audio format updates are rejected after audio starts.    |
| `targetStreamingDelayMs`                                                           | *number*                                                                           | :heavy_minus_sign:                                                                 | Set before sending audio. Streaming delay updates are rejected after audio starts. |