# TaskSupport

## Example Usage

```typescript
import { TaskSupport } from "@mistralai/mistralai/models/components";

let value: TaskSupport = "required";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"forbidden" | "optional" | "required" | Unrecognized<string>
```