# TranscriptionSegmentChunk

## Example Usage

```typescript
import { TranscriptionSegmentChunk } from "@mistralai/mistralai/models/components";

let value: TranscriptionSegmentChunk = {
  text: "<value>",
  start: 1520.47,
  end: 7840.59,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `text`                                             | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `start`                                            | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `end`                                              | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `type`                                             | [components.Type](../../models/components/type.md) | :heavy_minus_sign:                                 | N/A                                                |
| `additionalProperties`                             | Record<string, *any*>                              | :heavy_minus_sign:                                 | N/A                                                |