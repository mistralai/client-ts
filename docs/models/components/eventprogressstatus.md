# EventProgressStatus

## Example Usage

```typescript
import { EventProgressStatus } from "@mistralai/mistralai/models/components";

let value: EventProgressStatus = "COMPLETED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"RUNNING" | "COMPLETED" | "FAILED" | Unrecognized<string>
```