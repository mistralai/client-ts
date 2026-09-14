# UpdatePipelineConfigV1ObservabilityPipelineConfigsPipelineConfigIdPutRequest

## Example Usage

```typescript
import { UpdatePipelineConfigV1ObservabilityPipelineConfigsPipelineConfigIdPutRequest } from "@mistralai/mistralai/models/operations";

let value:
  UpdatePipelineConfigV1ObservabilityPipelineConfigsPipelineConfigIdPutRequest =
    {
      pipelineConfigId: "f47b53d4-c398-4956-be1c-0295ff1de923",
      updatePipelineConfigRequest: {
        name: "<value>",
        pipelineKind: "moderation",
        selectors: [],
        definitions: [
          {
            slug: "<value>",
          },
        ],
        enabled: true,
      },
    };
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `pipelineConfigId`                                                                               | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `updatePipelineConfigRequest`                                                                    | [components.UpdatePipelineConfigRequest](../../models/components/updatepipelineconfigrequest.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |