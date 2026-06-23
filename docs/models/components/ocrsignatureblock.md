# OCRSignatureBlock

Signature region. ``content`` is the transcribed name when legible, else ``""``.

## Example Usage

```typescript
import { OCRSignatureBlock } from "@mistralai/mistralai/models/components";

let value: OCRSignatureBlock = {
  topLeftX: 857536,
  topLeftY: 241465,
  bottomRightX: 411537,
  bottomRightY: 539511,
  content: "<value>",
  type: "signature",
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
| `type`                                   | *"signature"*                            | :heavy_check_mark:                       | N/A                                      |