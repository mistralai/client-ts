# RealtimeTranscriptionSessionUpdated

## Example Usage

```typescript
import { RealtimeTranscriptionSessionUpdated } from "@mistralai/mistralai/models/components";

let value: RealtimeTranscriptionSessionUpdated = {
  session: {
    requestId: "<id>",
    model: "Beetle",
    audioFormat: {
      encoding: "pcm_f32le",
      sampleRate: 710679,
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | *"session.updated"*                                                                                  | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `session`                                                                                            | [components.RealtimeTranscriptionSession](../../models/components/realtime-transcription-session.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |