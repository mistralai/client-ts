# GetSearchIndexSummaryResponseVespaIndex

## Example Usage

```typescript
import { GetSearchIndexSummaryResponseVespaIndex } from "@mistralai/mistralai/models/components";

let value: GetSearchIndexSummaryResponseVespaIndex = {
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
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                 | *"vespa"*                                                                                                                              | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `k8sCluster`                                                                                                                           | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `k8sNamespace`                                                                                                                         | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `vespaInstanceName`                                                                                                                    | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `schemas`                                                                                                                              | [components.GetSearchIndexSummaryResponseVespaSchemaModel](../../models/components/getsearchindexsummaryresponsevespaschemamodel.md)[] | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |