# OCRConfidenceScore

Confidence score for a token or word in OCR output.

## Example Usage

```typescript
import { OCRConfidenceScore } from "@mistralai/mistralai/models/components";

let value: OCRConfidenceScore = {
  text: "<value>",
  confidence: 538.74,
  startIndex: 498022,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `text`                                              | *string*                                            | :heavy_check_mark:                                  | The word or text segment                            |
| `confidence`                                        | *number*                                            | :heavy_check_mark:                                  | Confidence score (0-1)                              |
| `startIndex`                                        | *number*                                            | :heavy_check_mark:                                  | Start index of the text in the page markdown string |