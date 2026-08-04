# CreateDeploymentRequest

## Example Usage

```typescript
import { CreateDeploymentRequest } from "@mistralai/mistralai/models/components";

let value: CreateDeploymentRequest = {
  name: "<value>",
  spec: {
    githubUrl: "https://straight-coal.org",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `spec`                                                                                       | [components.DeploymentWorkerSpecInput](../../models/components/deploymentworkerspecinput.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `resources`                                                                                  | [components.DeploymentResourceConfig](../../models/components/deploymentresourceconfig.md)   | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `hardened`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |