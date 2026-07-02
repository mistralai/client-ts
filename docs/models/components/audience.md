# Audience

## Example Usage

```typescript
import { Audience } from "@mistralai/mistralai/models/components";

let value: Audience = "user";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"user" | "assistant" | Unrecognized<string>
```