# ToolAnnotations

Additional properties describing a Tool to clients.

NOTE: all properties in ToolAnnotations are **hints**.
They are not guaranteed to provide a faithful description of
tool behavior (including descriptive properties like `title`).

Clients should never make tool use decisions based on ToolAnnotations
received from untrusted servers.

## Example Usage

```typescript
import { ToolAnnotations } from "@mistralai/mistralai/models/components";

let value: ToolAnnotations = {};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `title`                | *string*               | :heavy_minus_sign:     | N/A                    |
| `readOnlyHint`         | *boolean*              | :heavy_minus_sign:     | N/A                    |
| `destructiveHint`      | *boolean*              | :heavy_minus_sign:     | N/A                    |
| `idempotentHint`       | *boolean*              | :heavy_minus_sign:     | N/A                    |
| `openWorldHint`        | *boolean*              | :heavy_minus_sign:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |