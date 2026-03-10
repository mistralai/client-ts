# RealtimeTranscriptionInputAudioAppend

## Example Usage

```typescript
import { RealtimeTranscriptionInputAudioAppend } from "@mistralai/mistralai/models/components";

let value: RealtimeTranscriptionInputAudioAppend = {
  audio: "<value>",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `type`                                                                                          | *"input_audio.append"*                                                                          | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `audio`                                                                                         | *string*                                                                                        | :heavy_check_mark:                                                                              | Base64-encoded raw PCM bytes matching the current audio_format. Max decoded size: 262144 bytes. |