# ClassificationObject

## Example Usage

```typescript
import { ClassificationObject } from "@mistralai/mistralai/models/components";

let value: ClassificationObject = {};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `categories`                  | Record<string, *boolean*>     | :heavy_minus_sign:            | Classifier result thresholded |
| `categoryScores`              | Record<string, *number*>      | :heavy_minus_sign:            | Classifier result             |