# Campaign

## Example Usage

```typescript
import { Campaign } from "@mistralai/mistralai/models/components";

let value: Campaign = {
  id: "c6b9acaf-5a5d-44b8-b059-78b504222688",
  createdAt: new Date("2024-03-24T06:39:55.641Z"),
  updatedAt: new Date("2026-05-20T06:44:25.953Z"),
  deletedAt: new Date("2026-11-16T08:21:01.480Z"),
  name: "<value>",
  ownerId: "b800d889-840f-4cf3-aa7b-c628e33deebc",
  workspaceId: "f0dc4754-9118-4b48-8bd2-3fab4de40dc6",
  description: "retract waist mid blah",
  maxNbEvents: 178583,
  searchParams: {
    filters: {
      field: "<value>",
      op: "len_eq",
      value: "<value>",
    },
  },
  judge: {
    id: "2d0da5b2-1786-44fd-9ecd-0faca7f1d9ff",
    createdAt: new Date("2026-03-29T16:10:11.637Z"),
    updatedAt: new Date("2024-04-10T08:32:29.465Z"),
    deletedAt: new Date("2025-04-26T13:46:24.531Z"),
    ownerId: "d80ecc75-1877-45e5-82a9-5d27d3f44070",
    workspaceId: "0bc0462c-5fd0-4161-b5aa-2ed517d8261a",
    name: "<value>",
    description: "decouple orchestrate intent clinking",
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
      "<value 2>",
      "<value 3>",
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
| `judge`                                                                                       | [components.Judge](../../models/components/judge.md)                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |