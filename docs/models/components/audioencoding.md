# AudioEncoding

## Example Usage

```typescript
import { AudioEncoding } from "@mistralai/mistralai/models/components";

let value: AudioEncoding = "pcm_f32le";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pcm_s16le" | "pcm_s32le" | "pcm_f16le" | "pcm_f32le" | "pcm_mulaw" | "pcm_alaw" | Unrecognized<string>
```