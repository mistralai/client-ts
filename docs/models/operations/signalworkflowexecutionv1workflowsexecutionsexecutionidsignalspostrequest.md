# SignalWorkflowExecutionV1WorkflowsExecutionsExecutionIdSignalsPostRequest

## Example Usage

```typescript
import { SignalWorkflowExecutionV1WorkflowsExecutionsExecutionIdSignalsPostRequest } from "@mistralai/mistralai/models/operations";

let value:
  SignalWorkflowExecutionV1WorkflowsExecutionsExecutionIdSignalsPostRequest = {
    executionId: "<id>",
    signalInvocationBody: {
      name: "<value>",
    },
  };
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `executionId`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `signalInvocationBody`                                                             | [components.SignalInvocationBody](../../models/components/signalinvocationbody.md) | :heavy_check_mark:                                                                 | N/A                                                                                |