# Project

## Example Usage

```typescript
import { Project } from "@mistralai/mistralai/models/components";

let value: Project = {
  id: "d6e796ed-23ec-49fc-bb5e-1f1e36cc32d4",
  createdAt: new Date("2025-03-05T21:50:02.319Z"),
  updatedAt: new Date("2024-04-03T10:58:55.583Z"),
  deletedAt: new Date("2025-06-20T04:36:15.689Z"),
  workspaceId: "8ef0ba39-805f-45ac-aae7-34eaa0c54621",
  creatorId: "7ed979c0-9355-4720-9dbf-3708cae309ad",
  name: "<value>",
  slug: "<value>",
  description: null,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `creatorId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `slug`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isFavorite`                                                                                  | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `evaluations`                                                                                 | [components.ProjectEvaluationSummary](../../models/components/projectevaluationsummary.md)[]  | :heavy_minus_sign:                                                                            | N/A                                                                                           |