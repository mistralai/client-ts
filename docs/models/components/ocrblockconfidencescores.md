# OCRBlockConfidenceScores

Per-block confidence scores, computed per-word from model logprobs.

All fields ``None`` when the block couldn't be scored.
Individual fields ``None`` when that signal is absent — e.g. an image-only block has
no caption, so content scores are ``None``.

## Example Usage

```typescript
import { OCRBlockConfidenceScores } from "@mistralai/mistralai/models/components";

let value: OCRBlockConfidenceScores = {};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `averageContentConfidenceScore`                                                                                                                  | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Average confidence over the block's content (caption) tokens. None when the block has no textual content (e.g. image-only entry).                |
| `minimumContentConfidenceScore`                                                                                                                  | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Minimum per-word content confidence in the block. None when the block has no textual content.                                                    |
| `blockTypeConfidenceScore`                                                                                                                       | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Confidence in the block type (e.g. 'text', 'title', 'table'). None when the entry had no block type or the block type span could not be located. |