# OCRResponse

## Example Usage

```typescript
import { OCRResponse } from "@mistralai/mistralai-azure/models/components";

let value: OCRResponse = {
  pages: [
    {
      index: 468651,
      markdown: "<value>",
      images: [
        {
          id: "<id>",
          topLeftX: 976762,
          topLeftY: 604846,
          bottomRightX: 739264,
          bottomRightY: 39187,
        },
      ],
      dimensions: {
        dpi: 282807,
        height: 120196,
        width: 296140,
      },
    },
  ],
  model: "Alpine",
  usageInfo: {
    pagesProcessed: 317983,
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