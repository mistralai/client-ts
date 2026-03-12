# EntityType

The type of entity, used to share a library.

## Example Usage

```typescript
import { EntityType } from "@mistralai/mistralai/models/components";

let value: EntityType = "User";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"User" | "Workspace" | "Org" | Unrecognized<string>
```