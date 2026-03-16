# ClassifierFineTuningJobStatus

The current status of the fine-tuning job.

## Example Usage

```typescript
import { ClassifierFineTuningJobStatus } from "@mistralai/mistralai/models/components";

let value: ClassifierFineTuningJobStatus = "VALIDATED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"QUEUED" | "STARTED" | "VALIDATING" | "VALIDATED" | "RUNNING" | "FAILED_VALIDATION" | "FAILED" | "SUCCESS" | "CANCELLED" | "CANCELLATION_REQUESTED" | Unrecognized<string>
```