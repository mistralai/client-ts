# ModelCapabilities

This is populated by Harmattan, but some fields have a name
that we don't want to expose in the API.

## Example Usage

```typescript
import { ModelCapabilities } from "@mistralai/mistralai/models/components";

let value: ModelCapabilities = {};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `completionChat`             | *boolean*                    | :heavy_minus_sign:           | N/A                          |
| `functionCalling`            | *boolean*                    | :heavy_minus_sign:           | N/A                          |
| `reasoning`                  | *boolean*                    | :heavy_minus_sign:           | N/A                          |
| `completionFim`              | *boolean*                    | :heavy_minus_sign:           | N/A                          |
| `fineTuning`                 | *boolean*                    | :heavy_minus_sign:           | N/A                          |
| `vision`                     | *boolean*                    | :heavy_minus_sign:           | N/A                          |
| `ocr`                        | *boolean*                    | :heavy_minus_sign:           | N/A                          |
| `classification`             | *boolean*                    | :heavy_minus_sign:           | N/A                          |
| `moderation`                 | *boolean*                    | :heavy_minus_sign:           | N/A                          |
| `audio`                      | *boolean*                    | :heavy_minus_sign:           | N/A                          |
| `audioTranscription`         | *boolean*                    | :heavy_minus_sign:           | N/A                          |
| `audioTranscriptionRealtime` | *boolean*                    | :heavy_minus_sign:           | N/A                          |
| `audioSpeech`                | *boolean*                    | :heavy_minus_sign:           | N/A                          |