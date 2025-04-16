# Source

## Example Usage

```typescript
import { Source } from "@mistralai/mistralai/models/components";

let value: Source = "repository";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"upload" | "repository" | "mistral" | Unrecognized<string>
```