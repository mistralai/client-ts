# OCRResponse

## Example Usage

```typescript
import { OCRResponse } from "@mistralai/mistralai/models/components";

let value: OCRResponse = {
  pages: [
    {
      index: 65304,
      markdown: "<value>",
      images: [
        {
          id: "<id>",
          topLeftX: 783235,
          topLeftY: 288398,
          bottomRightX: 241418,
          bottomRightY: 662505,
        },
      ],
      dimensions: {
        dpi: 246063,
        height: 665859,
        width: 517309,
      },
    },
  ],
  model: "Escalade",
  usageInfo: {
    pagesProcessed: 554688,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `pages`                                                                | [components.OCRPageObject](../../models/components/ocrpageobject.md)[] | :heavy_check_mark:                                                     | List of OCR info for pages.                                            |
| `model`                                                                | *string*                                                               | :heavy_check_mark:                                                     | The model used to generate the OCR.                                    |
| `usageInfo`                                                            | [components.OCRUsageInfo](../../models/components/ocrusageinfo.md)     | :heavy_check_mark:                                                     | N/A                                                                    |