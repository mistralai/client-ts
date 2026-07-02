# SchemaFieldDataType

## Example Usage

```typescript
import { SchemaFieldDataType } from "@mistralai/mistralai/models/components";

let value: SchemaFieldDataType = "int";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"int" | "bool" | "string" | "embedding" | "long" | "float" | Unrecognized<string>
```