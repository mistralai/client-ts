# OCRRequest

## Example Usage

```typescript
import { OCRRequest } from "@mistralai/mistralai/models/components";

let value: OCRRequest = {
  model: "Durango",
  document: {
    imageUrl: "https://hairy-technologist.net",
    type: "image_url",
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `model`                                                                                                       | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `id`                                                                                                          | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `document`                                                                                                    | *components.Document*                                                                                         | :heavy_check_mark:                                                                                            | Document to run OCR on                                                                                        |
| `pages`                                                                                                       | *number*[]                                                                                                    | :heavy_minus_sign:                                                                                            | Specific pages user wants to process in various formats: single number, range, or list of both. Starts from 0 |
| `includeImageBase64`                                                                                          | *boolean*                                                                                                     | :heavy_minus_sign:                                                                                            | Include image URLs in response                                                                                |
| `imageLimit`                                                                                                  | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Max images to extract                                                                                         |
| `imageMinSize`                                                                                                | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Minimum height and width of image to extract                                                                  |