# FilePurpose

## Example Usage

```typescript
import { FilePurpose } from "@mistralai/mistralai/models/components";

let value: FilePurpose = "ocr";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"fine-tune" | "batch" | "ocr" | Unrecognized<string>
```