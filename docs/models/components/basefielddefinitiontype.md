# BaseFieldDefinitionType

## Example Usage

```typescript
import { BaseFieldDefinitionType } from "@mistralai/mistralai/models/components";

let value: BaseFieldDefinitionType = "TIMESTAMP";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ENUM" | "TEXT" | "INT" | "FLOAT" | "BOOL" | "TIMESTAMP" | "ARRAY" | "MAP" | Unrecognized<string>
```