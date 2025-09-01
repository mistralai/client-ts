# TranscriptionStreamDone

## Example Usage

```typescript
import { TranscriptionStreamDone } from "@mistralai/mistralai/models/components";

let value: TranscriptionStreamDone = {
  model: "Charger",
  text: "<value>",
  usage: {},
  language: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `model`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `text`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `segments`                                                                                       | [components.TranscriptionSegmentChunk](../../models/components/transcriptionsegmentchunk.md)[]   | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `usage`                                                                                          | [components.UsageInfo](../../models/components/usageinfo.md)                                     | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `type`                                                                                           | [components.TranscriptionStreamDoneType](../../models/components/transcriptionstreamdonetype.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `language`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `additionalProperties`                                                                           | Record<string, *any*>                                                                            | :heavy_minus_sign:                                                                               | N/A                                                                                              |