# CreateVespaSearchIndexInfoRequest

## Example Usage

```typescript
import { CreateVespaSearchIndexInfoRequest } from "@mistralai/mistralai/models/components";

let value: CreateVespaSearchIndexInfoRequest = {
  type: "vespa",
  k8sCluster: "<value>",
  k8sNamespace: "<value>",
  vespaInstanceName: "<value>",
  schemas: [
    {
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | *"vespa"*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `k8sCluster`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `k8sNamespace`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `vespaInstanceName`                                                                          | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `schemas`                                                                                    | [components.CreateVespaSchemaRequest](../../models/components/createvespaschemarequest.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |