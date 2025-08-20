# TranscriptionStreamEvents

## Example Usage

```typescript
import { TranscriptionStreamEvents } from "@mistralai/mistralai/models/components";

let value: TranscriptionStreamEvents = {
  event: "transcription.language",
  data: {
    text: "<value>",
    type: "transcription.text.delta",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `event`                                                                                              | [components.TranscriptionStreamEventTypes](../../models/components/transcriptionstreameventtypes.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `data`                                                                                               | *components.TranscriptionStreamEventsData*                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |