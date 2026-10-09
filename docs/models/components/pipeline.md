# Pipeline

Pipeline response schema. Pipelines are hard-deleted — no deleted_at field.

## Example Usage

```typescript
import { Pipeline } from "@mistralai/mistralai/models/components";

let value: Pipeline = {
  id: "9d0e846c-c109-4ae6-b239-023cb980fc25",
  createdAt: new Date("2024-03-15T22:34:49.955Z"),
  updatedAt: new Date("2026-05-19T01:21:54.660Z"),
  workspaceId: "585b0c48-d322-4432-aba7-93f3ed5295cf",
  name: "<value>",
  slug: "<value>",
  description: "fooey lest repentant now which into drat",
  selectors: [
    {
      sourceKind: "span",
    },
  ],
  enabled: false,
  creatorId: "0db83e0b-c14c-4690-861e-af431fc5b74d",
  pipelineConfigs: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `slug`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `selectors`                                                                                   | [components.PipelineConfigSelector](../../models/components/pipelineconfigselector.md)[]      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `creatorId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pipelineConfigs`                                                                             | [components.PipelineConfig](../../models/components/pipelineconfig.md)[]                      | :heavy_check_mark:                                                                            | N/A                                                                                           |