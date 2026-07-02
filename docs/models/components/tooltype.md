# ToolType

## Example Usage

```typescript
import { ToolType } from "@mistralai/mistralai/models/components";

let value: ToolType = "image";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"rag" | "image" | "code" | "event" | Unrecognized<string>
```