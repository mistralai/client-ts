# MetricAggregation

## Example Usage

```typescript
import { MetricAggregation } from "@mistralai/mistralai/models/components";

let value: MetricAggregation = "avg";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"count" | "count_distinct" | "sum" | "avg" | "min" | "max" | "p50" | "p90" | "p95" | "p99" | Unrecognized<string>
```