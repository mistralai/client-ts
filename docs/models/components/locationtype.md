# LocationType

## Example Usage

```typescript
import { LocationType } from "@mistralai/mistralai/models/components";

let value: LocationType = "local";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"local" | "k8s" | Unrecognized<string>
```