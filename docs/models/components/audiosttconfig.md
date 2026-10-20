# AudioSTTConfig

## Example Usage

```typescript
import { AudioSTTConfig } from "@mistralai/mistralai/models/components";

let value: AudioSTTConfig = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `model`                                                                                    | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `language`                                                                                 | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `contextBias`                                                                              | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `targetStreamingDelayMs`                                                                   | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `turnDetection`                                                                            | [components.AudioTurnDetectionConfig](../../models/components/audioturndetectionconfig.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |