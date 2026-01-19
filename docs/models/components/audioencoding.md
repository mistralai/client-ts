# AudioEncoding

## Example Usage

```typescript
import { AudioEncoding } from "@mistralai/mistralai/models/components";

let value: AudioEncoding = "pcm_f32le";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pcm_s16le" | "pcm_s32le" | "pcm_f16le" | "pcm_f32le" | "pcm_mulaw" | "pcm_alaw" | Unrecognized<string>
```