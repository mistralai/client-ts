# JobsApiRoutesFineTuningGetFineTuningJobsStatus

The current job state to filter on. When set, the other results are not displayed.

## Example Usage

```typescript
import { JobsApiRoutesFineTuningGetFineTuningJobsStatus } from "@mistralai/mistralai/models/operations";

let value: JobsApiRoutesFineTuningGetFineTuningJobsStatus = "FAILED";
```

## Values

```typescript
"QUEUED" | "STARTED" | "VALIDATING" | "VALIDATED" | "RUNNING" | "FAILED_VALIDATION" | "FAILED" | "SUCCESS" | "CANCELLED" | "CANCELLATION_REQUESTED"
```