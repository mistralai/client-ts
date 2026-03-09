# FinishReason

## Example Usage

```typescript
import { FinishReason } from "@mistralai/mistralai/models/components";

let value: FinishReason = "stop";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"stop" | "length" | "model_length" | "error" | "tool_calls" | Unrecognized<string>
```