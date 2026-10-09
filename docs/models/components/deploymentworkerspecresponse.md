# DeploymentWorkerSpecResponse

## Example Usage

```typescript
import { DeploymentWorkerSpecResponse } from "@mistralai/mistralai/models/components";

let value: DeploymentWorkerSpecResponse = {
  githubUrl: "https://vast-subexpression.net",
  backendSpec: {
    type: "mistral_cloud",
  },
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `githubUrl`                                                                                                                     | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `type`                                                                                                                          | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `revision`                                                                                                                      | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `backendSpec`                                                                                                                   | *components.BackendSpec*                                                                                                        | :heavy_check_mark:                                                                                                              | Backend-specific configuration. 'mistral_cloud' is Mistral Cloud; 'kubernetes' is a deployment that already runs on Kubernetes. |
| `restartedAt`                                                                                                                   | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `commit`                                                                                                                        | [components.GitCommitMetadata](../../models/components/gitcommitmetadata.md)                                                    | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |