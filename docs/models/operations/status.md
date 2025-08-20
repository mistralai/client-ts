# Status

The current job state to filter on. When set, the other results are not displayed.

## Example Usage

```typescript
import { Status } from "@mistralai/mistralai/models/operations";

let value: Status = "FAILED";
```

## Values

```typescript
"QUEUED" | "STARTED" | "VALIDATING" | "VALIDATED" | "RUNNING" | "FAILED_VALIDATION" | "FAILED" | "SUCCESS" | "CANCELLED" | "CANCELLATION_REQUESTED"
```