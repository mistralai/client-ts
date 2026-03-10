# ExecutionConfig

Not typed since mcp config can changed / not stable
we allow all extra fields and this is a dict
TODO: once mcp is stable, we need to type this

## Example Usage

```typescript
import { ExecutionConfig } from "@mistralai/mistralai/models/components";

let value: ExecutionConfig = {
  type: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `type`                 | *string*               | :heavy_check_mark:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |