# ToolChoiceEnum

## Example Usage

```typescript
import { ToolChoiceEnum } from "@mistralai/mistralai/models/components";

let value: ToolChoiceEnum = "required";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"auto" | "none" | "any" | "required" | Unrecognized<string>
```