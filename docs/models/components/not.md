# Not

Negate a filter: rows must not match.

## Example Usage

```typescript
import { Not } from "@mistralai/mistralai/models/components";

let value: Not = {
  type: "not",
  match: {
    type: "and",
    matches: [],
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `type`                | *"not"*               | :heavy_check_mark:    | N/A                   |
| `match`               | *components.NotMatch* | :heavy_check_mark:    | N/A                   |