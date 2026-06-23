# OCRReferencesBlock

## Example Usage

```typescript
import { OCRReferencesBlock } from "@mistralai/mistralai/models/components";

let value: OCRReferencesBlock = {
  topLeftX: 603769,
  topLeftY: 781310,
  bottomRightX: 902414,
  bottomRightY: 979632,
  content: "<value>",
  type: "references",
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
| `type`                                   | *"references"*                           | :heavy_check_mark:                       | N/A                                      |