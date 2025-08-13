# OCRPageObject

## Example Usage

```typescript
import { OCRPageObject } from "@mistralai/mistralai/models/components";

let value: OCRPageObject = {
  index: 481553,
  markdown: "<value>",
  images: [
    {
      id: "<id>",
      topLeftX: 109683,
      topLeftY: 321697,
      bottomRightX: 426594,
      bottomRightY: 24548,
    },
  ],
  dimensions: {
    dpi: 388333,
    height: 94122,
    width: 493579,
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