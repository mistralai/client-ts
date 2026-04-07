# WorkflowRegistrationGetResponse

## Example Usage

```typescript
import { WorkflowRegistrationGetResponse } from "@mistralai/mistralai/models/components";

let value: WorkflowRegistrationGetResponse = {
  workflowRegistration: {
    id: "9aa9663c-bf11-43a7-b681-fcc6e26eb1ff",
    taskQueue: "<value>",
    definition: {
      inputSchema: {},
    },
    workflowId: "03ad946e-22c0-4cb2-bd3b-bc4c94aa9bb9",
    active: false,
  },
  workflowVersion: {
    id: "2fe68c8d-7d24-4fdf-abd9-cf0f72d6a1cf",
    taskQueue: "<value>",
    definition: {
      inputSchema: {},
    },
    workflowId: "0757ecbc-518e-4e0a-a99f-00511625889b",
    active: true,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `workflowRegistration`                                                                                             | [components.WorkflowRegistrationWithWorkerStatus](../../models/components/workflowregistrationwithworkerstatus.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `workflowVersion`                                                                                                  | [components.WorkflowRegistrationWithWorkerStatus](../../models/components/workflowregistrationwithworkerstatus.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |