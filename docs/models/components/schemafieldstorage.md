# SchemaFieldStorage

## Example Usage

```typescript
import { SchemaFieldStorage } from "@mistralai/mistralai/models/components";

let value: SchemaFieldStorage = "on_disk";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"in_memory" | "on_disk" | Unrecognized<string>
```