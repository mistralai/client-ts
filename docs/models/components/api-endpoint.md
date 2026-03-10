# ApiEndpoint

## Example Usage

```typescript
import { ApiEndpoint } from "@mistralai/mistralai/models/components";

let value: ApiEndpoint = "/v1/chat/moderations";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"/v1/chat/completions" | "/v1/embeddings" | "/v1/fim/completions" | "/v1/moderations" | "/v1/chat/moderations" | "/v1/ocr" | "/v1/classifications" | "/v1/chat/classifications" | "/v1/conversations" | "/v1/audio/transcriptions" | Unrecognized<string>
```