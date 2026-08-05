# RegisterDeploymentRequestVespaDeployment

## Example Usage

```typescript
import { RegisterDeploymentRequestVespaDeployment } from "@mistralai/mistralai/models/components";

let value: RegisterDeploymentRequestVespaDeployment = {
  type: "vespa",
  vespaVersion: "<value>",
  indexes: [],
  queryUrl: "https://taut-discourse.com",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | *"vespa"*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `vespaVersion`                                                                                                     | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `indexes`                                                                                                          | [components.RegisterDeploymentRequestVespaIndex](../../models/components/registerdeploymentrequestvespaindex.md)[] | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `queryUrl`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |