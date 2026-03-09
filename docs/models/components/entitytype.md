# EntityType

The type of entity, used to share a library.

## Example Usage

```typescript
import { EntityType } from "@mistralai/mistralai/models/components";

let value: EntityType = "User";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"User" | "Workspace" | "Org" | Unrecognized<string>
```