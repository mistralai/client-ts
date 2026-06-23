# RegisterSearchIndexRequestIndex

## Example Usage

```typescript
import { RegisterSearchIndexRequestIndex } from "@mistralai/mistralai/models/components";

let value: RegisterSearchIndexRequestIndex = {
  name: "<value>",
  index: {
    type: "vespa",
    k8sCluster: "<value>",
    k8sNamespace: "<value>",
    vespaInstanceName: "<value>",
    vespaVersion: "<value>",
    schemas: [
      {
        name: "<value>",
        fields: [],
        sd: "<value>",
      },
    ],
    queryUrl: "https://quiet-receptor.info/",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `status`                                                                                                             | [components.RegisterSearchIndexRequestIndexStatus](../../models/components/registersearchindexrequestindexstatus.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `index`                                                                                                              | *components.RegisterSearchIndexRequestIndexIndex*                                                                    | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |