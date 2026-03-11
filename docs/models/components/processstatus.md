# ProcessStatus

## Example Usage

```typescript
import { ProcessStatus } from "@mistralai/mistralai/models/components";

let value: ProcessStatus = "self_managed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"self_managed" | "missing_content" | "noop" | "done" | "todo" | "in_progress" | "error" | "waiting_for_capacity" | Unrecognized<string>
```