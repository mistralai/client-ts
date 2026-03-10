# ClassifierFineTuningJobDetailsStatus

## Example Usage

```typescript
import { ClassifierFineTuningJobDetailsStatus } from "@mistralai/mistralai/models/components";

let value: ClassifierFineTuningJobDetailsStatus = "QUEUED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"QUEUED" | "STARTED" | "VALIDATING" | "VALIDATED" | "RUNNING" | "FAILED_VALIDATION" | "FAILED" | "SUCCESS" | "CANCELLED" | "CANCELLATION_REQUESTED" | Unrecognized<string>
```