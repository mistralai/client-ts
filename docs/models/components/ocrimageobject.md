# OCRImageObject

## Example Usage

```typescript
import { OCRImageObject } from "@mistralai/mistralai/models/components";

let value: OCRImageObject = {
  id: "<id>",
  topLeftX: 568218,
  topLeftY: 246557,
  bottomRightX: 596433,
  bottomRightY: 117525,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | Image ID for extracted image in a page                     |
| `topLeftX`                                                 | *number*                                                   | :heavy_check_mark:                                         | X coordinate of top-left corner of the extracted image     |
| `topLeftY`                                                 | *number*                                                   | :heavy_check_mark:                                         | Y coordinate of top-left corner of the extracted image     |
| `bottomRightX`                                             | *number*                                                   | :heavy_check_mark:                                         | X coordinate of bottom-right corner of the extracted image |
| `bottomRightY`                                             | *number*                                                   | :heavy_check_mark:                                         | Y coordinate of bottom-right corner of the extracted image |
| `imageBase64`                                              | *string*                                                   | :heavy_minus_sign:                                         | Base64 string of the extracted image                       |