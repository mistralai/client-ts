# NavigationChunkResponse

Wire chunk for navigation: same atom fields as search, no rank fields.

## Example Usage

```typescript
import { NavigationChunkResponse } from "@mistralai/mistralai/models/components";

let value: NavigationChunkResponse = {
  id: "<id>",
  sourceId: "<id>",
  locator: "<value>",
  startOffset: 419555,
  endOffset: 152893,
  chunkType: "<value>",
  content: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `id`                   | *string*               | :heavy_check_mark:     | N/A                    |
| `sourceId`             | *string*               | :heavy_check_mark:     | N/A                    |
| `locator`              | *string*               | :heavy_check_mark:     | N/A                    |
| `startOffset`          | *number*               | :heavy_check_mark:     | N/A                    |
| `endOffset`            | *number*               | :heavy_check_mark:     | N/A                    |
| `chunkType`            | *string*               | :heavy_check_mark:     | N/A                    |
| `parentRef`            | *string*               | :heavy_minus_sign:     | N/A                    |
| `content`              | *string*               | :heavy_check_mark:     | N/A                    |
| `metadata`             | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |