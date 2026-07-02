# WorkflowExecutionStatus

## Example Usage

```typescript
import { WorkflowExecutionStatus } from "@mistralai/mistralai/models/components";

let value: WorkflowExecutionStatus = "TIMED_OUT";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"RUNNING" | "COMPLETED" | "FAILED" | "CANCELED" | "TERMINATED" | "CONTINUED_AS_NEW" | "TIMED_OUT" | "RETRYING_AFTER_ERROR" | Unrecognized<string>
```