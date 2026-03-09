# TranscriptionStreamSegmentDelta

## Example Usage

```typescript
import { TranscriptionStreamSegmentDelta } from "@mistralai/mistralai/models/components";

let value: TranscriptionStreamSegmentDelta = {
  text: "<value>",
  start: 1796.95,
  end: 2412.74,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `type`                    | *"transcription.segment"* | :heavy_minus_sign:        | N/A                       |
| `text`                    | *string*                  | :heavy_check_mark:        | N/A                       |
| `start`                   | *number*                  | :heavy_check_mark:        | N/A                       |
| `end`                     | *number*                  | :heavy_check_mark:        | N/A                       |
| `speakerId`               | *string*                  | :heavy_minus_sign:        | N/A                       |
| `additionalProperties`    | Record<string, *any*>     | :heavy_minus_sign:        | N/A                       |