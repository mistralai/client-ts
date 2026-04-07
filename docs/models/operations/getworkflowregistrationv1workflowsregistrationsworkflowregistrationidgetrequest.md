# GetWorkflowRegistrationV1WorkflowsRegistrationsWorkflowRegistrationIdGetRequest

## Example Usage

```typescript
import { GetWorkflowRegistrationV1WorkflowsRegistrationsWorkflowRegistrationIdGetRequest } from "@mistralai/mistralai/models/operations";

let value:
  GetWorkflowRegistrationV1WorkflowsRegistrationsWorkflowRegistrationIdGetRequest =
    {
      workflowRegistrationId: "6c5e8cd2-b3cc-43f4-ac43-565908f0c87d",
    };
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `workflowRegistrationId`                    | *string*                                    | :heavy_check_mark:                          | N/A                                         |
| `withWorkflow`                              | *boolean*                                   | :heavy_minus_sign:                          | Whether to include the workflow definition  |
| `includeShared`                             | *boolean*                                   | :heavy_minus_sign:                          | Whether to include shared workflow versions |