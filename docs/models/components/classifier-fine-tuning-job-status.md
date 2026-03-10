# ClassifierFineTuningJobStatus

The current status of the fine-tuning job.

## Example Usage

```typescript
import { ClassifierFineTuningJobStatus } from "@mistralai/mistralai/models/components";

let value: ClassifierFineTuningJobStatus = "VALIDATED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"QUEUED" | "STARTED" | "VALIDATING" | "VALIDATED" | "RUNNING" | "FAILED_VALIDATION" | "FAILED" | "SUCCESS" | "CANCELLED" | "CANCELLATION_REQUESTED" | Unrecognized<string>
```