# GetSearchIndexSummaryResponse

## Example Usage

```typescript
import { GetSearchIndexSummaryResponse } from "@mistralai/mistralai/models/components";

let value: GetSearchIndexSummaryResponse = {
  indexes: [
    {
      id: "a5eb13e5-1110-4cb7-aed9-b73d9d604c75",
      name: "<value>",
      creatorId: "<id>",
      documentCount: 190861,
      status: "online",
      createdAt: new Date("2026-05-05T01:43:40.506Z"),
      modifiedAt: new Date("2025-02-02T10:54:12.731Z"),
      index: {
        type: "vespa",
        k8sCluster: "<value>",
        k8sNamespace: "<value>",
        vespaInstanceName: "<value>",
        schemas: [],
      },
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `indexes`                                                                                                        | [components.GetSearchIndexSummaryResponseIndex](../../models/components/getsearchindexsummaryresponseindex.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |