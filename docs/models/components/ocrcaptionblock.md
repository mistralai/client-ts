# OCRCaptionBlock

## Example Usage

```typescript
import { OCRCaptionBlock } from "@mistralai/mistralai/models/components";

let value: OCRCaptionBlock = {
  topLeftX: 57011,
  topLeftY: 349632,
  bottomRightX: 593596,
  bottomRightY: 209759,
  content: "<value>",
  type: "caption",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `topLeftX`                               | *number*                                 | :heavy_check_mark:                       | N/A                                      |
| `topLeftY`                               | *number*                                 | :heavy_check_mark:                       | N/A                                      |
| `bottomRightX`                           | *number*                                 | :heavy_check_mark:                       | N/A                                      |
| `bottomRightY`                           | *number*                                 | :heavy_check_mark:                       | N/A                                      |
| `content`                                | *string*                                 | :heavy_check_mark:                       | Text/markdown/html content of this block |
| `type`                                   | *"caption"*                              | :heavy_check_mark:                       | N/A                                      |