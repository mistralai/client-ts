# WorkflowRegistrationListResponse

## Example Usage

```typescript
import { WorkflowRegistrationListResponse } from "@mistralai/mistralai/models/components";

let value: WorkflowRegistrationListResponse = {
  workflowRegistrations: [],
  nextCursor: "43bef43d-2094-4a32-a7ba-f356a57cc431",
  workflowVersions: [],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `workflowRegistrations`                                                              | [components.WorkflowRegistration](../../models/components/workflowregistration.md)[] | :heavy_check_mark:                                                                   | A list of workflow registrations                                                     |
| `nextCursor`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `workflowVersions`                                                                   | [components.WorkflowRegistration](../../models/components/workflowregistration.md)[] | :heavy_check_mark:                                                                   | Deprecated: use workflow_registrations                                               |