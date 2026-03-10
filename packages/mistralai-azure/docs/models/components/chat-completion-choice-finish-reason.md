# ChatCompletionChoiceFinishReason

## Example Usage

```typescript
import { ChatCompletionChoiceFinishReason } from "@mistralai/mistralai-azure/models/components";

let value: ChatCompletionChoiceFinishReason = "stop";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"stop" | "length" | "model_length" | "error" | "tool_calls" | Unrecognized<string>
```