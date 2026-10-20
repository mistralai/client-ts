# VoiceAgentTranscriptEvent

Cumulative segment text. Updates with the same id replace earlier text.

## Example Usage

```typescript
import { VoiceAgentTranscriptEvent } from "@mistralai/mistralai/models/components";

let value: VoiceAgentTranscriptEvent = {
  id: "<id>",
  role: "user",
  content: "<value>",
  final: false,
  ts: 4321.39,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | *"transcription.segment"*                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `role`                                                                                               | [components.VoiceAgentTranscriptEventRole](../../models/components/voiceagenttranscripteventrole.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `content`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `final`                                                                                              | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `ts`                                                                                                 | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `startTime`                                                                                          | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `endTime`                                                                                            | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `language`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |