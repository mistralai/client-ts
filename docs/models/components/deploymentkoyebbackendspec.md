# DeploymentKoyebBackendSpec

Worker configuration for the Koyeb backend.

## Example Usage

```typescript
import { DeploymentKoyebBackendSpec } from "@mistralai/mistralai/models/components";

let value: DeploymentKoyebBackendSpec = {
  type: "koyeb",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | *"koyeb"*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `buildDirectory`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | Docker build context, as a path in the repo. Defaults to the repo root.          |
| `dockerfilePath`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | Path to the Dockerfile, relative to 'build_directory'. Defaults to 'Dockerfile'. |