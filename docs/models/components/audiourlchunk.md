# AudioURLChunk

Audio URL chunk.

Attributes:
    type: The type of the chunk, which is always `ChunkTypes.audio_url`.
    audio_url: The URL of the audio file.

## Example Usage

```typescript
import { AudioURLChunk } from "@mistralai/mistralai/models/components";

let value: AudioURLChunk = {
  type: "audio_url",
  audioUrl: "https://unwieldy-farm.com",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `type`                     | *"audio_url"*              | :heavy_check_mark:         | N/A                        |
| `audioUrl`                 | *components.AudioUrlUnion* | :heavy_check_mark:         | N/A                        |