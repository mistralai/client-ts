# BatchJobStatus

## Example Usage

```typescript
import { BatchJobStatus } from "@mistralai/mistralai/models/components";

let value: BatchJobStatus = "CANCELLATION_REQUESTED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"QUEUED" | "RUNNING" | "SUCCESS" | "FAILED" | "TIMEOUT_EXCEEDED" | "CANCELLATION_REQUESTED" | "CANCELLED" | Unrecognized<string>
```