# PipelineConfigsResponse

## Example Usage

```typescript
import { PipelineConfigsResponse } from "@mistralai/mistralai/models/components";

let value: PipelineConfigsResponse = {
  pipelineConfigs: [
    {
      id: "24b741da-9a7d-4b36-85e2-671e9b7ffad3",
      scope: "workspace",
      workspaceId: "64f8e831-b47f-4d37-aec6-0ddcded6026f",
      name: "<value>",
      pipelineKind: "export",
      selectors: [],
      enabled: false,
      definitionHash: "<value>",
      definition: {
        model: "Ranchero",
        prompt: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `pipelineConfigs`                                                        | [components.PipelineConfig](../../models/components/pipelineconfig.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |