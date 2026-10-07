# ListOptimizationsV1ObservabilityOptimizationsGetRequest

## Example Usage

```typescript
import { ListOptimizationsV1ObservabilityOptimizationsGetRequest } from "@mistralai/mistralai/models/operations";

let value: ListOptimizationsV1ObservabilityOptimizationsGetRequest = {};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `project`                  | *string*                   | :heavy_minus_sign:         | Filter by project slug     |
| `evaluation`               | *string*                   | :heavy_minus_sign:         | Filter by evaluation slug  |
| `status`                   | *string*                   | :heavy_minus_sign:         | Filter by lifecycle status |
| `algorithm`                | *string*                   | :heavy_minus_sign:         | Filter by algorithm        |
| `tags`                     | *string*[]                 | :heavy_minus_sign:         | Filter by tags             |
| `pageSize`                 | *number*                   | :heavy_minus_sign:         | N/A                        |
| `page`                     | *number*                   | :heavy_minus_sign:         | N/A                        |