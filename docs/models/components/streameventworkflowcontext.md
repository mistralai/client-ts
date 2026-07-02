# StreamEventWorkflowContext

## Example Usage

```typescript
import { StreamEventWorkflowContext } from "@mistralai/mistralai/models/components";

let value: StreamEventWorkflowContext = {
  namespace: "<value>",
  workflowName: "<value>",
  workflowExecId: "<id>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `namespace`            | *string*               | :heavy_check_mark:     | N/A                    |
| `workflowName`         | *string*               | :heavy_check_mark:     | N/A                    |
| `workflowExecId`       | *string*               | :heavy_check_mark:     | N/A                    |
| `parentWorkflowExecId` | *string*               | :heavy_minus_sign:     | N/A                    |
| `rootWorkflowExecId`   | *string*               | :heavy_minus_sign:     | N/A                    |