# PipelineConfig

## Example Usage

```typescript
import { PipelineConfig } from "@mistralai/mistralai/models/components";

let value: PipelineConfig = {
  id: "a0e3d4e4-75ec-4ef6-a438-f0ebe0b34b81",
  createdAt: new Date("2026-07-09T00:41:44.724Z"),
  updatedAt: new Date("2024-09-26T10:18:33.896Z"),
  deletedAt: new Date("2024-10-07T15:52:03.842Z"),
  scope: "shared",
  workspaceId: "021c2d11-8cdd-40f5-9a63-91516dbc4716",
  name: "<value>",
  pipelineKind: "export",
  selectors: [
    {
      sourceKind: "span",
    },
  ],
  enabled: true,
  definitionHash: "<value>",
  definition: {
    destination: {
      protocol: "<value>",
      endpoint: "<value>",
      insecure: false,
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scope`                                                                                       | [components.PipelineConfigScope](../../models/components/pipelineconfigscope.md)              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `slug`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `group`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `pipelineKind`                                                                                | [components.PipelineKind](../../models/components/pipelinekind.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `selectors`                                                                                   | [components.PipelineConfigSelector](../../models/components/pipelineconfigselector.md)[]      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `definitionHash`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `definition`                                                                                  | *components.PipelineConfigDefinition*                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |