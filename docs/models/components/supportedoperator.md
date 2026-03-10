# SupportedOperator

## Example Usage

```typescript
import { SupportedOperator } from "@mistralai/mistralai/models/components";

let value: SupportedOperator = "eq";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"lt" | "lte" | "gt" | "gte" | "startswith" | "istartswith" | "endswith" | "iendswith" | "contains" | "icontains" | "matches" | "notcontains" | "inotcontains" | "eq" | "neq" | "isnull" | "includes" | "excludes" | "len_eq" | Unrecognized<string>
```