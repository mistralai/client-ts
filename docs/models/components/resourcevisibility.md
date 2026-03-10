# ResourceVisibility

## Example Usage

```typescript
import { ResourceVisibility } from "@mistralai/mistralai/models/components";

let value: ResourceVisibility = "shared_workspace";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"shared_global" | "shared_org" | "shared_workspace" | "private" | Unrecognized<string>
```