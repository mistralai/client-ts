# FinishReason

## Example Usage

```typescript
import { FinishReason } from "@mistralai/mistralai-azure/models/components";

let value: FinishReason = "error";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"stop" | "length" | "error" | "tool_calls" | Unrecognized<string>
```