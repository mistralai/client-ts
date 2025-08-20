# OCRResponse

## Example Usage

```typescript
import { OCRResponse } from "@mistralai/mistralai/models/components";

let value: OCRResponse = {
  pages: [
    {
      index: 728474,
      markdown: "<value>",
      images: [
        {
          id: "<id>",
          topLeftX: 900676,
          topLeftY: 769872,
          bottomRightX: 849690,
          bottomRightY: 32945,
        },
      ],
      dimensions: {
        dpi: 310195,
        height: 515433,
        width: 415953,
      },
    },
  ],
  model: "Camaro",
  usageInfo: {
    pagesProcessed: 307874,
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