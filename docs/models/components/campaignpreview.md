# CampaignPreview

## Example Usage

```typescript
import { CampaignPreview } from "@mistralai/mistralai/models/components";

let value: CampaignPreview = {
  id: "d4509922-2f7a-4260-9390-86f51fefdc0d",
  createdAt: new Date("2026-03-27T02:35:13.743Z"),
  updatedAt: new Date("2025-06-23T17:24:10.632Z"),
  deletedAt: new Date("2024-07-01T11:36:16.123Z"),
  name: "<value>",
  ownerId: "0e05c499-b5dd-4272-a7ff-5e668f4288c4",
  workspaceId: "0b4bb0b3-c258-4b3d-8bcc-6f285eb7de35",
  description: "youthfully haversack ah boo oof",
  maxNbEvents: 837863,
  searchParams: {
    filters: {},
  },
  judge: {
    id: "a8d931f9-62a3-41d8-9966-35bf4cad6b1f",
    createdAt: new Date("2025-04-12T19:52:39.411Z"),
    updatedAt: new Date("2025-10-04T07:38:13.109Z"),
    deletedAt: null,
    ownerId: "670a983d-fcb6-4321-95f1-d4551e638fd3",
    workspaceId: "7bc56880-5977-4961-8f7d-4974bc351a31",
    name: "<value>",
    description: "tensely lest though among",
    modelName: "<value>",
    output: {
      options: [
        {
          value: "<value>",
          description: "without indeed because",
        },
      ],
    },
    instructions: "<value>",
    tools: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ownerId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `maxNbEvents`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `searchParams`                                                                                | [components.FilterPayload](../../models/components/filterpayload.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `judge`                                                                                       | [components.JudgePreview](../../models/components/judgepreview.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |