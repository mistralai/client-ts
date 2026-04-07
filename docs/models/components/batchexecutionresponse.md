# BatchExecutionResponse

## Example Usage

```typescript
import { BatchExecutionResponse } from "@mistralai/mistralai/models/components";

let value: BatchExecutionResponse = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `results`                                                                                          | Record<string, [components.BatchExecutionResult](../../models/components/batchexecutionresult.md)> | :heavy_minus_sign:                                                                                 | Mapping of execution_id to result with status and optional error message                           |