# TaskSupport

## Example Usage

```typescript
import { TaskSupport } from "@mistralai/mistralai/models/components";

let value: TaskSupport = "required";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"forbidden" | "optional" | "required" | Unrecognized<string>
```