# CompletionFineTuningJobDetailsStatus

## Example Usage

```typescript
import { CompletionFineTuningJobDetailsStatus } from "@mistralai/mistralai/models/components";

let value: CompletionFineTuningJobDetailsStatus = "VALIDATING";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"QUEUED" | "STARTED" | "VALIDATING" | "VALIDATED" | "RUNNING" | "FAILED_VALIDATION" | "FAILED" | "SUCCESS" | "CANCELLED" | "CANCELLATION_REQUESTED" | Unrecognized<string>
```