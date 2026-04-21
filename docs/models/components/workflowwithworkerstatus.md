# WorkflowWithWorkerStatus

## Example Usage

```typescript
import { WorkflowWithWorkerStatus } from "@mistralai/mistralai/models/components";

let value: WorkflowWithWorkerStatus = {
  id: "2e8fe91c-5b5a-4230-b5ee-c202518946ab",
  name: "<value>",
  displayName: "Geovanni32",
  type: "code",
  customerId: "f33afe3d-a06a-4724-bf7d-d858ee21a16b",
  workspaceId: "304730e5-6b01-4433-89ff-662819fe6db2",
  active: true,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | Unique identifier of the workflow                                           |
| `name`                                                                      | *string*                                                                    | :heavy_check_mark:                                                          | Name of the workflow                                                        |
| `displayName`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | Display name of the workflow                                                |
| `type`                                                                      | [components.WorkflowType](../../models/components/workflowtype.md)          | :heavy_check_mark:                                                          | N/A                                                                         |
| `description`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | Description of the workflow                                                 |
| `customerId`                                                                | *string*                                                                    | :heavy_check_mark:                                                          | Customer ID of the workflow                                                 |
| `workspaceId`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | Workspace ID of the workflow                                                |
| `sharedNamespace`                                                           | *string*                                                                    | :heavy_minus_sign:                                                          | Reserved namespace for shared workflows (e.g., 'shared:my-shared-workflow') |
| `availableInChatAssistant`                                                  | *boolean*                                                                   | :heavy_minus_sign:                                                          | Whether the workflow is available in chat assistant                         |
| `isTechnical`                                                               | *boolean*                                                                   | :heavy_minus_sign:                                                          | Whether the workflow is technical (e.g. SDK-managed)                        |
| `onBehalfOf`                                                                | *boolean*                                                                   | :heavy_minus_sign:                                                          | Whether the workflow must run associated to a user's identity               |
| `archived`                                                                  | *boolean*                                                                   | :heavy_minus_sign:                                                          | Whether the workflow is archived                                            |
| `active`                                                                    | *boolean*                                                                   | :heavy_check_mark:                                                          | Whether the workflow is active                                              |