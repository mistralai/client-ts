# FinishReason

## Example Usage

```typescript
import { FinishReason } from "@mistralai/mistralai-azure/models/components";

let value: FinishReason = "length";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"stop" | "length" | "error" | "tool_calls" | Unrecognized<string>
```