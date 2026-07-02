# EventType

## Example Usage

```typescript
import { EventType } from "@mistralai/mistralai/models/components";

let value: EventType = "EVENT";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"EVENT" | "EVENT_PROGRESS" | Unrecognized<string>
```