# OCRPageObject

## Example Usage

```typescript
import { OCRPageObject } from "@mistralai/mistralai-azure/models/components";

let value: OCRPageObject = {
  index: 64147,
  markdown: "<value>",
  images: [
    {
      id: "<id>",
      topLeftX: 692472,
      topLeftY: 566602,
      bottomRightX: 265389,
      bottomRightY: 523248,
    },
  ],
  dimensions: {
    dpi: 93940,
    height: 575947,
    width: 929297,
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