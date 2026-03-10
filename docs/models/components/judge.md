# Judge

## Example Usage

```typescript
import { Judge } from "@mistralai/mistralai/models/components";

let value: Judge = {
  id: "b49bbb71-bb92-468f-8bb7-12c859e72210",
  createdAt: new Date("2026-11-30T04:46:19.631Z"),
  updatedAt: new Date("2025-04-19T12:43:56.036Z"),
  deletedAt: new Date("2026-01-27T23:43:48.005Z"),
  ownerId: "ecdb56ba-4be2-4972-8017-92cbd96adea6",
  workspaceId: "034b8aa1-4e86-4da8-b2c1-6facd2af41ad",
  name: "<value>",
  description: "last huzzah whack pfft",
  modelName: "<value>",
  output: {
    type: "REGRESSION",
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
| `output`                                                                                      | *components.JudgeOutputUnion*                                                                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `instructions`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tools`                                                                                       | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `upRevision`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `downRevision`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `baseRevision`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |