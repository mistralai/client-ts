# SchemaFieldIndex

## Example Usage

```typescript
import { SchemaFieldIndex } from "@mistralai/mistralai/models/components";

let value: SchemaFieldIndex = "bm25";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ann" | "bm25" | "attribute" | Unrecognized<string>
```