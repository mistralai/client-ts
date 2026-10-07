# SearchHitResponse

## Example Usage

```typescript
import { SearchHitResponse } from "@mistralai/mistralai/models/components";

let value: SearchHitResponse = {
  chunk: {
    id: "<id>",
    sourceId: "<id>",
    locator: "<value>",
    startOffset: 342838,
    endOffset: 118540,
    chunkType: "<value>",
    content: "<value>",
  },
  score: 9874.17,
  indexName: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `chunk`                                                                          | [components.SearchChunkResponse](../../models/components/searchchunkresponse.md) | :heavy_check_mark:                                                               | Wire chunk: atom fields plus any custom fields (via ``extra``).                  |
| `score`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `distance`                                                                       | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `indexName`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |