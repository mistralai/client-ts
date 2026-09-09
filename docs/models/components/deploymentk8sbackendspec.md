# DeploymentK8sBackendSpec

Worker configuration for the Kubernetes backend.

## Example Usage

```typescript
import { DeploymentK8sBackendSpec } from "@mistralai/mistralai/models/components";

let value: DeploymentK8sBackendSpec = {
  type: "kubernetes",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                            | *"kubernetes"*                                                                                                    | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `entrypoint`                                                                                                      | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Either a 'module:function' reference (e.g. 'worker:main') or a '.py' script path relative to 'working_dir'.       |
| `workingDir`                                                                                                      | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Path in the repo holding the worker's pyproject.toml, for monorepo layouts. Leave empty for single-package repos. |