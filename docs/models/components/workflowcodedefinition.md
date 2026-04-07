# WorkflowCodeDefinition

## Example Usage

```typescript
import { WorkflowCodeDefinition } from "@mistralai/mistralai/models/components";

let value: WorkflowCodeDefinition = {
  inputSchema: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `inputSchema`                                                                | Record<string, *any*>                                                        | :heavy_check_mark:                                                           | Input schema of the workflow's run method                                    |
| `outputSchema`                                                               | Record<string, *any*>                                                        | :heavy_minus_sign:                                                           | Output schema of the workflow's run method                                   |
| `signals`                                                                    | [components.SignalDefinition](../../models/components/signaldefinition.md)[] | :heavy_minus_sign:                                                           | Signal handlers defined by the workflow                                      |
| `queries`                                                                    | [components.QueryDefinition](../../models/components/querydefinition.md)[]   | :heavy_minus_sign:                                                           | Query handlers defined by the workflow                                       |
| `updates`                                                                    | [components.UpdateDefinition](../../models/components/updatedefinition.md)[] | :heavy_minus_sign:                                                           | Update handlers defined by the workflow                                      |
| `enforceDeterminism`                                                         | *boolean*                                                                    | :heavy_minus_sign:                                                           | Whether the workflow enforces deterministic execution                        |
| `executionTimeout`                                                           | *number*                                                                     | :heavy_minus_sign:                                                           | Maximum total execution time including retries and continue-as-new           |