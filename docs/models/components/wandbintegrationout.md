# WandbIntegrationOut

## Example Usage

```typescript
import { WandbIntegrationOut } from "@mistralai/mistralai/models/components";

let value: WandbIntegrationOut = {
  project: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | [components.WandbIntegrationOutType](../../models/components/wandbintegrationouttype.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `project`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | The name of the project that the new run will be created under.                          |
| `name`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | A display name to set for the run. If not set, will use the job ID as the name.          |
| `runName`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `url`                                                                                    | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |