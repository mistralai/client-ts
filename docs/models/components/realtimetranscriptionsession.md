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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `requestId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `model`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `audioFormat`                                                                    | [components.AudioFormat](../../models/components/audioformat.md)                 | :heavy_check_mark:                                                               | N/A                                                                              |
| `targetStreamingDelayMs`                                                         | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `diarize`                                                                        | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `contextBias`                                                                    | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `language`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `speakerReferences`                                                              | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `turnDetection`                                                                  | [components.TurnDetectionConfig](../../models/components/turndetectionconfig.md) | :heavy_minus_sign:                                                               | N/A                                                                              |