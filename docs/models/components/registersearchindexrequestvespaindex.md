# RegisterSearchIndexRequestVespaIndex

## Example Usage

```typescript
import { RegisterSearchIndexRequestVespaIndex } from "@mistralai/mistralai/models/components";

let value: RegisterSearchIndexRequestVespaIndex = {
  type: "vespa",
  k8sCluster: "<value>",
  k8sNamespace: "<value>",
  vespaInstanceName: "<value>",
  vespaVersion: "<value>",
  schemas: [],
  queryUrl: "https://energetic-devastation.org/",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | *"vespa"*                                                                                                                        | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `k8sCluster`                                                                                                                     | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `k8sNamespace`                                                                                                                   | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `vespaInstanceName`                                                                                                              | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `vespaVersion`                                                                                                                   | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `schemas`                                                                                                                        | [components.RegisterSearchIndexRequestVespaSchemaModel](../../models/components/registersearchindexrequestvespaschemamodel.md)[] | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `queryUrl`                                                                                                                       | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |