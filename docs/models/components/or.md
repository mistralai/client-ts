# Or

Disjunction: rows must match at least one sub-filter.

## Example Usage

```typescript
import { Or } from "@mistralai/mistralai/models/components";

let value: Or = {
  type: "or",
  matches: [
    {
      type: "and",
      matches: [],
    },
  ],
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `type`                 | *"or"*                 | :heavy_check_mark:     | N/A                    |
| `matches`              | *components.OrMatch*[] | :heavy_check_mark:     | N/A                    |