# OCRPageObject

## Example Usage

```typescript
import { OCRPageObject } from "@mistralai/mistralai/models/components";

let value: OCRPageObject = {
  index: 797527,
  markdown: "<value>",
  images: [
    {
      id: "<id>",
      topLeftX: 808050,
      topLeftY: 927021,
      bottomRightX: 115561,
      bottomRightY: 217279,
    },
  ],
  dimensions: {
    dpi: 742899,
    height: 196000,
    width: 286329,
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