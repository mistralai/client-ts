# ImageURLChunk

{"type":"image_url","image_url":"data:image/png;base64,iVBORw0"}

## Example Usage

```typescript
import { ImageURLChunk } from "@mistralai/mistralai-gcp/models/components";

let value: ImageURLChunk = {
  type: "image_url",
  imageUrl: "https://darling-distinction.org",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `type`                     | *"image_url"*              | :heavy_check_mark:         | N/A                        |
| `imageUrl`                 | *components.ImageUrlUnion* | :heavy_check_mark:         | N/A                        |