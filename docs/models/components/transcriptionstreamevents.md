# TranscriptionStreamEvents

## Example Usage

```typescript
import { TranscriptionStreamEvents } from "@mistralai/mistralai/models/components";

let value: TranscriptionStreamEvents = {
  event: "transcription.text.delta",
  data: {
    model: "Fiesta",
    text: "<value>",
    usage: {
      promptTokens: 0,
      completionTokens: 0,
      totalTokens: 0,
    },
    type: "transcription.done",
    language: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `event`                                                                                              | [components.TranscriptionStreamEventTypes](../../models/components/transcriptionstreameventtypes.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `data`                                                                                               | *components.TranscriptionStreamEventsData*                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |