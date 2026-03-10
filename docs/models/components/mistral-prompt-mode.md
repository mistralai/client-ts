# MistralPromptMode

Available options to the prompt_mode argument on the chat completion endpoint.
Values represent high-level intent. Assignment to actual SPs is handled internally.
System prompt may include knowledge cutoff date, model capabilities, tone to use, safety guidelines, etc.

## Example Usage

```typescript
import { MistralPromptMode } from "@mistralai/mistralai/models/components";

let value: MistralPromptMode = "reasoning";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"reasoning" | Unrecognized<string>
```