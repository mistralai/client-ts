# WorkflowGetResponse

## Example Usage

```typescript
import { WorkflowGetResponse } from "@mistralai/mistralai/models/components";

let value: WorkflowGetResponse = {
  workflow: {
    id: "ed6f6b8d-5a8a-428d-9c8c-2b811e446da9",
    name: "<value>",
    displayName: "Kristina11",
    type: "code",
    customerId: "0da9def9-b1ff-4571-a0ee-694169d76d8b",
    workspaceId: "efb580b3-4c49-426d-9602-d34e7b83aebe",
    active: false,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `workflow`                                                                                 | [components.WorkflowWithWorkerStatus](../../models/components/workflowwithworkerstatus.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |