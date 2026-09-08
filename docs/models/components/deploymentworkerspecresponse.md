# DeploymentWorkerSpecResponse

## Example Usage

```typescript
import { DeploymentWorkerSpecResponse } from "@mistralai/mistralai/models/components";

let value: DeploymentWorkerSpecResponse = {
  githubUrl: "https://vast-subexpression.net",
  backendSpec: {
    type: "kubernetes",
  },
  commitSha: "<value>",
  entrypoint: null,
  workingDir: "<value>",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `githubUrl`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `type`                                                                                                                  | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `revision`                                                                                                              | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `backendSpec`                                                                                                           | *components.DeploymentWorkerSpecResponseBackendSpec*                                                                    | :heavy_check_mark:                                                                                                      | Backend-specific configuration. The arm's 'type' says where the worker runs: 'koyeb' or 'kubernetes'.                   |
| `restartedAt`                                                                                                           | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `commit`                                                                                                                | [components.GitCommitMetadata](../../models/components/gitcommitmetadata.md)                                            | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| ~~`commitSha`~~                                                                                                         | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| ~~`entrypoint`~~                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| ~~`workingDir`~~                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |