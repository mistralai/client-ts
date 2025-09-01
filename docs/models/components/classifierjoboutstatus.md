# ClassifierJobOutStatus

The current status of the fine-tuning job.

## Example Usage

```typescript
import { ClassifierJobOutStatus } from "@mistralai/mistralai/models/components";

let value: ClassifierJobOutStatus = "VALIDATING";
```

## Values

```typescript
"QUEUED" | "STARTED" | "VALIDATING" | "VALIDATED" | "RUNNING" | "FAILED_VALIDATION" | "FAILED" | "SUCCESS" | "CANCELLED" | "CANCELLATION_REQUESTED"
```