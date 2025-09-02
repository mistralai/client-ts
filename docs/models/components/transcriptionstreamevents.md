# TranscriptionStreamEvents

## Example Usage

```typescript
import { TranscriptionStreamEvents } from "@mistralai/mistralai/models/components";

let value: TranscriptionStreamEvents = {
  event: "transcription.done",
  data: {
    text: "<value>",
    start: 2155.98,
    end: 208.46,
    type: "transcription.segment",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `event`                                                                                              | [components.TranscriptionStreamEventTypes](../../models/components/transcriptionstreameventtypes.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `data`                                                                                               | *components.TranscriptionStreamEventsData*                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |