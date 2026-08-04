# OCRAsideTextBlock

## Example Usage

```typescript
import { OCRAsideTextBlock } from "@mistralai/mistralai/models/components";

let value: OCRAsideTextBlock = {
  topLeftX: 545697,
  topLeftY: 661822,
  bottomRightX: 920345,
  bottomRightY: 240982,
  content: "<value>",
  type: "aside_text",
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
| `type`                                                                                            | *"aside_text"*                                                                                    | :heavy_check_mark:                                                                                | N/A                                                                                               |