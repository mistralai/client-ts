# DatasetImportTask

## Example Usage

```typescript
import { DatasetImportTask } from "@mistralai/mistralai/models/components";

let value: DatasetImportTask = {
  id: "5904ce33-4a7a-4759-80cb-db2aa70cd114",
  createdAt: new Date("2026-12-08T15:06:24.419Z"),
  updatedAt: new Date("2026-03-08T10:54:37.438Z"),
  deletedAt: new Date("2026-07-10T17:50:55.338Z"),
  creatorId: "3a41cf41-6cf8-4627-bbf6-b5801b047623",
  datasetId: "ebfd92b3-8804-48b7-b2bb-9e227bf2a96c",
  workspaceId: "c52c8402-708b-43cc-b454-79eba7cae29f",
  status: "UNKNOWN",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `creatorId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `datasetId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.BaseTaskStatus](../../models/components/base-task-status.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `progress`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `message`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |