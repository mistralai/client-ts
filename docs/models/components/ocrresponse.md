# OCRResponse

## Example Usage

```typescript
import { OCRResponse } from "@mistralai/mistralai/models/components";

let value: OCRResponse = {
  pages: [
    {
      index: 162954,
      markdown: "<value>",
      images: [
        {
          id: "<id>",
          topLeftX: 638762,
          topLeftY: 490305,
          bottomRightX: 989410,
          bottomRightY: 65304,
        },
      ],
      dimensions: {
        dpi: 783235,
        height: 288398,
        width: 241418,
      },
    },
  ],
  model: "Malibu",
  usageInfo: {
    pagesProcessed: 246063,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `pages`                                                                | [components.OCRPageObject](../../models/components/ocrpageobject.md)[] | :heavy_check_mark:                                                     | List of OCR info for pages.                                            |
| `model`                                                                | *string*                                                               | :heavy_check_mark:                                                     | The model used to generate the OCR.                                    |
| `usageInfo`                                                            | [components.OCRUsageInfo](../../models/components/ocrusageinfo.md)     | :heavy_check_mark:                                                     | N/A                                                                    |