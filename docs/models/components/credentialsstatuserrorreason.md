# CredentialsStatusErrorReason

## Example Usage

```typescript
import { CredentialsStatusErrorReason } from "@mistralai/mistralai/models/components";

let value: CredentialsStatusErrorReason = "oauth refresh error";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"oauth expired" | "oauth near expiry" | "empty credentials" | "unparsable credentials" | "you need to reconnect" | "oauth refresh error" | Unrecognized<string>
```