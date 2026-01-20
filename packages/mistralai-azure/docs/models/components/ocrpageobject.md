# OCRPageObject

## Example Usage

```typescript
import { OCRPageObject } from "@mistralai/mistralai-azure/models/components";

let value: OCRPageObject = {
  index: 355599,
  markdown: "<value>",
  images: [],
  dimensions: {
    dpi: 225573,
    height: 229870,
    width: 469391,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `index`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | The page index in a pdf document starting from 0                             |
| `markdown`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | The markdown string response of the page                                     |
| `images`                                                                     | [components.OCRImageObject](../../models/components/ocrimageobject.md)[]     | :heavy_check_mark:                                                           | List of all extracted images in the page                                     |
| `tables`                                                                     | [components.OCRTableObject](../../models/components/ocrtableobject.md)[]     | :heavy_minus_sign:                                                           | List of all extracted tables in the page                                     |
| `hyperlinks`                                                                 | *string*[]                                                                   | :heavy_minus_sign:                                                           | List of all hyperlinks in the page                                           |
| `header`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | Header of the page                                                           |
| `footer`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | Footer of the page                                                           |
| `dimensions`                                                                 | [components.OCRPageDimensions](../../models/components/ocrpagedimensions.md) | :heavy_check_mark:                                                           | The dimensions of the PDF Page's screenshot image                            |