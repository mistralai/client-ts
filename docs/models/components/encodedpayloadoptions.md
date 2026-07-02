# EncodedPayloadOptions

## Example Usage

```typescript
import { EncodedPayloadOptions } from "@mistralai/mistralai/models/components";

let value: EncodedPayloadOptions = "encrypted";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"offloaded" | "encrypted" | "encrypted-partial" | "compressed" | Unrecognized<string>
```