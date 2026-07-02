# BaseTaskStatus

## Example Usage

```typescript
import { BaseTaskStatus } from "@mistralai/mistralai/models/components";

let value: BaseTaskStatus = "RUNNING";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"RUNNING" | "COMPLETED" | "FAILED" | "CANCELED" | "TERMINATED" | "CONTINUED_AS_NEW" | "TIMED_OUT" | "UNKNOWN" | Unrecognized<string>
```