# OCRHeaderBlock

## Example Usage

```typescript
import { OCRHeaderBlock } from "@mistralai/mistralai/models/components";

let value: OCRHeaderBlock = {
  topLeftX: 326696,
  topLeftY: 155772,
  bottomRightX: 106400,
  bottomRightY: 631327,
  content: "<value>",
  type: "header",
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
| `type`                                   | *"header"*                               | :heavy_check_mark:                       | N/A                                      |