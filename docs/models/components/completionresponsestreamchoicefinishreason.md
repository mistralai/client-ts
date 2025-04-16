# CompletionResponseStreamChoiceFinishReason

## Example Usage

```typescript
import { CompletionResponseStreamChoiceFinishReason } from "@mistralai/mistralai/models/components";

let value: CompletionResponseStreamChoiceFinishReason = "error";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"stop" | "length" | "error" | "tool_calls" | Unrecognized<string>
```