# GetWorkflowsV1WorkflowsGetResponse

## Example Usage

```typescript
import { GetWorkflowsV1WorkflowsGetResponse } from "@mistralai/mistralai/models/operations";

let value: GetWorkflowsV1WorkflowsGetResponse = {
  result: {
    workflows: [
      {
        id: "3d94c92e-9f81-4dcf-819b-a3c1c6a01b0d",
        name: "<value>",
        displayName: "Cicero86",
        archived: false,
      },
    ],
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.WorkflowListResponse](../../models/components/workflowlistresponse.md) | :heavy_check_mark:                                                                 | N/A                                                                                |