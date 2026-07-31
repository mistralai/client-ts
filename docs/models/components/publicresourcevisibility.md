# PublicResourceVisibility

Visibility options available to public API callers.

Excludes ``shared_global`` which is reserved for system-owned connectors.

## Example Usage

```typescript
import { PublicResourceVisibility } from "@mistralai/mistralai/models/components";

let value: PublicResourceVisibility = "shared_workspace";
```

## Values

```typescript
"shared_org" | "shared_workspace" | "private"
```