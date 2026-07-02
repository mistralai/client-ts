# CredentialsStatusErrorReason

## Example Usage

```typescript
import { CredentialsStatusErrorReason } from "@mistralai/mistralai/models/components";

let value: CredentialsStatusErrorReason = "unknown error";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"oauth expired" | "oauth near expiry" | "empty credentials" | "unparsable credentials" | "you need to reconnect" | "oauth refresh error" | "MCP server unreachable" | "MCP server timed out" | "MCP server error" | "unknown error" | Unrecognized<string>
```