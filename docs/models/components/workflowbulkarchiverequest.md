# WorkflowBulkArchiveRequest

## Example Usage

```typescript
import { WorkflowBulkArchiveRequest } from "@mistralai/mistralai/models/components";

let value: WorkflowBulkArchiveRequest = {
  workflowIds: [
    "aebd1264-b960-49ab-b865-284e3da81ff4",
    "8a97e0f2-ee72-4404-b97e-e6dbdc835aad",
  ],
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `workflowIds`                   | *string*[]                      | :heavy_check_mark:              | List of workflow IDs to archive |