# OCRPageObject

## Example Usage

```typescript
import { OCRPageObject } from "@mistralai/mistralai/models/components";

let value: OCRPageObject = {
  index: 706575,
  markdown: "<value>",
  images: [
    {
      id: "<id>",
      topLeftX: 414857,
      topLeftY: 360545,
      bottomRightX: 828657,
      bottomRightY: 924967,
    },
  ],
  dimensions: {
    dpi: 46007,
    height: 232627,
    width: 348519,
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