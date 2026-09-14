# UpdatePipelineConfigRequest

## Example Usage

```typescript
import { UpdatePipelineConfigRequest } from "@mistralai/mistralai/models/components";

let value: UpdatePipelineConfigRequest = {
  name: "<value>",
  pipelineKind: "judge",
  selectors: [
    {
      sourceKind: "span",
    },
  ],
  definitions: [],
  enabled: false,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `pipelineKind`                                                                           | [components.PipelineKind](../../models/components/pipelinekind.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `selectors`                                                                              | [components.PipelineConfigSelector](../../models/components/pipelineconfigselector.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `definitions`                                                                            | *components.PipelineConfigDefinition*[]                                                  | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `enabled`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |