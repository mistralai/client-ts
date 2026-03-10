# TypeEnum

## Example Usage

```typescript
import { TypeEnum } from "@mistralai/mistralai/models/components";

let value: TypeEnum = "ARRAY";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ENUM" | "TEXT" | "INT" | "FLOAT" | "BOOL" | "TIMESTAMP" | "ARRAY" | Unrecognized<string>
```