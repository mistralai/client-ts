# ManagedIndexStatus

Lifecycle of an index. Derived, not stored -- see ``managed_index_from_row``.

## Example Usage

```typescript
import { ManagedIndexStatus } from "@mistralai/mistralai/models/components";

let value: ManagedIndexStatus = "ready";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"provisioning" | "ready" | "failed" | "deleting" | Unrecognized<string>
```