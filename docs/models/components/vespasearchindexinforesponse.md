# VespaSearchIndexInfoResponse

## Example Usage

```typescript
import { VespaSearchIndexInfoResponse } from "@mistralai/mistralai/models/components";

let value: VespaSearchIndexInfoResponse = {
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
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | *"vespa"*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `k8sCluster`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `k8sNamespace`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `vespaInstanceName`                                                                | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `schemas`                                                                          | [components.VespaSchemaResponse](../../models/components/vespaschemaresponse.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |