# OCRPageConfidenceScores

Confidence scores for an OCR page at various granularities.

Note on page-level stats:
- For 'page' granularity: average/minimum are computed from per-token exp(logprob).
- For 'word' granularity: average/minimum are computed from per-word confidence,
  where each word's confidence is exp(mean(token_logprobs)) — a geometric mean
  over the word's subword tokens.

## Example Usage

```typescript
import { OCRPageConfidenceScores } from "@mistralai/mistralai/models/components";

let value: OCRPageConfidenceScores = {
  averagePageConfidenceScore: 4518.48,
  minimumPageConfidenceScore: 7833.88,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `wordConfidenceScores`                                                           | [components.OCRConfidenceScore](../../models/components/ocrconfidencescore.md)[] | :heavy_minus_sign:                                                               | Word-level confidence scores (populated only for 'word' granularity)             |
| `averagePageConfidenceScore`                                                     | *number*                                                                         | :heavy_check_mark:                                                               | Average confidence score for the page                                            |
| `minimumPageConfidenceScore`                                                     | *number*                                                                         | :heavy_check_mark:                                                               | Minimum confidence score for the page                                            |