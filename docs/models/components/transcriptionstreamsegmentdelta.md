# TranscriptionStreamSegmentDelta

## Example Usage

```typescript
import { TranscriptionStreamSegmentDelta } from "@mistralai/mistralai/models/components";

let value: TranscriptionStreamSegmentDelta = {
  type: "transcription.segment",
  text: "<value>",
  start: 2412.74,
  end: null,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `type`                    | *"transcription.segment"* | :heavy_check_mark:        | N/A                       |
| `text`                    | *string*                  | :heavy_check_mark:        | N/A                       |
| `start`                   | *number*                  | :heavy_check_mark:        | N/A                       |
| `end`                     | *number*                  | :heavy_check_mark:        | N/A                       |
| `speakerId`               | *string*                  | :heavy_minus_sign:        | N/A                       |
| `additionalProperties`    | Record<string, *any*>     | :heavy_minus_sign:        | N/A                       |