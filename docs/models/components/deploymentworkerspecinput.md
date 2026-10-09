# DeploymentWorkerSpecInput

## Example Usage

```typescript
import { DeploymentWorkerSpecInput } from "@mistralai/mistralai/models/components";

let value: DeploymentWorkerSpecInput = {
  githubUrl: "https://digital-thread.biz/",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `githubUrl`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `revision`                                                                                                   | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `backendSpec`                                                                                                | [components.DeploymentMistralCloudBackendSpec](../../models/components/deploymentmistralcloudbackendspec.md) | :heavy_minus_sign:                                                                                           | Backend-specific configuration for the Mistral Cloud backend.                                                |