# OCRImageBlock

## Example Usage

```typescript
import { OCRImageBlock } from "@mistralai/mistralai/models/components";

let value: OCRImageBlock = {
  topLeftX: 701479,
  topLeftY: 394382,
  bottomRightX: 513978,
  bottomRightY: 108225,
  content: "<value>",
  type: "image",
  imageId: "<id>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `topLeftX`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `topLeftY`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `bottomRightX`                                             | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `bottomRightY`                                             | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `content`                                                  | *string*                                                   | :heavy_check_mark:                                         | Text/markdown/html content of this block                   |
| `type`                                                     | *"image"*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `imageId`                                                  | *string*                                                   | :heavy_check_mark:                                         | References the corresponding entry in OCRPageObject.images |