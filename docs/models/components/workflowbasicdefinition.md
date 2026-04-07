# WorkflowBasicDefinition

## Example Usage

```typescript
import { WorkflowBasicDefinition } from "@mistralai/mistralai/models/components";

let value: WorkflowBasicDefinition = {
  id: "2a522700-f7eb-4b69-9d7f-ec19bc1e4256",
  name: "<value>",
  displayName: "Mervin23",
  archived: true,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | The name of the workflow                                                   |
| `displayName`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | The display name of the workflow                                           |
| `description`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | A description of the workflow                                              |
| `metadata`                                                                 | [components.WorkflowMetadata](../../models/components/workflowmetadata.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `archived`                                                                 | *boolean*                                                                  | :heavy_check_mark:                                                         | Whether the workflow is archived                                           |