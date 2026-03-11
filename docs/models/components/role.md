# Role

## Example Usage

```typescript
import { Role } from "@mistralai/mistralai/models/components";

let value: Role = "assistant";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"assistant" | "user" | Unrecognized<string>
```