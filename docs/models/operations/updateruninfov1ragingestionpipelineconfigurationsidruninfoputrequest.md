# UpdateRunInfoV1RagIngestionPipelineConfigurationsIdRunInfoPutRequest

## Example Usage

```typescript
import { UpdateRunInfoV1RagIngestionPipelineConfigurationsIdRunInfoPutRequest } from "@mistralai/mistralai/models/operations";

let value:
  UpdateRunInfoV1RagIngestionPipelineConfigurationsIdRunInfoPutRequest = {
    id: "265e592b-f739-4582-803e-2596afab6dfc",
    updateRunInfo: {
      executionTime: new Date("2025-05-27T08:35:25.461Z"),
      chunksCount: 372979,
    },
  };
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `updateRunInfo`                                                      | [components.UpdateRunInfo](../../models/components/updateruninfo.md) | :heavy_check_mark:                                                   | N/A                                                                  |