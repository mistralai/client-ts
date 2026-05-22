# SearchIndexResponse

## Example Usage

```typescript
import { SearchIndexResponse } from "@mistralai/mistralai/models/components";

let value: SearchIndexResponse = {
  id: "337bc423-33f2-4689-bfe8-f2daedd0a99d",
  name: "<value>",
  creatorId: "<id>",
  documentCount: 925818,
  status: "online",
  createdAt: new Date("2024-02-23T17:09:12.388Z"),
  modifiedAt: new Date("2026-07-04T13:40:02.939Z"),
  index: {
    type: "vespa",
    k8sCluster: "<value>",
    k8sNamespace: "<value>",
    vespaInstanceName: "<value>",
    schemas: [
      {
        name: "<value>",
        documentCount: null,
      },
    ],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `creatorId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `documentCount`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.SearchIndexResponseStatus](../../models/components/searchindexresponsestatus.md)  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `index`                                                                                       | *components.SearchIndexResponseIndex*                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |