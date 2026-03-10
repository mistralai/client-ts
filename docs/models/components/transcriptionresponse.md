# TranscriptionResponse

## Example Usage

```typescript
import { TranscriptionResponse } from "@mistralai/mistralai/models/components";

let value: TranscriptionResponse = {
  model: "Grand Cherokee",
  text: "<value>",
  usage: {},
  language: null,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `model`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `text`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `segments`                                                                                     | [components.TranscriptionSegmentChunk](../../models/components/transcriptionsegmentchunk.md)[] | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `usage`                                                                                        | [components.UsageInfo](../../models/components/usageinfo.md)                                   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `language`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `additionalProperties`                                                                         | Record<string, *any*>                                                                          | :heavy_minus_sign:                                                                             | N/A                                                                                            |