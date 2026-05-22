# CreateSearchIndexInfoRequest

## Example Usage

```typescript
import { CreateSearchIndexInfoRequest } from "@mistralai/mistralai/models/components";

let value: CreateSearchIndexInfoRequest = {
  name: "<value>",
  index: {
    type: "vespa",
    k8sCluster: "<value>",
    k8sNamespace: "<value>",
    vespaInstanceName: "<value>",
    schemas: [],
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `documentCount`                                                                                                | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `status`                                                                                                       | [components.CreateSearchIndexInfoRequestStatus](../../models/components/createsearchindexinforequeststatus.md) | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `index`                                                                                                        | *components.CreateSearchIndexInfoRequestIndex*                                                                 | :heavy_check_mark:                                                                                             | N/A                                                                                                            |