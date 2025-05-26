# OCRResponse

## Example Usage

```typescript
import { OCRResponse } from "@mistralai/mistralai/models/components";

let value: OCRResponse = {
  pages: [
    {
      index: 810839,
      markdown: "<value>",
      images: [
        {
          id: "<id>",
          topLeftX: 348192,
          topLeftY: 211455,
          bottomRightX: 59383,
          bottomRightY: 876027,
        },
      ],
      dimensions: {
        dpi: 918547,
        height: 120120,
        width: 334474,
      },
    },
  ],
  model: "Beetle",
  usageInfo: {
    pagesProcessed: 115898,
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