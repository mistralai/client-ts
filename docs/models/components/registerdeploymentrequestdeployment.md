# RegisterDeploymentRequestDeployment

## Example Usage

```typescript
import { RegisterDeploymentRequestDeployment } from "@mistralai/mistralai/models/components";

let value: RegisterDeploymentRequestDeployment = {
  name: "<value>",
  deployment: {
    type: "vespa",
    vespaVersion: "<value>",
    indexes: [
      {
        name: "<value>",
        fields: [],
        sd: "<value>",
      },
    ],
    queryUrl: "https://thorough-descent.info",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `status`                                                                                                                     | [components.RegisterDeploymentRequestDeploymentStatus](../../models/components/registerdeploymentrequestdeploymentstatus.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `deployment`                                                                                                                 | *components.RegisterDeploymentRequestDeploymentDeployment*                                                                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |