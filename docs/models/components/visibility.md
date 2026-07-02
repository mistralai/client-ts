# Visibility

## Example Usage

```typescript
import { Visibility } from "@mistralai/mistralai/models/components";

let value: Visibility = "model";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"model" | "app" | Unrecognized<string>
```