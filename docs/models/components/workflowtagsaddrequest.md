# WorkflowTagsAddRequest

## Example Usage

```typescript
import { WorkflowTagsAddRequest } from "@mistralai/mistralai/models/components";

let value: WorkflowTagsAddRequest = {
  tags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `tags`                                               | *string*[]                                           | :heavy_check_mark:                                   | Tags to add to the workflow. Existing tags are kept. |