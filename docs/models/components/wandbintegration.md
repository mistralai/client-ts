# WandbIntegration

## Example Usage

```typescript
import { WandbIntegration } from "@mistralai/mistralai/models/components";

let value: WandbIntegration = {
  project: "<value>",
  apiKey: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [components.WandbIntegrationType](../../models/components/wandbintegrationtype.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `project`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | The name of the project that the new run will be created under.                    |
| `name`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | A display name to set for the run. If not set, will use the job ID as the name.    |
| `apiKey`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | The WandB API key to use for authentication.                                       |
| `runName`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |