# UpdatePipelineConfigV1ObservabilityPipelineConfigsPipelineConfigIdPutRequest

## Example Usage

```typescript
import { UpdatePipelineConfigV1ObservabilityPipelineConfigsPipelineConfigIdPutRequest } from "@mistralai/mistralai/models/operations";

let value:
  UpdatePipelineConfigV1ObservabilityPipelineConfigsPipelineConfigIdPutRequest =
    {
      pipelineConfigId: "f47b53d4-c398-4956-be1c-0295ff1de923",
      updatePipelineConfigRequest: {
        pipelineKind: "moderation",
        selectors: [],
        definition: {
          destination: {
            protocol: "<value>",
            endpoint: "<value>",
            insecure: false,
          },
        },
        name: "<value>",
        enabled: false,
      },
    };
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `pipelineConfigId`                                                                               | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `updatePipelineConfigRequest`                                                                    | [components.UpdatePipelineConfigRequest](../../models/components/updatepipelineconfigrequest.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |