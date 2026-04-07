# WorkflowRegistration

## Example Usage

```typescript
import { WorkflowRegistration } from "@mistralai/mistralai/models/components";

let value: WorkflowRegistration = {
  id: "2abbc4fa-f831-44f7-8ce4-e740ffcf0c43",
  taskQueue: "<value>",
  definition: {
    inputSchema: {},
  },
  workflowId: "e3b88ade-dad2-4b2d-aca7-0e9cc6271f16",
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