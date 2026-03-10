# Format

Format of the table

## Example Usage

```typescript
import { Format } from "@mistralai/mistralai/models/components";

let value: Format = "markdown";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"markdown" | "html" | Unrecognized<string>
```