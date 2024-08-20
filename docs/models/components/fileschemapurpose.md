# FileSchemaPurpose

The intended purpose of the uploaded file. Only accepts fine-tuning (`fine-tune`) for now.

## Example Usage

```typescript
import { FileSchemaPurpose } from "@mistralai/mistralai/models/components";

let value: FileSchemaPurpose = "fine-tune";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"fine-tune" | Unrecognized<string>
```