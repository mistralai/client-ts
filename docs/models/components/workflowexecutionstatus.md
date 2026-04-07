# WorkflowExecutionStatus

## Example Usage

```typescript
import { WorkflowExecutionStatus } from "@mistralai/mistralai/models/components";

let value: WorkflowExecutionStatus = "TIMED_OUT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"RUNNING" | "COMPLETED" | "FAILED" | "CANCELED" | "TERMINATED" | "CONTINUED_AS_NEW" | "TIMED_OUT" | "RETRYING_AFTER_ERROR" | Unrecognized<string>
```