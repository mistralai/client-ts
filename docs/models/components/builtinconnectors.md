# BuiltInConnectors

## Example Usage

```typescript
import { BuiltInConnectors } from "@mistralai/mistralai/models/components";

let value: BuiltInConnectors = "document_library";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"web_search" | "web_search_premium" | "code_interpreter" | "image_generation" | "document_library" | Unrecognized<string>
```