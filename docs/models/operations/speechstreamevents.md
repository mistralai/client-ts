# SpeechStreamEvents

Speech audio data.

## Example Usage

```typescript
import { SpeechStreamEvents } from "@mistralai/mistralai/models/operations";

let value: SpeechStreamEvents = {
  event: "speech.audio.done",
  data: {
    type: "speech.audio.delta",
    audioData: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `event`                                                                                | [components.SpeechStreamEventTypes](../../models/components/speechstreameventtypes.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | *operations.Data*                                                                      | :heavy_check_mark:                                                                     | N/A                                                                                    |