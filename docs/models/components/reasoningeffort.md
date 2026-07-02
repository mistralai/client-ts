# ReasoningEffort

## Example Usage

```typescript
import { ReasoningEffort } from "@mistralai/mistralai/models/components";

let value: ReasoningEffort = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "minimal" | "low" | "medium" | "high" | "xhigh" | Unrecognized<string>
```