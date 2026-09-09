# CreatePipelineConfigRequest

## Example Usage

```typescript
import { CreatePipelineConfigRequest } from "@mistralai/mistralai/models/components";

let value: CreatePipelineConfigRequest = {
  pipelineKind: "detection",
  selectors: [],
  definition: {
    destination: {
      protocol: "<value>",
      endpoint: "<value>",
      insecure: false,
    },
  },
  name: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `pipelineKind`                                                                           | [components.PipelineKind](../../models/components/pipelinekind.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `selectors`                                                                              | [components.PipelineConfigSelector](../../models/components/pipelineconfigselector.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `slug`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `group`                                                                                  | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `definition`                                                                             | *components.PipelineConfigDefinition*                                                    | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `enabled`                                                                                | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |