# SamplingCapability

Sampling capability structure, allowing fine-grained capability advertisement.

## Example Usage

```typescript
import { SamplingCapability } from "@mistralai/mistralai/models/components";

let value: SamplingCapability = {};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `context`              | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
| `tools`                | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |