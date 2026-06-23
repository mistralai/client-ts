# GetSearchIndexSummaryResponseIndex

## Example Usage

```typescript
import { GetSearchIndexSummaryResponseIndex } from "@mistralai/mistralai/models/components";

let value: GetSearchIndexSummaryResponseIndex = {
  id: "865ea4ed-d730-4edc-8d8f-f02654e7587c",
  name: "<value>",
  creatorId: "<id>",
  documentCount: 348148,
  status: "offline",
  createdAt: new Date("2024-11-07T06:03:23.495Z"),
  modifiedAt: new Date("2026-04-22T16:03:32.747Z"),
  index: {
    type: "vespa",
    k8sCluster: "<value>",
    k8sNamespace: "<value>",
    vespaInstanceName: "<value>",
    schemas: [
      {
        id: "3befe9f6-cfa4-40f8-b28e-c6f8c21176c7",
        name: "<value>",
        documentCount: 283667,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `name`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `creatorId`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `documentCount`                                                                                                            | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `status`                                                                                                                   | [components.GetSearchIndexSummaryResponseIndexStatus](../../models/components/getsearchindexsummaryresponseindexstatus.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `createdAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `modifiedAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `index`                                                                                                                    | *components.GetSearchIndexSummaryResponseIndexIndex*                                                                       | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |