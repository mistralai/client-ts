# TypeEnum

## Example Usage

```typescript
import { TypeEnum } from "@mistralai/mistralai/models/components";

let value: TypeEnum = "MAP";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ENUM" | "TEXT" | "INT" | "FLOAT" | "BOOL" | "TIMESTAMP" | "ARRAY" | "MAP" | Unrecognized<string>
```