# TranscriptionSegmentChunk

## Example Usage

```typescript
import { TranscriptionSegmentChunk } from "@mistralai/mistralai/models/components";

let value: TranscriptionSegmentChunk = {
  text: "<value>",
  start: 154.04,
  end: 5804.01,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `type`                    | *"transcription_segment"* | :heavy_minus_sign:        | N/A                       |
| `text`                    | *string*                  | :heavy_check_mark:        | N/A                       |
| `start`                   | *number*                  | :heavy_check_mark:        | N/A                       |
| `end`                     | *number*                  | :heavy_check_mark:        | N/A                       |
| `score`                   | *number*                  | :heavy_minus_sign:        | N/A                       |
| `speakerId`               | *string*                  | :heavy_minus_sign:        | N/A                       |
| `additionalProperties`    | Record<string, *any*>     | :heavy_minus_sign:        | N/A                       |