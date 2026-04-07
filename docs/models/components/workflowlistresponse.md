# WorkflowListResponse

## Example Usage

```typescript
import { WorkflowListResponse } from "@mistralai/mistralai/models/components";

let value: WorkflowListResponse = {
  workflows: [
    {
      id: "3d94c92e-9f81-4dcf-819b-a3c1c6a01b0d",
      name: "<value>",
      displayName: "Cicero86",
      archived: false,
    },
  ],
  nextCursor: "1cc21cc0-f73d-4058-9569-70d8cdcf2c76",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `workflows`                                                                                | [components.WorkflowBasicDefinition](../../models/components/workflowbasicdefinition.md)[] | :heavy_check_mark:                                                                         | A list of workflows                                                                        |
| `nextCursor`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |