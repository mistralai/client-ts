# FunctionCallEntryConfirmationStatus

## Example Usage

```typescript
import { FunctionCallEntryConfirmationStatus } from "@mistralai/mistralai/models/components";

let value: FunctionCallEntryConfirmationStatus = "denied";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "allowed" | "denied" | Unrecognized<string>
```