# ProtobufAny

Additional structured error detail.

## Example Usage

```typescript
import { ProtobufAny } from "@mistralai/mistralai/models/components";

let value: ProtobufAny = {};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `type`                 | *string*               | :heavy_minus_sign:     | N/A                    |
| `value`                | *Uint8Array*           | :heavy_minus_sign:     | N/A                    |
| `debug`                | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |