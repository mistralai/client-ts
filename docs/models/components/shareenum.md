# ShareEnum

## Example Usage

```typescript
import { ShareEnum } from "@mistralai/mistralai/models/components";

let value: ShareEnum = "Viewer";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Viewer" | "Editor" | Unrecognized<string>
```