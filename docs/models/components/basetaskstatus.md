# BaseTaskStatus

## Example Usage

```typescript
import { BaseTaskStatus } from "@mistralai/mistralai/models/components";

let value: BaseTaskStatus = "RUNNING";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"RUNNING" | "COMPLETED" | "FAILED" | "CANCELED" | "TERMINATED" | "CONTINUED_AS_NEW" | "TIMED_OUT" | "UNKNOWN" | Unrecognized<string>
```