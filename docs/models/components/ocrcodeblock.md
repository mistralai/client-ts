# OCRCodeBlock

## Example Usage

```typescript
import { OCRCodeBlock } from "@mistralai/mistralai/models/components";

let value: OCRCodeBlock = {
  topLeftX: 168013,
  topLeftY: 285223,
  bottomRightX: 337635,
  bottomRightY: 396786,
  content: "<value>",
  type: "code",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `topLeftX`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `topLeftY`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `bottomRightX`                                                                                    | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `bottomRightY`                                                                                    | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `content`                                                                                         | *string*                                                                                          | :heavy_check_mark:                                                                                | Text/markdown/html content of this block                                                          |
| `confidenceScores`                                                                                | [components.OCRBlockConfidenceScores](../../models/components/ocrblockconfidencescores.md)        | :heavy_minus_sign:                                                                                | Confidence scores for this block. Populated when confidence_scores_granularity is set to 'block'. |
| `type`                                                                                            | *"code"*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |