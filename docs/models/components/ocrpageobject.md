# OCRPageObject

## Example Usage

```typescript
import { OCRPageObject } from "@mistralai/mistralai/models/components";

let value: OCRPageObject = {
  index: 884325,
  markdown: "<value>",
  images: [
    {
      id: "<id>",
      topLeftX: 958533,
      topLeftY: 207512,
      bottomRightX: 788469,
      bottomRightY: 273349,
    },
  ],
  dimensions: {
    dpi: 887132,
    height: 165545,
    width: 665960,
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