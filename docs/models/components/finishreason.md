# FinishReason

## Example Usage

```typescript
import { FinishReason } from "@mistralai/mistralai/models/components";

let value: FinishReason = "stop";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"stop" | "length" | "model_length" | "error" | "tool_calls" | Unrecognized<string>
```