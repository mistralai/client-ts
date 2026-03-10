# ResponseFormats

## Example Usage

```typescript
import { ResponseFormats } from "@mistralai/mistralai/models/components";

let value: ResponseFormats = "json_object";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"text" | "json_object" | "json_schema" | Unrecognized<string>
```