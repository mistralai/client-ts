# ConsumerType

## Example Usage

```typescript
import { ConsumerType } from "@mistralai/mistralai/models/components";

let value: ConsumerType = "workspace";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"user" | "org" | "workspace" | "system" | Unrecognized<string>
```