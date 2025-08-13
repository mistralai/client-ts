# OCRResponse

## Example Usage

```typescript
import { OCRResponse } from "@mistralai/mistralai/models/components";

let value: OCRResponse = {
  pages: [
    {
      index: 206451,
      markdown: "<value>",
      images: [
        {
          id: "<id>",
          topLeftX: 797527,
          topLeftY: 808050,
          bottomRightX: 927021,
          bottomRightY: 115561,
        },
      ],
      dimensions: {
        dpi: 217279,
        height: 742899,
        width: 196000,
      },
    },
  ],
  model: "Civic",
  usageInfo: {
    pagesProcessed: 166741,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `pages`                                                                | [components.OCRPageObject](../../models/components/ocrpageobject.md)[] | :heavy_check_mark:                                                     | List of OCR info for pages.                                            |
| `model`                                                                | *string*                                                               | :heavy_check_mark:                                                     | The model used to generate the OCR.                                    |
| `documentAnnotation`                                                   | *string*                                                               | :heavy_minus_sign:                                                     | Formatted response in the request_format if provided in json str       |
| `usageInfo`                                                            | [components.OCRUsageInfo](../../models/components/ocrusageinfo.md)     | :heavy_check_mark:                                                     | N/A                                                                    |