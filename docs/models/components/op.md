# Op

## Example Usage

```typescript
import { Op } from "@mistralai/mistralai/models/components";

let value: Op = "includes";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"lt" | "lte" | "gt" | "gte" | "startswith" | "istartswith" | "endswith" | "iendswith" | "contains" | "icontains" | "matches" | "notcontains" | "inotcontains" | "eq" | "neq" | "isnull" | "includes" | "excludes" | "len_eq" | Unrecognized<string>
```