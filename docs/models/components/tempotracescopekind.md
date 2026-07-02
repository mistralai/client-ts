# TempoTraceScopeKind

## Example Usage

```typescript
import { TempoTraceScopeKind } from "@mistralai/mistralai/models/components";

let value: TempoTraceScopeKind = "SPAN_KIND_CLIENT";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"SPAN_KIND_INTERNAL" | "SPAN_KIND_SERVER" | "SPAN_KIND_CLIENT" | Unrecognized<string>
```