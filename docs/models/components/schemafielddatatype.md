# SchemaFieldDataType

## Example Usage

```typescript
import { SchemaFieldDataType } from "@mistralai/mistralai/models/components";

let value: SchemaFieldDataType = "int";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"int" | "bool" | "string" | "embedding" | "long" | "float" | Unrecognized<string>
```