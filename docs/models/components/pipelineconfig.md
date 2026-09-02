# PipelineConfig

## Example Usage

```typescript
import { PipelineConfig } from "@mistralai/mistralai/models/components";

let value: PipelineConfig = {
  id: "a0e3d4e4-75ec-4ef6-a438-f0ebe0b34b81",
  scope: "shared",
  workspaceId: "324a021c-2d11-48cd-9d0f-5a6391516dbc",
  name: "<value>",
  pipelineKind: "moderation",
  selectors: [],
  enabled: true,
  definitionHash: "<value>",
  definition: {
    model: "mistral-moderation-latest",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `scope`                                                                                  | [components.PipelineConfigScope](../../models/components/pipelineconfigscope.md)         | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `workspaceId`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `slug`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `group`                                                                                  | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `pipelineKind`                                                                           | [components.PipelineKind](../../models/components/pipelinekind.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `selectors`                                                                              | [components.PipelineConfigSelector](../../models/components/pipelineconfigselector.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `enabled`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `definitionHash`                                                                         | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `definition`                                                                             | *components.PipelineConfigDefinition*                                                    | :heavy_check_mark:                                                                       | N/A                                                                                      |