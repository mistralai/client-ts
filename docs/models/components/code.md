# Code

Machine-readable error code.

## Example Usage

```typescript
import { Code } from "@mistralai/mistralai/models/components";

let value: Code = "not_found";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"canceled" | "unknown" | "invalid_argument" | "deadline_exceeded" | "not_found" | "already_exists" | "permission_denied" | "resource_exhausted" | "failed_precondition" | "aborted" | "out_of_range" | "unimplemented" | "internal" | "unavailable" | "data_loss" | "unauthenticated" | Unrecognized<string>
```