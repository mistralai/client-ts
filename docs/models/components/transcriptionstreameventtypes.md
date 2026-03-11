# TranscriptionStreamEventTypes

## Example Usage

```typescript
import { TranscriptionStreamEventTypes } from "@mistralai/mistralai/models/components";

let value: TranscriptionStreamEventTypes = "transcription.text.delta";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"transcription.language" | "transcription.segment" | "transcription.text.delta" | "transcription.done" | Unrecognized<string>
```