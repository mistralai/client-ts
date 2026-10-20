# AudioTranscriptionCapabilities

## Example Usage

```typescript
import { AudioTranscriptionCapabilities } from "@mistralai/mistralai/models/components";

let value: AudioTranscriptionCapabilities = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `modes`                                                                            | *string*[]                                                                         | :heavy_minus_sign:                                                                 | Supported modes: `offline` and/or `realtime`.                                      |
| `diarization`                                                                      | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `contextBias`                                                                      | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `turnDetection`                                                                    | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Realtime only.                                                                     |
| `timestampGranularities`                                                           | *string*[]                                                                         | :heavy_minus_sign:                                                                 | Offline only: `segment` and/or `word`.                                             |
| `languages`                                                                        | *string*[]                                                                         | :heavy_minus_sign:                                                                 | ISO 639-1 codes accepted by `language`. Empty if it cannot be set.                 |
| `streamingDelaysMs`                                                                | [components.StreamingDelayRange](../../models/components/streamingdelayrange.md)[] | :heavy_minus_sign:                                                                 | Realtime only: inclusive ranges of accepted target streaming delays.               |