# AuthStatus

## Example Usage

```typescript
import { AuthStatus } from "@mistralai/mistralai/models/components";

let value: AuthStatus = "valid";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"valid" | "invalid" | "error" | Unrecognized<string>
```