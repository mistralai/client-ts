# ModerationObject

## Example Usage

```typescript
import { ModerationObject } from "@mistralai/mistralai/models/components";

let value: ModerationObject = {};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `categories`                 | Record<string, *boolean*>    | :heavy_minus_sign:           | Moderation result thresholds |
| `categoryScores`             | Record<string, *number*>     | :heavy_minus_sign:           | Moderation result            |