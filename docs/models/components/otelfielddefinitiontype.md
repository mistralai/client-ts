# OtelFieldDefinitionType

## Example Usage

```typescript
import { OtelFieldDefinitionType } from "@mistralai/mistralai/models/components";

let value: OtelFieldDefinitionType = "MAP";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ENUM" | "TEXT" | "INT" | "FLOAT" | "BOOL" | "TIMESTAMP" | "ARRAY" | "MAP" | Unrecognized<string>
```