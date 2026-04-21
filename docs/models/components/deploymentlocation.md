# DeploymentLocation

## Example Usage

```typescript
import { DeploymentLocation } from "@mistralai/mistralai/models/components";

let value: DeploymentLocation = {
  locationType: "k8s",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `locationType`                                                     | [components.LocationType](../../models/components/locationtype.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `k8sCluster`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | K8s cluster name, if applicable                                    |
| `k8sNamespace`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | K8s namespace, if applicable                                       |