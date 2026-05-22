# ElicitationCapability

Capability for elicitation operations.

Clients must support at least one mode (form or url).

## Example Usage

```typescript
import { ElicitationCapability } from "@mistralai/mistralai/models/components";

let value: ElicitationCapability = {};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `form`                 | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
| `url`                  | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |