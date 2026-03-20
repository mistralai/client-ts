# VoiceCreateRequest

Request model for creating a new voice with base64 audio.

## Example Usage

```typescript
import { VoiceCreateRequest } from "@mistralai/mistralai/models/components";

let value: VoiceCreateRequest = {
  name: "<value>",
  sampleAudio: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `name`                                    | *string*                                  | :heavy_check_mark:                        | N/A                                       |
| `slug`                                    | *string*                                  | :heavy_minus_sign:                        | N/A                                       |
| `languages`                               | *string*[]                                | :heavy_minus_sign:                        | N/A                                       |
| `gender`                                  | *string*                                  | :heavy_minus_sign:                        | N/A                                       |
| `age`                                     | *number*                                  | :heavy_minus_sign:                        | N/A                                       |
| `tags`                                    | *string*[]                                | :heavy_minus_sign:                        | N/A                                       |
| `color`                                   | *string*                                  | :heavy_minus_sign:                        | N/A                                       |
| `retentionNotice`                         | *number*                                  | :heavy_minus_sign:                        | N/A                                       |
| `sampleAudio`                             | *string*                                  | :heavy_check_mark:                        | Base64-encoded audio file                 |
| `sampleFilename`                          | *string*                                  | :heavy_minus_sign:                        | Original filename for extension detection |