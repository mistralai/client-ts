# RunOptimizationRef

Typed run→optimization back-ref, derived at read from the optimization_run link.

Not stored on the run (single source of truth = optimization_run); lets a run row show
its optimization (id + name) without an extra request per run.

## Example Usage

```typescript
import { RunOptimizationRef } from "@mistralai/mistralai/models/components";

let value: RunOptimizationRef = {
  optimizationId: "36d57739-2db8-469f-a2c8-03e68dcbef6b",
  name: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `optimizationId`   | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |