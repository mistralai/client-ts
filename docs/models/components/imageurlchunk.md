# ImageURLChunk

{"type":"image_url","image_url":{"url":"data:image/png;base64,iVBORw0

## Example Usage

```typescript
import { ImageURLChunk } from "@mistralai/mistralai/models/components";

let value: ImageURLChunk = {
  imageUrl: {
    url: "https://babyish-ethyl.biz/",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | [components.ImageURLChunkType](../../models/components/imageurlchunktype.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `imageUrl`                                                                   | *components.ImageURLChunkImageURL*                                           | :heavy_check_mark:                                                           | N/A                                                                          |