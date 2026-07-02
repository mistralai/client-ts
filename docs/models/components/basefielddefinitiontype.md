# BaseFieldDefinitionType

## Example Usage

```typescript
import { BaseFieldDefinitionType } from "@mistralai/mistralai/models/components";

let value: BaseFieldDefinitionType = "TIMESTAMP";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ENUM" | "TEXT" | "INT" | "FLOAT" | "BOOL" | "TIMESTAMP" | "ARRAY" | "MAP" | Unrecognized<string>
```