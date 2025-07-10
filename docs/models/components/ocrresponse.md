# OCRResponse

## Example Usage

```typescript
import { OCRResponse } from "@mistralai/mistralai/models/components";

let value: OCRResponse = {
  pages: [
    {
      index: 806124,
      markdown: "<value>",
      images: [
        {
          id: "<id>",
          topLeftX: 107301,
          topLeftY: 9060,
          bottomRightX: 191724,
          bottomRightY: 270477,
        },
      ],
      dimensions: {
        dpi: 616183,
        height: 384273,
        width: 703407,
      },
    },
  ],
  model: "Cruze",
  usageInfo: {
    pagesProcessed: 154425,
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