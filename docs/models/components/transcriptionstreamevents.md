# TranscriptionStreamEvents

## Example Usage

```typescript
import { TranscriptionStreamEvents } from "@mistralai/mistralai/models/components";

let value: TranscriptionStreamEvents = {
  event: "transcription.done",
  data: {
    type: "transcription.language",
    audioLanguage: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `event`                                                                                              | [components.TranscriptionStreamEventTypes](../../models/components/transcriptionstreameventtypes.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `data`                                                                                               | *components.TranscriptionStreamEventsData*                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |