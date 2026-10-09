# And

Conjunction: rows must match every sub-filter.

## Example Usage

```typescript
import { And } from "@mistralai/mistralai/models/components";

let value: And = {
  type: "and",
  matches: [],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `type`                  | *"and"*                 | :heavy_check_mark:      | N/A                     |
| `matches`               | *components.AndMatch*[] | :heavy_check_mark:      | N/A                     |