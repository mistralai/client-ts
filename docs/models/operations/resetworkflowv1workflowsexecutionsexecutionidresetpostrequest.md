# ResetWorkflowV1WorkflowsExecutionsExecutionIdResetPostRequest

## Example Usage

```typescript
import { ResetWorkflowV1WorkflowsExecutionsExecutionIdResetPostRequest } from "@mistralai/mistralai/models/operations";

let value: ResetWorkflowV1WorkflowsExecutionsExecutionIdResetPostRequest = {
  executionId: "<id>",
  resetInvocationBody: {
    eventId: 826363,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `executionId`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `resetInvocationBody`                                                            | [components.ResetInvocationBody](../../models/components/resetinvocationbody.md) | :heavy_check_mark:                                                               | N/A                                                                              |