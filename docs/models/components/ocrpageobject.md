# OCRPageObject

## Example Usage

```typescript
import { OCRPageObject } from "@mistralai/mistralai/models/components";

let value: OCRPageObject = {
  index: 24548,
  markdown: "<value>",
  images: [
    {
      id: "<id>",
      topLeftX: 388333,
      topLeftY: 94122,
      bottomRightX: 493579,
      bottomRightY: 825739,
    },
  ],
  dimensions: {
    dpi: 818422,
    height: 80448,
    width: 601228,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `index`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | The page index in a pdf document starting from 0                             |
| `markdown`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | The markdown string response of the page                                     |
| `images`                                                                     | [components.OCRImageObject](../../models/components/ocrimageobject.md)[]     | :heavy_check_mark:                                                           | List of all extracted images in the page                                     |
| `dimensions`                                                                 | [components.OCRPageDimensions](../../models/components/ocrpagedimensions.md) | :heavy_check_mark:                                                           | The dimensions of the PDF Page's screenshot image                            |