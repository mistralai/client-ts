# UpdatePipelineConfigRequest

## Example Usage

```typescript
import { UpdatePipelineConfigRequest } from "@mistralai/mistralai/models/components";

let value: UpdatePipelineConfigRequest = {
  pipelineKind: "judge",
  selectors: [
    {
      sourceKind: "span",
    },
  ],
  definition: {
    model: "Ranchero",
    prompt: "<value>",
  },
  name: "<value>",
  enabled: false,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `pipelineKind`                                                                           | [components.PipelineKind](../../models/components/pipelinekind.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `selectors`                                                                              | [components.PipelineConfigSelector](../../models/components/pipelineconfigselector.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `slug`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `group`                                                                                  | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `definition`                                                                             | *components.PipelineConfigDefinition*                                                    | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `enabled`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |