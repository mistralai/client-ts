# Status

The current status of the fine-tuning job.

## Example Usage

```typescript
import { Status } from "@mistralai/mistralai/models/components";

let value: Status = "FAILED";
```

## Values

```typescript
"QUEUED" | "STARTED" | "VALIDATING" | "VALIDATED" | "RUNNING" | "FAILED_VALIDATION" | "FAILED" | "SUCCESS" | "CANCELLED" | "CANCELLATION_REQUESTED"
```