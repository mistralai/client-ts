# OCRResponse

## Example Usage

```typescript
import { OCRResponse } from "@mistralai/mistralai/models/components";

let value: OCRResponse = {
  pages: [
    {
      index: 966148,
      markdown: "<value>",
      images: [
        {
          id: "<id>",
          topLeftX: 791880,
          topLeftY: 675689,
          bottomRightX: 244889,
          bottomRightY: 216457,
        },
      ],
      dimensions: {
        dpi: 166047,
        height: 922757,
        width: 294076,
      },
    },
  ],
  model: "Explorer",
  usageInfo: {
    pagesProcessed: 493958,
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