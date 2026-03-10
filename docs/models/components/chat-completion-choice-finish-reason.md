# ChatCompletionChoiceFinishReason

## Example Usage

```typescript
import { ChatCompletionChoiceFinishReason } from "@mistralai/mistralai-azure/models/components";

let value: ChatCompletionChoiceFinishReason = "stop";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"stop" | "length" | "model_length" | "error" | "tool_calls" | Unrecognized<string>
```