# LogicalExpressionType

## Example Usage

```typescript
import { LogicalExpressionType } from "@mistralai/mistralai/models/components";

let value: LogicalExpressionType = "or";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"and" | "or" | Unrecognized<string>
```