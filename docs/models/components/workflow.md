# Workflow

## Example Usage

```typescript
import { Workflow } from "@mistralai/mistralai/models/components";

let value: Workflow = {
  id: "50893bc4-3530-4fc0-9061-349178a7ad99",
  name: "<value>",
  displayName: "Gwen.Jacobi-Denesik",
  type: "code",
  customerId: "bd1dce52-29ff-4e1e-b005-da821914ff15",
  workspaceId: "6b21b35e-4040-4008-afa9-7317e76caab7",
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
| `archived`                                                                  | *boolean*                                                                   | :heavy_minus_sign:                                                          | Whether the workflow is archived                                            |