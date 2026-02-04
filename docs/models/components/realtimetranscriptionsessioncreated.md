# RealtimeTranscriptionSessionCreated

## Example Usage

```typescript
import { RealtimeTranscriptionSessionCreated } from "@mistralai/mistralai/models/components";

let value: RealtimeTranscriptionSessionCreated = {
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | *"session.created"*                                                                                | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `session`                                                                                          | [components.RealtimeTranscriptionSession](../../models/components/realtimetranscriptionsession.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |