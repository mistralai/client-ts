# WorkflowRegistrationWithWorkerStatus

## Example Usage

```typescript
import { WorkflowRegistrationWithWorkerStatus } from "@mistralai/mistralai/models/components";

let value: WorkflowRegistrationWithWorkerStatus = {
  id: "81f37e88-0a0f-4901-90f8-e6691e459992",
  taskQueue: "<value>",
  definition: {
    inputSchema: {},
  },
  workflowId: "7149cf66-473e-4297-b506-62924a556455",
  active: false,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Unique identifier of the workflow registration                                         |
| `taskQueue`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | Project name of the workflow                                                           |
| `definition`                                                                           | [components.WorkflowCodeDefinition](../../models/components/workflowcodedefinition.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `workflowId`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | Workflow ID of the workflow                                                            |
| `workflow`                                                                             | [components.Workflow](../../models/components/workflow.md)                             | :heavy_minus_sign:                                                                     | Workflow of the workflow registration                                                  |
| `compatibleWithChatAssistant`                                                          | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Whether the workflow is compatible with chat assistant                                 |
| `active`                                                                               | *boolean*                                                                              | :heavy_check_mark:                                                                     | Whether the workflow registration is active                                            |