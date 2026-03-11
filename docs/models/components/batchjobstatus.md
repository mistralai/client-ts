# BatchJobStatus

## Example Usage

```typescript
import { BatchJobStatus } from "@mistralai/mistralai/models/components";

let value: BatchJobStatus = "CANCELLATION_REQUESTED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"QUEUED" | "RUNNING" | "SUCCESS" | "FAILED" | "TIMEOUT_EXCEEDED" | "CANCELLATION_REQUESTED" | "CANCELLED" | Unrecognized<string>
```