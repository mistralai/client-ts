# JudgePreview

## Example Usage

```typescript
import { JudgePreview } from "@mistralai/mistralai/models/components";

let value: JudgePreview = {
  id: "337869d8-9732-4755-9694-426a4ac0ae37",
  createdAt: new Date("2026-10-30T06:23:40.363Z"),
  updatedAt: new Date("2025-03-15T22:58:44.163Z"),
  deletedAt: new Date("2026-03-04T02:19:21.057Z"),
  ownerId: "b3125569-46b4-4828-b466-6adf1ccd8a60",
  workspaceId: "1bea1fb8-fd19-4fc1-9de1-2311a5060cf1",
  name: "<value>",
  description: "gracefully secret outsource",
  modelName: "<value>",
  output: {
    min: 0,
    minDescription: "<value>",
    max: 1,
    maxDescription: "<value>",
  },
  instructions: "<value>",
  tools: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ownerId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `modelName`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `output`                                                                                      | *components.JudgePreviewOutput*                                                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `instructions`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tools`                                                                                       | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `upRevision`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `downRevision`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `baseRevision`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |