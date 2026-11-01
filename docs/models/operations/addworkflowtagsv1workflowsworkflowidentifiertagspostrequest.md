# AddWorkflowTagsV1WorkflowsWorkflowIdentifierTagsPostRequest

## Example Usage

```typescript
import { AddWorkflowTagsV1WorkflowsWorkflowIdentifierTagsPostRequest } from "@mistralai/mistralai/models/operations";

let value: AddWorkflowTagsV1WorkflowsWorkflowIdentifierTagsPostRequest = {
  workflowIdentifier: "<value>",
  workflowTagsAddRequest: {
    tags: [],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `workflowIdentifier`                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `workflowTagsAddRequest`                                                               | [components.WorkflowTagsAddRequest](../../models/components/workflowtagsaddrequest.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |