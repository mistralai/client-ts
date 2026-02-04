# RealtimeTranscriptionSession

## Example Usage

```typescript
import { RealtimeTranscriptionSession } from "@mistralai/mistralai/models/components";

let value: RealtimeTranscriptionSession = {
  requestId: "<id>",
  model: "Explorer",
  audioFormat: {
    encoding: "pcm_f32le",
    sampleRate: 710679,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `requestId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `model`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `audioFormat`                                                    | [components.AudioFormat](../../models/components/audioformat.md) | :heavy_check_mark:                                               | N/A                                                              |