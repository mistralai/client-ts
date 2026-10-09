# NavigationResponse

Unranked chunk list in reading order (ascending start_offset).

## Example Usage

```typescript
import { NavigationResponse } from "@mistralai/mistralai/models/components";

let value: NavigationResponse = {
  chunks: [
    {
      id: "<id>",
      sourceId: "<id>",
      locator: "<value>",
      startOffset: 31243,
      endOffset: 361581,
      chunkType: "<value>",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `chunks`                                                                                   | [components.NavigationChunkResponse](../../models/components/navigationchunkresponse.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |