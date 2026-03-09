# ToolTypes

## Example Usage

```typescript
import { ToolTypes } from "@mistralai/mistralai/models/components";

let value: ToolTypes = "function";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"function" | Unrecognized<string>
```