# ScheduleOverlapPolicy

Controls what happens when a workflow would be started by a schedule but
one is already running.

## Example Usage

```typescript
import { ScheduleOverlapPolicy } from "@mistralai/mistralai/models/components";

let value: ScheduleOverlapPolicy = 3;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

```typescript
1 | 2 | 3 | 4 | 5 | 6 | Unrecognized<number>
```