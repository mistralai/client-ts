# CreatePipelineRequest

## Example Usage

```typescript
import { CreatePipelineRequest } from "@mistralai/mistralai/models/components";

let value: CreatePipelineRequest = {
  name: "<value>",
  selectors: [],
  definitions: [
    {
      slug: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `selectors`                                                                              | [components.PipelineConfigSelector](../../models/components/pipelineconfigselector.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `definitions`                                                                            | [components.JudgeDefinition](../../models/components/judgedefinition.md)[]               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `enabled`                                                                                | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |