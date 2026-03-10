# TranscriptionStreamLanguage

## Example Usage

```typescript
import { TranscriptionStreamLanguage } from "@mistralai/mistralai/models/components";

let value: TranscriptionStreamLanguage = {
  type: "transcription.language",
  audioLanguage: "<value>",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `type`                     | *"transcription.language"* | :heavy_check_mark:         | N/A                        |
| `audioLanguage`            | *string*                   | :heavy_check_mark:         | N/A                        |
| `additionalProperties`     | Record<string, *any*>      | :heavy_minus_sign:         | N/A                        |